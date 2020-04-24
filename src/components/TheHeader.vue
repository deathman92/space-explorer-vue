<template>
  <div class="header">
    <img :src="avatar" alt="Space dog" class="image" />
    <div>
      <h2><slot>Space Explorer</slot></h2>
      <div class="subheading">
        {{ email }}
      </div>
    </div>
  </div>
</template>

<script>
import dog1 from "@/assets/images/dog-1.png";
import dog2 from "@/assets/images/dog-2.png";
import dog3 from "@/assets/images/dog-3.png";
import { getToken } from "@/vue-apollo";

const max = 25; // 25 letters in the alphabet
const offset = 97; // letter A's charcode is 97
const avatars = [dog1, dog2, dog3];
const maxIndex = avatars.length - 1;

function pickAvatarByEmail(email) {
  const charCode = email.toLowerCase().charCodeAt(0) - offset;
  const percentile = Math.max(0, Math.min(max, charCode)) / max;
  return avatars[Math.round(maxIndex * percentile)];
}

export default {
  name: "TheHeader",
  props: {
    image: String
  },
  computed: {
    email() {
      return atob(getToken());
    },
    avatar() {
      return this.image || pickAvatarByEmail(this.email);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.header {
  display: flex;
  align-items: center;
  margin-bottom: #{$unit * 4.5}px;
}

.image {
  margin-right: #{$unit * 2.5}px;
  height: 134px;
}

.subheading {
  margin-top: #{$unit / 2}px;
  color: $color-secondary;
}
</style>

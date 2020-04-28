<template>
  <div class="footer">
    <div class="container">
      <MenuItem to="/" style="text-decoration: none;">
        <HomeIcon />
        Home
      </MenuItem>
      <MenuItem to="/cart" style="text-decoration: none;">
        <CartIcon />
        Cart
      </MenuItem>
      <MenuItem to="/profile" style="text-decoration: none;">
        <ProfileIcon />
        Profile
      </MenuItem>
      <MenuItem class="logout-item" @click="onLogout">
        <ExitIcon />
        Logout
      </MenuItem>
    </div>
  </div>
</template>

<script>
import HomeIcon from "@/assets/icons/home.svg";
import CartIcon from "@/assets/icons/cart.svg";
import ProfileIcon from "@/assets/icons/profile.svg";
import ExitIcon from "@/assets/icons/exit.svg";
import MenuItem from "@/components/MenuItem";
import { onLogout } from "@/vue-apollo";

export default {
  name: "TheFooter",
  components: { MenuItem, HomeIcon, CartIcon, ProfileIcon, ExitIcon },
  methods: {
    onLogout() {
      onLogout(this.$apollo.getClient());
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.footer {
  flex-shrink: 0;
  margin-top: auto;
  background-color: white;
  color: $color-textSecondary;
  position: sticky;
  bottom: 0;
}

.container {
  display: flex;
  align-items: center;
  max-width: 460px;
  padding: #{$unit * 2.5}px;
  margin: 0 auto;
}

.logout-item {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}
</style>

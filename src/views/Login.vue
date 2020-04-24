<template>
  <Loading v-if="$apollo.loading" />
  <LoginForm v-else @login="login" />
</template>

<script>
import LoginUser from "@/graphql/LoginUser.graphql";
import { onLogin } from "@/vue-apollo";
import Loading from "@/components/Loading";
import LoginForm from "@/components/LoginForm";

export default {
  name: "Login",
  components: { LoginForm, Loading },
  methods: {
    async login(email) {
      const { data } = await this.$apollo.mutate({
        mutation: LoginUser,
        variables: { email }
      });
      await onLogin(this.$apollo.getClient(), data.login);
    }
  }
};
</script>

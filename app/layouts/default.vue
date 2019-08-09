<template>
  <div>
    <TheHeader
      :to-posts="toPosts"
      :to-login-user="toLoginUser"
      :to-logout="toLogout"
      :to-login="toLogin"
      :to-posts-new="toPostsNew"
    />
    <div class="wrapper">
      <nuxt class="container" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TheHeader from '~/components/organisms/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
  data() {
    return {
      toPosts: { path: '/posts/' },
      toLogout: { path: '/' },
      toLogin: { path: '/' },
      toPostsNew: { path: '/posts/new/' },
    };
  },
  computed: {
    toLoginUser() {
      const name = this.isLoggedIn ? 'users-id' : 'users';
      const params = this.isLoggedIn ? { id: this.loginUser.id } : { id: '' };
      return { name, params };
    },
    ...mapGetters('auth', ['loginUser', 'isLoggedIn']),
  },
};
</script>

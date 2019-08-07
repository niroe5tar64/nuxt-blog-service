<template>
  <section class="container">
    <LoginForm
      @on-click-resister="handleClickResister"
      @on-click-login="handleClickLogin"
    />
  </section>
</template>

<script>
import Post from '~/models/Post';
import data from '~/data';
import LoginForm from '~/components/organisms/LoginForm.vue';

export default {
  components: {
    LoginForm, //: () => import('~/components/organisms/LoginForm.vue'),
  },
  async fetch({ redirect, store }) {
    if (store.getters['auth/loginUser']) {
      redirect('/posts/');
    }
    Post.create({ data: await data() });
  },
  methods: {
    async handleClickResister() {
      this.$router.push('/posts/');
    },
    async handleClickLogin() {
      this.$router.push('/posts/');
    },
  },
};
</script>

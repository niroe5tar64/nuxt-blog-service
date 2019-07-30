<template>
  <section class="container">
    <login-form />
  </section>
</template>

<script>
import Post from '~/models/Post';
import data from '~/data';
import LoginForm from '~/components/LoginForm.vue';

export default {
  components: {
    LoginForm,
  },
  async fetch({ redirect, store }) {
    if (store.getters['auth/loginUser']) {
      redirect('/posts/');
    }
    Post.create({ data: await data() });
  },
};
</script>

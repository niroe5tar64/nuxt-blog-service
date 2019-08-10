<template>
  <section class="container posts-page">
    <div style="flex: 1;">
      <PostCard :post="post" :to-author="toAuthor" />
      <p>
        <nuxt-link to="/posts">&lt; 投稿一覧へ戻る</nuxt-link>
      </p>
    </div>
  </section>
</template>

<script>
import dayjs from '~/plugins/dayjs';
import PostCard from '~/components/organisms/PostCard';
import Post from '~/models/Post';
export default {
  async validate({ params }) {
    return Post.query().find(params.id);
  },

  filters: {
    time(val) {
      return dayjs(val).format('YYYY/MM/DD HH:mm:ss');
    },
  },

  components: {
    PostCard,
  },

  computed: {
    post() {
      return Post.query()
        .with('user')
        .find(this.$route.params.id);
    },
    toAuthor() {
      const name = this.post.user ? 'users-id' : 'users';
      const params = this.post.user ? { id: this.post.user.id } : { id: '' };

      return { name, params };
    },
  },
};
</script>

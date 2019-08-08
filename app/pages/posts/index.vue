<template>
  <section class="container posts-page">
    <el-card>
      <div slot="header" class="clearfix">
        <span>新規投稿</span>
      </div>
      <PostsTable :data="showPosts" @row-click="handleRowClick" />
    </el-card>
  </section>
</template>

<script>
//import moment from '~/plugins/moment';
import Post from '~/models/Post';
import PostsTable from '~/components/organisms/PostsTable.vue';

export default {
  components: {
    PostsTable, //: () => import('~/components/organisms/PostsTable.vue'),
  },
  computed: {
    showPosts() {
      const posts = Post.query()
        .with('user')
        .orderBy('id', 'asc')
        .get();

      return posts;

      // return posts.map((post) => {
      //   post.created_at = moment(post.created_at.toISOString).format(
      //     'YYYY/MM/DD HH:mm:ss',
      //   );
      // });
    },
  },
  methods: {
    handleRowClick(post) {
      this.$router.push(`/posts/${post.id}`);
    },
  },
};
</script>

<style>
.posts-page .el-table__row {
  cursor: pointer;
}
</style>

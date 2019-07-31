<template>
  <section class="container posts-page">
    <el-card>
      <div slot="header" class="clearfix">
        <span>新規投稿</span>
      </div>
      <posts-table :data="showPosts" />
    </el-card>
  </section>
</template>

<script>
//import moment from '~/plugins/moment';
import PostsTable from '~/components/PostsTable';
import Post from '~/models/Post';
export default {
  components: {
    PostsTable,
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
};
</script>

<style>
.posts-page .el-table__row {
  cursor: pointer;
}
</style>

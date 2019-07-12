<template>
  <section class="container posts-page">
    <el-card>
      <div slot="header" class="clearfix">
        <span>新規投稿</span>
      </div>
      <el-table
        :data="showPosts"
        style="width: 100%"
        class="table"
        @row-click="handleClick"
      >
        <el-table-column prop="title" label="タイトル" />
        <el-table-column prop="user.id" label="投稿者" width="180" />
        <el-table-column prop="created_at" label="投稿日時" width="240" />
      </el-table>
    </el-card>
  </section>
</template>

<script>
//import moment from '~/plugins/moment';
import Post from '~/models/Post';
export default {
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
    handleClick(post) {
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

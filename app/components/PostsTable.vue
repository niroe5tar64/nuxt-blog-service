<template>
  <section>
    <el-table :data="data" style="width: 100%" @row-click="handleClick">
      <el-table-column prop="title" :label="labelTitle" />
      <el-table-column
        v-if="hasUser"
        prop="user.id"
        :label="labelUser"
        :width="widthUser"
      />
      <el-table-column
        prop="created_at"
        :label="labelCreatedAt"
        :width="widthCreatedAt"
      />
    </el-table>
  </section>
</template>

<script>
// import Post from '~/models/Post';

export default {
  props: {
    data: { type: Array, default: () => {} },
    labelTitle: { type: String, default: 'タイトル' },
    labelUser: { type: String, default: '投稿者' },
    labelCreatedAt: { type: String, default: '投稿日時' },
    widthUser: { type: [String, Number], default: 180 },
    widthCreatedAt: { type: [String, Number], default: 240 },
    hasUser: { type: Boolean, default: true },
  },

  methods: {
    handleClick(post) {
      // console.log(Post.create({ data: this.data }));
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

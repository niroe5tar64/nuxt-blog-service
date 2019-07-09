<template>
  <section class="container posts-page">
    <el-card>
      <div slot="header" class="clearfix">
        <span>新規投稿</span>
      </div>
      <el-table :data="showPosts" style="width: 100%" class="table">
        <el-table-column prop="title" label="タイトル" />
        <el-table-column prop="user.id" label="投稿者" width="180" />
        <el-table-column prop="created_at" label="投稿日時" width="240" />
      </el-table>
    </el-card>
  </section>
</template>

<script>
export default {
  computed: {
    showPosts() {
      return [
        {
          id: '001',
          title: 'title #1',
          body: 'body #1',
          created_at: '2018/08/10 12:00:00',
          user: {
            id: 'niro',
          },
        },
        {
          id: '002',
          title: 'title #2',
          body: 'body #2',
          created_at: '2018/12/25 15:00:00',
          user: {
            id: 'niroe5tar64',
          },
        },
      ];
    },
  },
};
</script>

<style>
.posts-page .el-table__row {
  cursor: pointer;
}
</style>

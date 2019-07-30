<template>
  <div>
    <el-row v-if="user">
      <el-col :span="6">
        <el-card class="text-center" style="margin-right: 16px;">
          <div>
            <img
              src="https://placehold.it/150x150"
              style="width: 100%;margin-bottom: 16px;border-radius:2px;"
              alt=""
            />
          </div>
          <h2>
            <b>{{ user.id }}</b>
          </h2>
        </el-card>
      </el-col>
      <el-col :span="18">
        <el-card>
          <div slot="header" class="clearfix">
            <span>{{ user.id }} さんの投稿</span>
          </div>
          <posts-table
            :data="userPosts"
            :has-user="false"
            width-created_at="160"
          />
          <!-- <el-table :data="userPosts" style="width: 100%" class="table">
            <el-table-column prop="title" label="タイトル" />
            <el-table-column prop="created_at" label="投稿日時" width="160" />
          </el-table> -->
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import moment from '~/plugins/moment';
import PostsTable from '~/components/PostsTable';
import User from '~/models/User';
import Post from '~/models/Post';
export default {
  components: {
    PostsTable,
  },
  async asyncData({ route, error }) {
    const user = User.query().find(route.params.id);
    if (!user) {
      error({ statusCode: 404 });
    }
  },
  computed: {
    userPosts() {
      const posts = Post.query()
        .with('user')
        .where('user_id', this.$route.params.id)
        .orderBy('id', 'asc')
        .get();

      return posts;
      // return post.map((post) => {
      //   post.created_at = moment(post.created_at).format('YYYY/MM/DD HH:mm:ss');
      //   return post;
      // });
    },
    user() {
      return User.query().find(this.$route.params.id);
    },
  },
};
</script>

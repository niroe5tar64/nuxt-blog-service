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
          <PostsTable
            :data="userPosts"
            :has-user="false"
            width-created_at="160"
            @row-click="handleRowClick"
          />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import moment from '~/plugins/moment';
import User from '~/models/User';
import Post from '~/models/Post';
import PostsTable from '~/components/organisms/PostsTable';
export default {
  components: {
    PostsTable, //: () => import('~/components/organisms/PostsTable'),
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
  methods: {
    handleRowClick(post) {
      this.$router.push(`/posts/${post.id}`);
    },
  },
};
</script>

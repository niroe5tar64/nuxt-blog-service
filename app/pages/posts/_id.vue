<template>
  <section class="container posts-page">
    <div style="flex: 1;">
      <el-card v-if="post">
        <div slot="header" class="clearfix">
          <h2>{{ post.title }}</h2>
          <small>by {{ post.user.id }}</small>
        </div>
        <p>{{ post.body }}</p>
        <no-ssr>
          <p class="text-right">
            <el-button
              v-if="isLiked"
              :disabled="!isLoggedIn"
              type="warning"
              round=""
              @click="unlike"
            >
              <span class="el-icon-star-on" />
              <span>{{ post.likes.length }}</span>
            </el-button>
            <el-button
              v-else
              :disabled="!isLoggedIn"
              type="warning"
              round=""
              @click="like"
            >
              <span class="el-icon-star-off" />
              <span>{{ post.likes.length }}</span>
            </el-button>
          </p>
        </no-ssr>
        <p class="text-right">{{ post.created_at | time }}</p>
      </el-card>
      <p>
        <nuxt-link to="/posts">&lt; 投稿一覧へ戻る</nuxt-link>
      </p>
    </div>
  </section>
</template>

<script>
import moment from '~/plugins/moment';
import { mapGetters } from 'vuex';
//import cloneDeep from 'lodash.clonedeep';
import Post from '~/models/Post';
export default {
  filters: {
    time(val) {
      return moment(val).format('YYYY/MM/DD HH:mm:ss');
    },
  },
  async asyncData({ route, error }) {
    const post = await Post.query()
      .with('user')
      .find(route.params.id);
    if (!post) {
      error({ statusCode: 404 });
    }
  },
  computed: {
    post() {
      return Post.query()
        .with('user')
        .find(this.$route.params.id);
    },
    isLiked() {
      if (!this.loginUser) return false;
      return true; // this.post.likes.find((l) => l.user_id === this.user.id);
    },
    ...mapGetters('auth', ['loginUser', 'isLoggedIn']),
  },
  methods: {
    like() {
      if (!this.isLoggedIn) {
        return;
      }
      // const likePayload = { user: this.user, post: this.post };
      // this.addLikeToPost(cloneDeep(likePayload));
      // this.addLikeLogToUser(cloneDeep(likePayload));
    },
    unlike() {
      if (!this.isLoggedIn) {
        return;
      }
    },
    // ...mapActions(['addLikeLogToUser']),
    // ...mapActions('posts', ['addLikeToPost']),
  },
};
</script>

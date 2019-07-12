<template>
  <section class="container posts-page">
    <el-card style="flex: 1;">
      <div slot="header" class="clearfix">
        <el-input v-model="formData.title" placeholder="タイトルを入力" />
      </div>
      <div>
        <el-input
          v-model="formData.body"
          placeholder="本文を入力･･････"
          type="textarea"
          rows="15"
        />
      </div>
      <div class="text-right" style="margin-top: 16px;">
        <el-button type="primary" round="" @click="publish">
          <span class="el-icon-upload2" />
          <span>publish</span>
        </el-button>
      </div>
    </el-card>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import Post from '~/models/Post';
import moment from '~/plugins/moment';

export default {
  asyncData({ redirect, store }) {
    if (!store.getters['auth/loginUser']) {
      redirect('/');
    }
    return {
      formData: Post.hydrate(),
    };
  },
  computed: {
    ...mapGetters('auth', ['loginUser']),
  },
  methods: {
    async publish() {
      Post.insert({
        data: {
          ...this.formData,
          user_id: this.loginUser.id,
          created_at: moment().format(),
        },
      });
      this.$router.push('/posts');
    },
  },
};
</script>

<style>
.posts-page .el-table__row {
  cursor: pointer;
}
</style>

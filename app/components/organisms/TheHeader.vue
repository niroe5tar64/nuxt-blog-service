<template>
  <el-menu mode="horizontal" :router="true">
    <el-menu-item index="1" style="pointer-events:none;">
      Nuxt Diary App
    </el-menu-item>
    <el-menu-item index="2" :route="toPosts">投稿一覧</el-menu-item>

    <no-ssr>
      <el-submenu v-if="loginUser" index="4" style="float: right;">
        <template slot="title">
          <span>{{ loginUser.id }}</span>
        </template>
        <el-menu-item index="4-1" :route="toLoginUser">マイページ</el-menu-item>
        <el-menu-item index="4-2" :route="toLogout" @click="handleLogout">
          ログアウト
        </el-menu-item>
      </el-submenu>

      <el-menu-item v-else index="4" style="float: right;" :route="toLogin">
        <span>ログイン</span>
      </el-menu-item>
    </no-ssr>
    <el-menu-item index="5" style="float: right" :route="toPostsNew">
      新規投稿
    </el-menu-item>
  </el-menu>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Cookies from 'universal-cookie';

export default {
  props: {
    toPosts: { type: Object, default: () => {} },
    toLoginUser: { type: Object, default: () => {} },
    toLogout: { type: Object, default: () => {} },
    toLogin: { type: Object, default: () => {} },
    toPostsNew: { type: Object, default: () => {} },
  },

  computed: {
    ...mapGetters('auth', ['loginUser']),
  },

  methods: {
    handleLogout() {
      const cookies = new Cookies();
      cookies.remove('loginUser');
      this.logout();
    },
    ...mapActions('auth', ['logout']),
  },
};
</script>

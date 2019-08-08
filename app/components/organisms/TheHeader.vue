<template>
  <el-menu mode="horizontal" :router="true">
    <el-menu-item index="1" style="pointer-events:none;">
      Nuxt Diary App
    </el-menu-item>
    <el-menu-item index="2" :route="toPosts">投稿一覧</el-menu-item>

    <no-ssr>
      <el-menu-item
        v-if="loginUser"
        index="4"
        style="float: right;"
        :route="toLoginUser"
      >
        <span>{{ loginUser.id }}</span>
      </el-menu-item>
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
import { mapGetters } from 'vuex';

export default {
  props: {
    toPosts: { type: Object, default: () => {} },
    toLoginUser: { type: Object, default: () => {} },
    toLogin: { type: Object, default: () => {} },
    toPostsNew: { type: Object, default: () => {} },
  },
  computed: {
    ...mapGetters('auth', ['loginUser']),
  },
};
</script>

<template>
  <div>
    <div class="form-content">
      <el-checkbox v-model="isResisterMode">
        アカウントを作成する
      </el-checkbox>
    </div>
    <div class="text-right">
      <div
        :is="button"
        type="primary"
        @on-click-resister="handleClickRssister"
        @on-click-login="handleClickLogin"
      />
    </div>
  </div>
</template>

<script>
import ResisterButton from '~/components/atoms/ResisterButton';
import LoginButton from '~/components/atoms/LoginButton';

export default {
  components: {},
  data() {
    return {
      isResisterMode: false,
    };
  },
  computed: {
    button() {
      return this.isResisterMode ? ResisterButton : LoginButton;
    },
  },
  methods: {
    async handleClickRssister() {
      this.$emit('on-click-resister');
    },
    async handleClickLogin() {
      this.$emit('on-click-login');
    },
  },
};
</script>

<style scoped>
.form-content {
  margin: 16px 0;
}
</style>

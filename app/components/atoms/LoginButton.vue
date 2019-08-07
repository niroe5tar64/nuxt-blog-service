<template>
  <div>
    <div class="text-right">
      <el-button type="primary" @click="handleClickSubmit">
        ログイン
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async handleClickSubmit() {
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

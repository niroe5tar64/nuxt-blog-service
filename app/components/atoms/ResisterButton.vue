<template>
  <div>
    <div class="text-right">
      <el-button type="primary" @click="handleClickSubmit">
        新規登録
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async handleClickSubmit() {
      this.$emit('on-click-resister');
    },
  },
};
</script>

<style scoped>
.form-content {
  margin: 16px 0;
}
</style>

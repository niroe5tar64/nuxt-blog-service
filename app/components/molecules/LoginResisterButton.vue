<template>
  <div>
    <div class="form-content">
      <el-checkbox v-model="isCreateMode">
        アカウントを作成する
      </el-checkbox>
    </div>
    <div class="text-right">
      <el-button type="primary" @click="handleClickSubmit">
        {{ buttonText }}
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCreateMode: false,
    };
  },
  computed: {
    buttonText() {
      return this.isCreateMode ? '新規登録' : 'ログイン';
    },
  },
  methods: {
    async handleClickSubmit() {
      if (this.isCreateMode) {
        this.$emit('on-click-resister');
      } else {
        this.$emit('on-click-login');
      }
    },
  },
};
</script>

<style scoped>
.form-content {
  margin: 16px 0;
}
</style>

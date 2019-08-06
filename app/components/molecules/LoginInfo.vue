<template>
  <div class="form-content">
    <span>ユーザー ID</span>
    <el-input v-model="formData.id" placeholder="Please input User ID." />
  </div>
</template>

<script>
export default {
  props: {
    formData: {
      type: Object,
      default: () => {
        return { id: '' };
      },
    },
  },
};
</script>

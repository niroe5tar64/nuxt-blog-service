<template>
  <p class="text-right">
    <el-button
      v-if="isLiked"
      :disabled="!isLoggedIn"
      type="warning"
      round=""
      @click="handleLike"
    >
      <span class="el-icon-star-on" />
      <!-- <span>{{ post.likes.length }}</span> -->
    </el-button>
    <el-button
      v-else
      :disabled="!isLoggedIn"
      type="warning"
      round=""
      @click="handleLike"
    >
      <span class="el-icon-star-off" />
      <!-- <span>{{ post.likes.length }}</span> -->
    </el-button>
  </p>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    isLiked() {
      return this.loginUser ? true : false;
    },
    ...mapGetters('auth', ['loginUser', 'isLoggedIn']),
  },
  methods: {
    handleLike() {
      if (!this.isLoggedIn) {
        return;
      }
      if (this.isLiked) {
        this.$emit('press-unlike');
      } else {
        this.$emit('press-like');
      }
    },
  },
};
</script>

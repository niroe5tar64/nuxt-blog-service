<template>
  <el-card v-if="post">
    <div slot="header" class="clearfix">
      <h2>{{ post.title }}</h2>
      <AuthorLabel :post="post" :to-author="toAuthor" />
    </div>
    <p>{{ post.body }}</p>
    <no-ssr>
      <LikeButton
        :post="post"
        @press-like="handlePressLike"
        @press-unlike="handlePressUnlike"
      />
    </no-ssr>
    <p class="text-right">{{ post.created_at | time }}</p>
  </el-card>
</template>

<script>
import dayjs from '~/plugins/dayjs';
import AuthorLabel from '~/components/atoms/AuthorLabel';
import LikeButton from '~/components/atoms/LikeButton';
export default {
  components: {
    AuthorLabel,
    LikeButton,
  },
  filters: {
    time(val) {
      return dayjs(val).format('YYYY/MM/DD HH:mm:ss');
    },
  },
  props: {
    post: { type: Object, default: () => {} },
    toAuthor: { type: [String, Object], default: '' },
  },
  methods: {
    handlePressLike() {
      console.log('liek');
    },
    handlePressUnlike() {
      console.log('unlike');
    },
    handleClickAuthor() {
      this.$emit('on-click-author');
    },
  },
};
</script>

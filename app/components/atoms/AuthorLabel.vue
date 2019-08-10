<template>
  <small>
    by
    <nuxt-link :to="toAuthor">{{ post.user.id }}</nuxt-link>
  </small>
</template>

<script>
export default {
  props: {
    post: { type: Object, default: () => {} },
    toAuthor: { type: [String, Object], default: '' },
  },
};
</script>

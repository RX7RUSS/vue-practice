<template>
  <div class="row">
    <app-post v-for="(post, index) in post" @click.native="deletePost(index)">{{ post }}</app-post>
  </div>
</template>

<script>
  import Post from './Post.vue';

  export default {
    props: ['post'],
    components: {
      appPost: Post
    },
    methods: {
      deletePost(index) {
        this.$emit('postDeleted', index);
      }
    }
  }
</script>

<style>

</style>

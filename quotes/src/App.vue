<template>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 text-center">
          <div class="alert alert-info">Instantly add a post and click to delete it!</div>
        </div>
      </div>
      <app-new-post @postAdded="newPost"></app-new-post>
      <app-post-grid :post="post" @postDeleted="deletePost"></app-post-grid>
      <div class="row">
        <div class="col-sm-12 text-center">
          <div class="alert alert-info">Instantly add a post and click to delete it!</div>
        </div>
      </div>
    </div>
</template>

<script>
  import PostGrid from './components/PostGrid.vue';
  import NewPost from './components/NewPost.vue';

    export default {
      data: function() {
        return {
          post: ['Example Placeholder Blog Post'],
          maxposts: 10
        }
      },
      methods: {
        newPost(post) {
          this.post.push(post);
        },
        deletePost(index) {
          this.post.splice(index, 1);
        }
      },
      components: {
        appPostGrid: PostGrid,
        appNewPost: NewPost
      }
    }
</script>

<style>
</style>

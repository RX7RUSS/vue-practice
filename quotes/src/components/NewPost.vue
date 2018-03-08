<template>
  <div class="row">
  <form>
    <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
      <label>Enter Your Blog Post Below</label>
      <textarea class="form-control" rows="3" v-model="post"></textarea>
    </div>
    <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
      <button class="btn btn-primary" @click.prevent="createNew">Add Post!</button>
    </div>
    </form>
  </div>
</template>

<script>


  export default {
    data: function() {
      return {
        post: ''
      };
    },
    methods: {
      createNew() {
        this.$emit('postAdded', this.post);
        this.post = '';
      }
    }
  }
</script>

<style>

</style>

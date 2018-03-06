<template>
  <div class="col-sm-12 col-md-6 col-lg-4">
    <div class="panel panel-default">
      <div class="panel-body post">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
  .panel-body {
    font-family: 'Courier', sans-serif;
    font-size: 28px;
  }

  .post {
    cursor: pointer;
  }

  .post:hover {
    transition: all 0.5s ease;
    background-color: #ffe2e2;
    color: #ffe2e2;
    transform: scale(1.02);
    border-radius: 5px;
  }
</style>

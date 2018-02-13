<template>
  <div class="col-sm-12 col-md-6 col-lg-4">
    <div class="panel panel-default">
      <div class="panel-body quote">
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
    font-size: 24px;
  }

  .quote {
    cursor: pointer;
  }

  .quote:hover {
    transition: all 0.75s ease;
    background-color: #ffe2e2;
    transform: scale(1.05);
  }
</style>

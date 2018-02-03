<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>User Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset User</button>
    </div>
</template>

<script>
  import { eventBus } from '../main';

  export default {
    props: {
      name: {
        type: String
      },
      resetFn: Function,
      userAge: Number
    },
    methods: {
      switchName() {
        return this.name;
      },
      resetName() {
        this.name = 'Russ';
        this.$emit('nameWasReset', this.name);
      }
    },
    created() {
      eventBus.$on('ageWasEdited', (age) => {
        this.userAge = age;
      });
    }
  }
</script>

<style scoped>
    div {
        background-color: #f1f9d1;
        border-radius: 15px;
        margin-bottom: 10px;
    },
    button {
      border-radius: 10px;
    }
</style>

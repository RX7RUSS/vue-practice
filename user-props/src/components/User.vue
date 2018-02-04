<template>
    <div class="component">
        <h1>User List</h1>
        <p>View and edit user details below.</p>
        <button @click="changeName">Change User</button>
        <p>Current User: {{ name }}</p>
        <p>Age: {{ age }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                <app-user-detail
                  :name="name"
                  @nameWasReset="name = $event"
                  :userAge="age">
                </app-user-detail>
            </div>
            <div class="col-xs-12">
                <app-user-edit
                  :userAge="age"
                  @ageWasEdited="age = $event">
                </app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
    data: function() {
      return {
        name: 'Russ',
        age: 27
      };
    },
    methods: {
      changeName() {
        this.name = 'Savage';
      }
    },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: #a3d1cc;
        border-radius: 15px;
        font-family: sans-serif;
        margin-top: 10px;
    },
    p {
      font-weight: 600;
    },
    button {
      border-radius: 10px;
    }
</style>

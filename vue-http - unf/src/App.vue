<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <label class="label label-primary" v-model="user.name">Username: </label>
                <input type="text" class="form-control">
                <label class="label label-primary" v-model="user.email">Email: </label>
                <input type="text" class="form-control">
                <br>
                <button type="button" class="btn btn-primary" @click="onSubmit">Submit</button>
                <br>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          user: {
            name: '',
            email: ''
          }
        };
      },
      methods: {
        onSubmit() {
          console.log(this.user);
        }
      }
    }
</script>

<style>
</style>

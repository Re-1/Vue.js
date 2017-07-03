<template lang="html">
  <div>
    <p>Server status: {{ status }}</p>
    <hr>
    <button type="button" name="button" @click="changeStatus">Change status</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      status: 'critical'
    }
  },
  methods: {
    changeStatus() {
      this.status = 'normal'
    }
  }
}
</script>

<style lang="css">
</style>

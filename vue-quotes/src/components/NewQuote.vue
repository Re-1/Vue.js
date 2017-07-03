<template lang="html">
  <div class="row">
    <form>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
        <label>Quote</label>
        <textarea class="form-control" rows="3" v-model="quote" placeholder="Insert a Quote..."></textarea>
      </div>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
        <button class="btn btn-primary" @click.prevent="createNew">Add quote</button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      quote: ''
    };
  },
  methods: {
    createNew() {
      this.$emit('quoteAdded', this.quote);
      this.quote = '';
    }
  }
}
</script>

<style lang="css">
.btn {
  margin: 10px 0;
}
.btn:hover {
  transition: 2s;
  background-color: green;
}
</style>

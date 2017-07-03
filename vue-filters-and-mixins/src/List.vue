<template>
  <div>
    <h1>Filters &amp; Mixins</h1>
    <hr>
    <input v-model="filterText">
    <ul>
      <li v-for="fruit in filteredfruits">{{ fruit }}</li>
    </ul>
  </div>
</template>

<script>
    import {fruitMixin} from './fruitMixin';
    export default {
      mixins: [fruitMixin],
      created() {
        console.log('List created');
      }
    }
</script>

<style>
li {
  list-style-type: circle;
}
</style>

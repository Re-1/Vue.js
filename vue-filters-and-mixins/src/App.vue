<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters &amp; Mixins</h1>
                <p>{{ text | toUppercase }}</p>
                <p>{{ text | to-lowercase }}</p>
                <hr>
                <button @click="fruits.push('Berries')">Add new item</button>
                <input v-model="filterText">
                <ul>
                  <li v-for="fruit in filteredfruits">{{ fruit }}</li>
                </ul>
                <hr>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
    import List from './List.vue';

    export default {
      data() {
        return {
          text: 'Hello there!',
          fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
          filterText: ''
        };
      },
// local filter
      filters: {
//      'to-uppercase'(value) {}
        toUppercase(value) {
          return value.toUpperCase();
        }
      },
      computed: {
        filteredfruits() {
          return this.fruits.filter((element) => {
            return element.match(this.filterText);
          });
        }
      },
      components: {
        appList: List
      }
    }
</script>

<style>
li {
  list-style-type: circle;
}
</style>

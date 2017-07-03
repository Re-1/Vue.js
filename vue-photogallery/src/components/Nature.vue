<template lang="html">
  <div class="row">
    <div class="col-xs-6 col-md-3 col-lg-3 clearfix" v-for="route in routes">
        <a :href="route" target="_blank" v-on:mousemove="showModal(route)"><img :src="route" class="animated flipInX" :height="height" :width="width"></a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: 200,
      width: 340,
      classObject: {
        active: true,
        fadeIn: true
      },
      defaultComponent: 'app-nature',
      routes: ['img/nature/1.jpg','img/nature/2.jpg','img/nature/3.jpg','img/nature/4.jpg','img/nature/1.jpg','img/nature/2.jpg','img/nature/3.jpg','img/nature/4.jpg','img/nature/1.jpg','img/nature/2.jpg','img/nature/3.jpg','img/nature/4.jpg']
    };
  },
  methods: {
    showModal(route) {
      console.log(route);
    }
  }
}
</script>

<style lang="css">
img:hover {
  cursor: crosshair;
}

</style>

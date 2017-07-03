<template lang="html">
  <div class="row">
    <div class="col-xs-6 col-md-3 col-lg-3 clearfix" v-for="route in routes">
      <a :href="route" target="_blank"><img :src="route" class="animated flipInX" :height="height" :width="width"></a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: 200,
      width: 300,
      defaultComponent: 'app-portrait',
      routes: ['img/portrait/1.jpg', 'img/portrait/2.jpg', 'img/portrait/3.jpg', 'img/portrait/4.jpg','img/portrait/1.jpg', 'img/portrait/2.jpg', 'img/portrait/3.jpg', 'img/portrait/4.jpg','img/portrait/1.jpg', 'img/portrait/2.jpg', 'img/portrait/3.jpg', 'img/portrait/4.jpg']
    };
  }
}
</script>

<style lang="css">
</style>

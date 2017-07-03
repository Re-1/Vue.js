<template>
  <div>
    <div class="container-fluid">
      <app-carousel></app-carousel>
      <div class="col-xs-12 text-center">
        <h1>Photographer's Photogallery</h1>
        <h4>from hobby to a profession</h4>
        <br>
        <div class="btn-group btn-group-lg">
          <button type="button" class="btn btn-default" @click="activeGallery('app-portrait')">Portrait</button>
          <button type="button" class="btn btn-default" @click="activeGallery('app-events')">Events</button>
          <button type="button" class="btn btn-default" @click="activeGallery('app-nature')">Nature</button>
        </div>
        <br><br>
      </div>
      <div class="container">
        <component :is="defaultComponent" name="list">
          <app-portrait></app-portrait>
          <app-events></app-events>
          <app-nature></app-nature>
        </component>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
    import Portrait from './components/Portrait.vue';
    import Events from './components/Events.vue';
    import Nature from './components/Nature.vue';
    import Carousel from './components/Carousel.vue';
    import Footer from './components/Footer.vue';

    export default {
      data() {
        return {
          defaultComponent: 'app-nature'
        }
      },
      components: {
        appPortrait: Portrait,
        appEvents: Events,
        appNature: Nature,
        appCarousel: Carousel,
        appFooter: Footer
      },
      methods: {
        activeGallery(change) {
          this.defaultComponent = change;
        }
      }
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Patua+One|Playfair+Display');

h1, h3 {
  font-family: 'Patua One', cursive;
  font-size: 27px;
}


h1 {
  color: silver;
  text-decoration: underline;
}

a {
  text-decoration: underline;
  color: #fff;
}

a:visited {
  color: gold;
}

a:hover {
  color: silver;
  transition: 1s;
}

p {
  text-shadow: 1px 1px 1px #000;
}

body, p {
  font-family: 'Playfair Display', serif;
  font-size: 22px;
}

.btn:hover {
  background: #8d8d8d;
  color: #fff;
  transition: 1s;
}
</style>

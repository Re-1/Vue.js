<template lang="html">
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      <div class="item active">
        <img src="img/carousel/1.jpg">
        <div class="carousel-caption">
          <img src="img/photo.png" class="camera">
          <h3>{{ firstMessage }}</h3>
          <p><a href="#contact">Contact me</a> for more information.</p>
        </div>
      </div>

      <div class="item" v-for="route in routes">
        <img :src="route">
        <div class="carousel-caption">
          <img src="img/photo.png" class="camera">
            <div class="inside-carousel">
            <h3>{{ secondMessage }}</h3>
            <p><a href="#contact">Contact me</a> for more information.</p>
          </div>
        </div>
      </div>
    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      routes: ['img/carousel/2.jpg', 'img/carousel/3.jpg'],
      firstMessage: 'Professional photographer at your service.',
      secondMessage: 'Hire me to photoshoot your special event.'
    };
  }
}
</script>

<style lang="css">
.carousel-caption {
  top: 10%;
}

.carousel-caption h3 {
  font-size: 42px;
}

.container-fluid {
  width: 100%;
  padding: 0;
  margin: 0;
}

.inside-carousel {
  background: rgba(0, 0, 0, .5);
  padding: 30px;
  border-radius: 10px;
}

.carousel-inner > .item > img,
.carousel-inner > .item > a > img {
    width: 100%;
    margin: auto;
}

.camera {
  opacity: .5;
  width: 40%;
  height: auto;
}
</style>

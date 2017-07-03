new Vue ({
  el: '#app',
  data: {
    title: 'Hello World!',
    counter: 0,
    x: 0,
    y: 0
  },
  methods: {
    increaseMe: function (step) {
      this.counter += step;
    },
    itMoves: function (event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    dummy: function (event) {
      event.stopPropagation();
    },
    alertMe: function () {
      alert('Keypressed!');
    }
  }
})

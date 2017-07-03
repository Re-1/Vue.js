new Vue ({
  el: '#app',
  data: {
    title: 'Hello World!',
    link: 'http://google.com/',
    finishedLink: '<a href="http://facebook.com">Facebook</a>',
    counter: 0,
    x: 0,
    y: 0
  },
  methods: {
    changeTitle: function (event) {
      this.title = event.target.value;
    },
sayHello: function () {
  return this.title = 'Hello';
},
increase: function () {
  //this.counter = this.counter + 1;
  //this.counter += 1;
  this.counter++;
},
itMoves: function (event) {
  this.x = event.clientX;
  this.y = event.clientY;
}
  }
});

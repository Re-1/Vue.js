new Vue ({
el: '#app',
data: {
	title: 'Hello!',
  x: 0,
  y: 0,
  counter: '',
  attachRed: false,
  color: 'green'
  },
computed: {
	divClasses: function () {
  return {
  red: this.attachRed,
  blue: !this.attachRed
  };
  }
},
methods: {
	positions: function (event) {
  	this.x = event.clientX;
    this.y = event.clientY;
  },
  alertMe: function () {
  	alert('Keypressed!')
  }
}
});

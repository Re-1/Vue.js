Vue.component('hello', {
  template: '<h1>Hello</h1>'
});

var data = {
title: 'Hello!',
showParagraph: false
};

var vm1 = new Vue ({
el: '#app1',
data: data,
methods: {
show: function () {
  this.showParagraph = true;
  this.updateTitle('Title changed.');
},
updateTitle: function (title) {
    this.title = title;
  }
},
  computed: {
    lowercaseTitle: function () {
      return this.title.toLowerCase();
    }
  },
    watch: {
      title: function (value) {
        alert('Title has been changed to: ' + value);
      }
    }
});

setTimeout(function () {
	vm1.title = 'Changed by timer.'
},
3000);

var vm2 = new Vue ({
	el: '#app2',
  data: {
  title: 'Instance 2'
  },
  methods: {
  onChange: function () {
  vm1.title = 'Changed!';
  }
  }
});

var vm3 = new Vue ({
  el: '.hello',
  template: '<h1>Hello</h1>'
});

// vm3.$mount();
// document.getElementById('app3').appendChild(vm3.$el);

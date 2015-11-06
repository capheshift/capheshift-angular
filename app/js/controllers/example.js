'use strict';

function ExampleCtrl() {

  // ViewModel
  const vm = this;

  vm.title = 'AngularJS, Gulp, and Browserify! Written with keyboards and love!';
  vm.number = 12345;

}

export default {
  name: 'ExampleCtrl',
  fn: ExampleCtrl
};

const angular = require('angular');
const item = require('./item/component.js');
const list = require('./list/component.js');
const detail = require('./detail/component.js');
const styles = require('./../styles/index.scss');

const FEED_URL = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw';

let app = angular.module('beyond', []);

let AppController = function (scope, http) {
  let vm = this;

  vm.videoItems = [];
  vm.selectedItem = null;
  vm.showList = true;
  vm.showDetail = false;

  vm.onVideoSelected = function(item) {
    vm.selectedItem = item;
    vm.showDetail = true;
    vm.showList = false;
  }

  vm.onDetailClosed = function() {
    vm.showDetail = false;
    vm.showList = true;
    vm.selectedItem = null;
  }

  http.get(FEED_URL)
    .then(data => {
      vm.videoItems = data.data.items;
    })
}

AppController.$inject = ['$scope', '$http'];

app.controller('AppController', AppController)
  .component('list', list)
  .component('item', item)
  .component('detail', detail);
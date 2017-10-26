const Vue = require('vue').default;
const App = require('./app.vue').default;
const styles = require('./../styles/index.scss');
const app = new Vue({
  el: '#app',
  render(r) {
    return r(App);
  }
})
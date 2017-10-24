const Vue = require('vue').default;
const axios = require('axios');
const Routes = {
  '/': 'list.vue',
  '/vue': 'list.vue',
  '/vue/detail/:id': 'detail.vue'
};
const FEED_URL = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw';

const app = new Vue({
  el: '#app',
  data() {
    return {
      currentRoute: window.location.pathname,
      feed: ''
    }
  },
  computed: {
    currentPage() {
      let page = Routes[this.currentRoute];

      return page ? require(`./${page}`).default : require('./404.vue').default;
    }
  },
  created() {
    axios.get(FEED_URL)
      .then(data => {
        this.feed = data.data;
      })
  },
  render(r) {
    return r(this.currentPage);
  }
})
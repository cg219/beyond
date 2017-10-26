<template>
  <div class="app">
    <detail :item="selectedItem" v-show="showDetail" v-on:closed="onDetailClosed"></detail>
    <list :items="videoItems" v-on:selected="onVideoSelected" v-show="showList"></list>
  </div>
</template>

<script>
  const List = require('./list.vue').default;
  const Detail = require('./detail.vue').default;
  const axios = require('axios');
  const FEED_URL = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw';

  module.exports = {
    components: {
      List,
      Detail
    },
    data() {
      return {
        videoItems: [],
        selectedItem: null,
        showList: true,
        showDetail: false
      }
    },
    created() {
      axios.get(FEED_URL)
        .then(data => {
          this.videoItems = data.data.items;
        })
    },
    methods: {
      onVideoSelected(item) {
        this.selectedItem = item;

        if( item ) {
          this.showDetail = true;
          this.showList = false;
        }
      },
      onDetailClosed() {
        this.showDetail = false;
        this.showList = true;
        this.selectedItem = null;
      }
    }
  }
</script>
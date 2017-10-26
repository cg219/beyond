<template>
  <div class="playlist">
    <h1 class="playlist__title">My Youtube Playlist</h1>
    <ul class="playlist__list">
      <playlist-item
        v-for="item in videoItems"
        :title="item.snippet.title"
        :description="item.snippet.description"
        :date="item.snippet.publishedAt"
        :thumbnail="item.snippet.thumbnails"
        :videoid="item.snippet.resourceId.videoId"
        v-on:selected="onItemSelect">
      </playlist-item>
    </ul>
  </div>
</template>

<script>
  const PlaylistItem = require('./item.vue').default;
  const axios = require('axios');

  module.exports = {
    components: {
      PlaylistItem
    },
    props: ['items'],
    computed: {
      videoItems() {
        return this.items;
      }
    },
    methods: {
      onItemSelect(item) {
        this.$emit('selected', item);
      }
    }
  }
</script>

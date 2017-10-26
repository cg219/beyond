<template>
  <div class="detail">
    <span class="detail__back" @click="close">&lt; Back to List of Videos</span>
    <h1 class="detail__title">{{title}}</h1>
    <h2 class="detail__subtitle">Published on {{date}}</h2>
    <div class="detail__player-wrapper">
      <iframe v-if="videoID" class="detail__player" type="text/html" width="640" height="360" :src="embedURL"
  frameborder="0"></iframe>
    </div>
    <p class="detail__description">{{description}}</p>
  </div>
</template>

<script>
  const moment = require('moment');

  module.exports = {
    props: ['item'],
    computed: {
      embedURL() {
        return `https://www.youtube.com/embed/${this.videoID}?autoplay=0&origin=http://imkreative.com`;
      },
      title() {
        return this.item ? this.item.title : null;
      },
      date() {
        return this.item ? this.item.date : null;
      },
      description() {
        return this.item ? this.item.description : null;
      },
      videoID() {
        return this.item ? this.item.id : null;
      }
    },
    methods: {
      close() {
        this.$emit('closed');
      }
    }
  }
</script>
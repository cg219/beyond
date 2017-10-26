<template>
  <li class="item">
    <div class="item__info_container">
      <h1 class="item__title" @click="sendItem">{{itemTitle}}</h1>
      <h2 class="item__subtitle">Published on {{itemDate}}</h2>
      <p class="item__description">{{truncatedDesc}}</p>
    </div>
    <img @click="sendItem" :src="itemThumb" alt="" class="item__thumbnail">
  </li>
</template>

<script>
  const moment = require('moment');

  module.exports = {
    props: ['title', 'date', 'description', 'thumbnail', 'videoid'],
    data() {
      return {
        itemTitle: this.title,
        itemDate: moment(this.date).format('MMM DD, YYYY'),
        itemDesc: this.description,
        itemThumb: this.thumbnail ? this.thumbnail.high.url : 'http://fpoimg.com/480x360?text=Not Found&bg_color=000000&text_color=c4c4c4',
        itemVideo: this.videoid
      }
    },
    computed: {
      truncatedDesc() {
        return `${this.itemDesc.substr(0, 140)}...`;
      }
    },
    methods: {
      sendItem() {
        this.$emit('selected', {
          title: this.itemTitle,
          date: this.itemDate,
          description: this.itemDesc,
          thumbnail: this.itemThumb,
          id: this.itemVideo
        })
      }
    }
  }
</script>
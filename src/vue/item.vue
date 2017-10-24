<template>
  <li class="item">
    <div class="item__info_container">
      <h1 class="item__title">{{itemTitle}}</h1>
      <h2 class="item__subtitle">Published on {{itemDate}}</h2>
      <p class="item__description">{{itemDesc}}</p>
    </div>
    <img :src="itemThumb" alt="" class="item__thumbnail">
  </li>
</template>

<script>
  module.exports = {
    props: ['title', 'date', 'description', 'thumbnail'],
    data() {
      return {
        itemTitle: this.title,
        itemDate: this.date,
        itemDesc: this.description,
        itemThumb: this.thumbnail
      }
    }
  }
</script>
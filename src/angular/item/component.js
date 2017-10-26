const template = require('./template.html');
const moment = require('moment');

module.exports = {
  template: template,
  controller() {
    let ctrl = this;

    ctrl.formattedDate = '';
    ctrl.truncatedDescription = '';
    ctrl.thumbnailImage = '';

    ctrl.sendItem = function() {
      let value = {
        title: ctrl.title,
        date: ctrl.formattedDate,
        description: ctrl.description,
        thumbnail: ctrl.thumbnailImage,
        id: ctrl.videoId
      }

      ctrl.onSelected({ value });
    }

    ctrl.$onChanges = function(changes) {
      if(changes.date && changes.date.previousValue != changes.date.currentValue) {
        ctrl.formattedDate = moment(changes.date.currentValue).format('MMM DD, YYYY');
      }

      if(changes.description && changes.description.previousValue != changes.description.currentValue) {
        ctrl.truncatedDescription = `${changes.description.currentValue.substr(0, 140)}...`;
      }

      if(changes.thumbnail && changes.thumbnail.previousValue != changes.thumbnail.currentValue) {
        ctrl.thumbnailImage = changes.thumbnail.currentValue ? changes.thumbnail.currentValue.high.url : 'http://fpoimg.com/480x360?text=Not Found&bg_color=000000&text_color=c4c4c4'
      }
    }
  },
  bindings: {
    title: '<',
    date: '<',
    description: '<',
    thumbnail: '<',
    videoId: '<',
    onSelected: '&'
  }
}
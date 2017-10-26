const template = require('./template.html');

let DetailController = function(sce) {
  let ctrl = this;

  ctrl.embedURL = '';
  ctrl.title = '';
  ctrl.date = '';
  ctrl.description = '';
  ctrl.videoID = '';

  ctrl.close = function() {
    ctrl.onClosed();
  }

  ctrl.$onChanges = function(changes) {
    if(changes.item && changes.item.previousValue != changes.item.currentValue) {
      if(changes.item.currentValue) {
        ctrl.date = changes.item.currentValue.date;
        ctrl.title = changes.item.currentValue.title;
        ctrl.description = changes.item.currentValue.description;
        ctrl.videoID = changes.item.currentValue.id;
        ctrl.embedURL = sce.trustAsResourceUrl(`https://www.youtube.com/embed/${changes.item.currentValue.id}?autoplay=0&origin=http://imkreative.com`);
      }
    }
  }
}

module.exports = {
  template: template,
  controller: ['$sce', DetailController],
  bindings: {
    item: '<',
    onClosed: '&'
  }
}
const template = require('./template.html');

module.exports = {
  template: template,
  controller() {
    let ctrl = this;

    ctrl.onItemSelect = function(value) {
      ctrl.onSelected({ value });
    }

    ctrl.$onChanges = function(changes){
    }
  },
  bindings: {
    items: '<',
    onSelected: '&'
  }
}
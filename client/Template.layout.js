Template.layout.isChecked = function () {
  var id = this.id;
  return Session.get(id) ? "checked" : false;
};

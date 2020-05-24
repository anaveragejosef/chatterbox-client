var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {},

  render: function(roomKeys) {
    for (let i = 0; i < roomKeys.length; i++) {
      this.renderRoom(roomKeys[i]);
    }

    this.$select.change( function() {
      if (this.value !== '--Select--') {
        Rooms.active(this.value);
        Messages.initRoomMessages(Rooms.rooms()[this.value]);
      }
    });
  },

  renderRoom: function(roomKey) {
    let template = _.template(`<option onclick="Rooms.initRoom  (roomname)"><%- roomName %></option>`);
    let $option = template({ roomName: roomKey });
    this.$select.append($option);
  }
};

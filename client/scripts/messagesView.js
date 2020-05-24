var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(room) {
    // Append to $chats
    if (room) {
      this.$chats.empty();
      let msgIds = Object.keys(room);

      for (let i = 0; i < msgIds.length; i++) {
        let $msg = MessageView.render({
          username: room[msgIds[i]].username,
          text: room[msgIds[i]].text
        });
        this.$chats.append($msg);
      }
    }
  },


  renderMessage: function(msg) {
    // Append to $chats
    let $msg = MessageView.render({
      username: msg.username,
      text: msg.text
    });
    this.$chats.append($msg);
  }
};
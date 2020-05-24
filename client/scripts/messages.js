class Messages {
  // I - roomname object
  // O - HTML element with templatized messages
  //Create a function
  // Iterate through the data from the specific room
  //allChats += messageView.render(chat);
  // For each message, pass through template in messageView (MessageView.render(chat))
  // Add templatized message into variable
  // Return variable
  // 1 return allChats
  // 2 $("#chats").append(allChats);

  static initRoomMessages(room) {
    MessagesView.render(room);
  }

  static initNewChatIntervalCheck() {
    setInterval(() => {
      Parse.readAll((data) => {
        Rooms.sortRoomData(data, true);
        Friends.toggleAllFriends();
      }, (err) => console.log(err));
    }, 3000);
  }

  static updateFriend(name) {
    let chats = $('.chat');

    for (let i = 0; i < chats.length; i++) {
      let $child = $(chats[i]);
      let childUser = $child.children().first()[0];
      if (childUser.innerText === name) {
        let $childUser = $(childUser);
        if ($child.hasClass('friend')) {
          $child.removeClass('friend');
          Friends.remove(name);
        } else {
          $child.addClass('friend');
          Friends.add(name);
        }
      }
    }
  }
}
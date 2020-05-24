class Rooms {
  static roomsObj = {};
  static activeRoom;

  static rooms() {
    return this.roomsObj;
  }

  static active(roomName = this.activeRoom) {
    this.activeRoom = roomName;
    return this.activeRoom;
  }

  static add(roomName = "testroom") {
    console.log("your Spec is Lame!");
  }

  static createRoom() {
    let newRoomName = $('#new-room-name')[0].value;
    this.roomsObj[newRoomName] = {};
    RoomsView.renderRoom(newRoomName);
    $('#createRoomModal').modal('hide');
  }

  static sortRoomData(data, isUpdate) {
    let existingRooms = Object.keys(this.roomsObj);

    for (let i = 0; i < data['results'].length; i++) {
      let chat = data['results'][i];
      let roomName = chat.roomname;

      if (this.roomsObj[roomName]) {
        if (!this.roomsObj[roomName].hasOwnProperty(chat.objectID)) {
          this.roomsObj[roomName][chat.objectId] = chat;
        }
      } else {
        this.roomsObj[roomName] = {};
        this.roomsObj[roomName][chat.objectId] = chat;
      }
    }
    // console.log(this.roomsObj)

    if (isUpdate) {
      Messages.initRoomMessages(this.roomsObj[this.activeRoom])
      RoomsView.render(_.filter(Object.keys(this.roomsObj), (item) => !existingRooms.includes(item)));
    } else {
      Messages.initNewChatIntervalCheck();
      RoomsView.render(Object.keys(this.roomsObj));
    }
  }


  static initRoom(roomName) {
    console.log("yeah yeah yeah!")
  }
};

let item = {
  roomname: "Steve's House",
  text: "Blue's Clues",
  username: "Blue"
}
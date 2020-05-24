class Friends {
  static friendsList = [];

  static toggleAllFriends() {
    for (let i = 0; i < this.friendsList.length; i++) {
      this.toggleStatus(this.friendsList[i]);
    }
  }

  static add(username) {
    if (!this.friendsList.includes(username)) {
      this.friendsList.push(username);
    }
  }

  static remove(username) {
    let userIndex = this.friendsList.indexOf(username)
    if (userIndex !== -1) {
      this.friendsList.splice(userIndex, 1);
    }
  }

  static toggleStatus(username) {
    Messages.updateFriend(username);
  }
};

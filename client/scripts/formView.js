var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form

    let roomname = Rooms.active();
    if (!Rooms.active()) {
      return;
    }
    event.preventDefault();

    let input = $(event.target).find('#message')[0];
    let text = input.value;
    let username = App.username;

    if (text) {
      Parse.create( {username, roomname, text},
        function(data) {
          console.log(data);
          input.value = '';
          Parse.readAll(
            (data) => Rooms.sortRoomData(data, true),
            (err) => console.log(err));
        },
        function(error) {
          console.log(error);
        });
    }
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};
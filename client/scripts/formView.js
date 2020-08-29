var FormView = {

  $form: $('form'),

  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    //create our message obj
    var newMessage = {};
    newMessage.username = App.username;
    newMessage.text = $("#message").val();
    newMessage.roomname = "Jorgen's room";   //RoomsView.$select;
    //newMessage.createdAt = Date.now();
    Parse.create(newMessage, () => MessagesView.renderMessage(newMessage));
    //parse.crate post
    //success callback: Messageviews.renderMessage(message)

    console.log('click!');
  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};
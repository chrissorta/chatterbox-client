var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    this.render();
  },

  render: function () {
    //get data from messages

    let data = Messages.data;
    //loop through data
    for (let i = 0; i < data.length; i++) {
      let currentData = MessageView.render(data[i]);
      $(MessagesView.$chats).append(currentData);
    }
  },

  renderMessage: function (message) {
    var currentMessage = MessageView.render(message);
    $(MessagesView.$chats).prepend(currentMessage);
  }
  //for each message obj add to dom
  //save it in var messageview.render(data[i]);
  //created at , text, username
  //append to chats div


};
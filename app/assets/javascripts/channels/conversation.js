App.conversation = App.cable.subscriptions.create("ConversationChannel", {
  connected: function() {
    // Called when the subscription is ready for use on the server
  },

  disconnected: function() {
    // Called when the subscription has been terminated by the server
  },

  received: function(data) {
    // Called when there's incoming data on the websocket for this channel
    console.log(data['message']);
  },

  speak: function() {
    return this.perform('speak', {
      message: message
    });
  }
});
$(document).on('submit', '.new_message', function(e){
  e.preventDefault();
  var values = $(this).serializeArray();
  App.conversation.speak(values);
  $(this).trigger('reset');
})
var MessageView = {
  // Update render to include text field and remove comments (<!-- -->)
  render: _.template(`
      <div class="chat">
        <div class="username" onclick="Friends.toggleStatus(event.target.innerHTML)"><%- username %></div>
        <div class="text"><%- text %></div>
      </div>
    `)

};
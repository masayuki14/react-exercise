var App = React.createClass({displayName: "App",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("p", null, "Hello, React")
      )
    );
  }
});

React.render(
  React.createElement(App, null),
  document.getElementById('app-container')
);

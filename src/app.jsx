var React = require('react');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <p>Hello, React</p>
      </div>
    );
  }
});

React.render(
  <App />,
  document.getElementById('app-container')
);

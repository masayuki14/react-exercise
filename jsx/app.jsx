var React = require('react');
var MenuArea = require('./menu.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <p>Hello, React</p>
        <MenuArea />
      </div>
    );
  }
});

React.render(
    <App />,
    document.getElementById('app-container')
);


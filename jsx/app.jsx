var React = require('react');
var Menu = require('./menu.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Menu.MenuArea />
        <Menu.MyAwesomeReactComponent />
      </div>
    );
  }
});

React.render(
    <App />,
    document.getElementById('app-container')
);


(function () {
    //var React = require('react');
    var Menu = require('./components/menu.jsx');

    let React = require('react/addons');
    let injectTapEventPlugin = require('react-tap-event-plugin');

    //Needed for React Developer Tools
    window.React = React;

    //Needed for onTouchTap
    //Can go away when react 1.0 release
    //Check this repo:
    //https://github.com/zilverline/react-tap-event-plugin
    injectTapEventPlugin();

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

    // Render the main app react component into the document body.
    // For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
    React.render(
            <App />,
            document.getElementById('app-container')
            );
})();

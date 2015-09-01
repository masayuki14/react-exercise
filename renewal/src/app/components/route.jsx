import React from 'react';
import mui   from 'material-ui';
import MenuPanel from './menu.jsx';
import MainPanel from './main_panel.jsx';

let ThemeManager = new mui.Styles.ThemeManager();

let Route = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render: function() {
    return (
      <div>
        <MenuPanel />
        <MainPanel />
      </div>
    );
  }
});

module.exports = Route;

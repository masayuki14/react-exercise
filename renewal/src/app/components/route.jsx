import React      from 'react';
import mui        from 'material-ui';
import StyleSheet from 'react-style';

import MenuPanel from './menu.jsx';
import MainPanel from './main_panel.jsx';

import {
  AppBar,
  IconButton
} from 'material-ui';

let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;

const RouteStyle = StyleSheet.create({
  normalStyle: {
    backgroundColor  : Colors.grey100,
    minHeight        : '100%',
  },

});

let Route = React.createClass({

  ContextTypes: {
    router: React.PropTypes.func
  },

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
      <div styles={ RouteStyle.normalStyle }>
        <AppBar
          title="@mail expanded system."
          iconElement={<IconButton></IconButton>} />

        <div>
          <MenuPanel />
          <MainPanel />
        </div>
      </div>
    );
  }
});


module.exports = Route;

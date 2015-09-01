import React      from 'react';
import Router     from 'react-router';
import StyleSheet from 'react-style';

import { AppBar,
      AppCanvas,
      FontIcon,
      IconButton,
      EnhancedButton,
      Menu,
      Mixins,
      RaisedButton,
      Styles,
      Tab,
      Tabs,
      Paper} from 'material-ui';

let { Colors, Spacing, Typography } = Styles;
let ThemeManager = new Styles.ThemeManager();
let RouteHandler = Router.RouteHandler;
let FullWidthSection = require('./full-width-section.jsx');

const MasterStyle = StyleSheet.create({
  normalStyle: {
    backgroundColor  : Colors.grey100,
    minHeight        : '100%',
  },

});

class Master extends React.Component {

  constructor() {
    super();
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  getStyles() {
    let darkWhite = Colors.darkWhite;
    return {
      footer: {
        backgroundColor: Colors.grey900,
        textAlign: 'center'
      },
      a: {
        color: darkWhite
      },
      p: {
        margin: '0 auto',
        padding: 0,
        color: Colors.lightWhite,
        maxWidth: 335
      },
      github: {
        position: 'fixed',
        right: Spacing.desktopGutter/2,
        top: 8,
        zIndex: 5,
        color: 'white'
      },
       iconButton: {
        color: darkWhite
      },
    };
  }

  render() {

    let styles = this.getStyles();

    return (
      <AppCanvas>

        {this._getAppBar()}

        <RouteHandler />
        <FullWidthSection style={styles.footer}>
        </FullWidthSection>
      </AppCanvas>
    );
  }

  _getAppBar() {
    let title =
      this.context.router.isActive('customization') ? 'Customization' :
      this.context.router.isActive('pages')    ? 'WelCome' : 'Master!';

    let githubButton = (
      <IconButton
        iconClassName="muidocs-icon-custom-github"
        href="https://github.com/callemall/material-ui"
        linkButton={true}/>
    );

    return (
      <div>
        <AppBar
          title={title}
          zDepth={0}
          style={{position: 'fixed', top: 0}}/>
        />
      </div>);
  }

}

Master.contextTypes = {
  router: React.PropTypes.func
};

Master.childContextTypes = {
  muiTheme: React.PropTypes.object
};

module.exports = Master;

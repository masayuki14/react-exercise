var React = require('react'),
    mui = require('material-ui'),
    ThemeManager = new mui.Styles.ThemeManager(),
    RaisedButton = mui.RaisedButton,
    List         = mui.List,
    ListItem     = mui.ListItem,
    ContentInbox = mui.ContentInbox;


//var injectTapEventPlugin = require("react-tap-event-plugin");
//injectTapEventPlugin();

var BasicMenu = React.createClass({
  render: function() {
    return (
      <div>
      <List subheader="基本設定">
        <ListItem primaryText="SIMアドレス登録"  leftIcon={<ContentInbox />} />
        <ListItem primaryText="返信テンプレート" leftIcon={<ContentInbox />} />
        <ListItem primaryText="稼働設定"         leftIcon={<ContentInbox />} />
      </List>
      </div>

      <ul>基本設定
        <li>SIMアドレス登録</li>
        <li>返信テンプレート</li>
        <li>稼働設定</li>
      </ul>
    );
  }
});

var LogMenu = React.createClass({
  render: function() {
    return (
      <ul>ログ関連
        <li>メール送信キュー</li>
        <li>ログ検索</li>
        <li>効果集計</li>
      </ul>
    );
  }
});

var MenuArea = React.createClass({
  render: function() {
    return (
      <div className='menu-area'>
        <BasicMenu />
        <LogMenu />
      </div>
    );
  }
});

var MyAwesomeReactComponent = React.createClass({

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
        <RaisedButton label="Default" />
        );
  }

});

module.exports = {
  MenuArea: MenuArea,
  MyAwesomeReactComponent: MyAwesomeReactComponent,
};


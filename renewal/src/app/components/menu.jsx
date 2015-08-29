var React = require('react'),
    mui = require('material-ui'),
    ThemeManager = new mui.Styles.ThemeManager(),
    RaisedButton = mui.RaisedButton,
    List         = mui.List,
    ListItem     = mui.ListItem;

// Menu Component
// MenuArea
//   - BasicMenu
//   - LogMenu
//   - DataMenu
//   - OtherMenu
var MenuArea = React.createClass({

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
      <div className='menu-area'>
        <BasicMenu />
        <LogMenu />
        <DataMenu />
        <OtherMenu />
      </div>
    );
  }
});

// 基本設定
var BasicMenu = React.createClass({
  render: function() {
    return (
      <div>
        <List subheader="基本設定">
          <ListItem primaryText="SIMアドレス登録"  />
          <ListItem primaryText="返信テンプレート" />
          <ListItem primaryText="稼働設定"         />
        </List>
      </div>
    );
  }
});

// ログ関連
var LogMenu = React.createClass({
  render: function() {
    return (
      <div>
        <List subheader="ログ関連">
          <ListItem primaryText="メール送信キュー" />
          <ListItem primaryText="ログ検索"         />
          <ListItem primaryText="効果集計"         />
        </List>
      </div>
    );
  }
});

// データ関連
var DataMenu = React.createClass({
    render: function() {
        return (
            <div>
              <List subheader="データ関連">
                <ListItem primaryText="リストデータ"    />
                <ListItem primaryText="CSVエクスポート" />
              </List>
            </div>
        );
    }
});

// その他
var OtherMenu = React.createClass({
  render: function() {
    return (
      <div>
        <List subheader="その他">
          <ListItem primaryText="ブロックリスト" />
          <ListItem primaryText="その他設定"     />
        </List>
      </div>
    );
  }
})


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


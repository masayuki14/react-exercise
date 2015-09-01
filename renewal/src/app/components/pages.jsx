let React = require('react');
let PageWithNav = require('./page-with-nav.jsx');

class Pages extends React.Component {

  render() {
    let menuItems = [
      { route: '',              text: '基本設定', disabled: true },
      { route: 'register-sim',  text: 'SIMアドレス登録'  },
      { route: 'edit-template', text: '返信テンプレート' },
      { route: 'set-activity',  text: '稼働設定' },

      { route: '',              text: 'ログ関連', disabled: true },
      { route: 'message-queue', text: 'メール送信キュー' },
      { route: 'search-log',    text: 'ログ検索' },
      { route: 'statistics',    text: '効果集計' },

      { route: '',              text: 'データ関連', disabled: true },
      { route: 'listing-data',  text: 'リストデータ' },
      { route: 'export-csv',    text: 'CSVエクスポート' },

      { route: '',              text: 'その他', disabled: true },
      { route: 'blocking-list', text: 'ブロックリスト' },
      { route: 'preferences',   text: 'その他設定' },
    ];

    return (
      <PageWithNav menuItems={menuItems} />
    );
  }

}

module.exports = Pages;

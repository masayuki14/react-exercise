var React = require('react');

var BasicMenu = React.createClass({
  render: function() {
    return (
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

module.exports = MenuArea;

let React = require('react');

import Account from './register-sim/account.jsx';

class RegisterSim extends React.Component {

  constructor(props) {
    super(props);

    this.desc = 'キャリアメールサーバーに接続するための情報を登録します。';

    this.propTypes = {
      accounts : React.PropTypes.array
    };

    let accounts = [
      {},
      {},
    ];

    this.props.accounts = accounts;
  }


  _renderAccounts() {

    let accounts = this.props.accounts.map((current, index, array) => {
      return (
        <Account />
      );
    });

    return (
        {accounts}
    );
  }

  render() {

    return (
      <div>
        <h1> under construction. </h1>
        <p>{ this.desc }</p>
        { this._renderAccounts() }
      </div>
    );
  }
}

module.exports = RegisterSim;

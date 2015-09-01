let React = require('react');

class Preferences extends React.Component {

  constructor(props) {
    super(props);

    this.desc = 'その他設定';

  }

  render() {
    return (
      <div>
        <h1> under construction. </h1>
        <p>{this.desc}</p>
      </div>
    );
  }
}

module.exports = Preferences;

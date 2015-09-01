let React = require('react');

class SetActivity extends React.Component {

  constructor(props) {
    super(props);

    this.desc = '稼働設定';

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

module.exports = SetActivity;

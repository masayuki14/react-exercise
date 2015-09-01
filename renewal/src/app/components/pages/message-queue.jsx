let React = require('react');

class MessageQueue extends React.Component {

  constructor(props) {
    super(props);

    this.desc = 'メール送信キューを参照します。';

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

module.exports = MessageQueue;

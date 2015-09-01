let React = require('react');

class BlockingList extends React.Component {

  constructor(props) {
    super(props);

    this.desc = 'ブロックリスト';

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

module.exports = BlockingList;

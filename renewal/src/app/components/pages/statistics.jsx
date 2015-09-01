let React = require('react');

class Statistics extends React.Component {

  constructor(props) {
    super(props);

    this.desc = '統計情報を出力します。';

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

module.exports = Statistics;

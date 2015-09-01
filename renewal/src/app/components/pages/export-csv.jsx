let React = require('react');

class ExportCsv extends React.Component {

  constructor(props) {
    super(props);

    this.desc = 'CSVファイルを出力します。';

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

module.exports = ExportCsv;

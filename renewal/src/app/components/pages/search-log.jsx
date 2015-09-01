let React = require('react');

class SearchLog extends React.Component {

  constructor(props) {
    super(props);

    this.desc = 'ログを検索します。';

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

module.exports = SearchLog;

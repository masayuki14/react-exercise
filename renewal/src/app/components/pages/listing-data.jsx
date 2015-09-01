let React = require('react');

class ListingData extends React.Component {

  constructor(props) {
    super(props);

    this.desc = 'リストデータ';

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

module.exports = ListingData;

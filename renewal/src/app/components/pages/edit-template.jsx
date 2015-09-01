let React = require('react');

class EditTemplate extends React.Component {

  constructor(props) {
    super(props);

    this.desc = 'メールテンプレートを作成します。';

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

module.exports = EditTemplate;

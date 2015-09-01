import React      from 'react';

import {
  TextField,
  ClearFix,
  Paper,
  Mixins
} from 'material-ui';

let { StyleResizable } = Mixins;

class Account extends React.Component {

  constructor(props) {

    super(props);
    this.mixins = [StyleResizable, React.addons.LinkedStateMixin];
  }

  getStyles() {
    let styles = {
      group: {
        width: '100%',
        float: 'left',
        marginBottom: 32
      },
      textfield: {
        marginTop: 24
      }
    };

    //if (this.isDeviceSize(StyleResizable.statics.Sizes.LARGE)) {
    //  styles.group.width = '50%';
    //}

    return styles;
  }

  render() {

    let styles = this.getStyles();

    return (
      <Paper>
        <ClearFix>
            <div style={styles.group}>
        <TextField
          hintText="Hint Text"
          defaultValue="Default Value"
          floatingLabelText="SIM名" />

          <br />

        <TextField
          hintText="1~500"
          defaultValue=""
          floatingLabelText="1日のメール上限通数" />
          </div>
        </ClearFix>
     </Paper>
    );
  }
}

module.exports =  Account;

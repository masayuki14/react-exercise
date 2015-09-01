import React from 'react';
import mui   from 'material-ui';

let ThemeManager = new mui.Styles.ThemeManager();

let Paper = mui.Paper;

export default React.createClass({

  render: function() {
    return (
      <div classNmae="main-panel">
        <Paper zDepth={1}>
          <h1>Main Panel</h1>
        </Paper>
      </div>
    );
  }
});

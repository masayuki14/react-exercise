import Router from 'react-router';

let Route        = Router.Route;
let Redirect     = Router.Redirect;
//let DefaultRoute = Router.Default;

let Master = require('./components/master.jsx');
let Pages  = require('./components/pages.jsx');

let RegisterSim  = require('./components/pages/register-sim.jsx');
let EditTemplate = require('./components/pages/edit-template.jsx');
let SetActivity  = require('./components/pages/set-activity.jsx');
let MessageQueue = require('./components/pages/message-queue.jsx');
let SearchLog    = require('./components/pages/search-log.jsx');
let Statistics   = require('./components/pages/statistics.jsx');
let ListingData  = require('./components/pages/listing-data.jsx');
let ExportCsv    = require('./components/pages/export-csv.jsx');
let BlockingList = require('./components/pages/blocking-list.jsx');
let Preferences  = require('./components/pages/preferences.jsx');

/** Routes: https://github.com/rackt/react-router/blob/master/docs/api/components/Route.md
  *
  * Routes are used to declare your view hierarchy.
  *
  * Say you go to http://material-ui.com/#/components/paper
  * The react router will search for a route named 'paper' and will recursively render its
  * handler and its parent handler like so: Paper > Components > Master
  */
let AppRoutes = (
  <Route name="root" path="/" handler={Master}>

    <Route name="pages" handler={Pages}>
      <Route name="register-sim"  handler={RegisterSim}  />
      <Route name="edit-template" handler={EditTemplate} />
      <Route name="set-activity"  handler={SetActivity}  />
      <Route name="message-queue" handler={MessageQueue} />
      <Route name="search-log"    handler={SearchLog}    />
      <Route name="statistics"    handler={Statistics}   />
      <Route name="listing-data"  handler={ListingData}  />
      <Route name="export-csv"    handler={ExportCsv}    />
      <Route name="blocking-list" handler={BlockingList} />
      <Route name="preferences"   handler={Preferences}  />
    </Route>

    <Redirect from="/" to="pages" />
  </Route>
);

module.exports = AppRoutes;

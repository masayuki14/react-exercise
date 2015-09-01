import Router from 'react-router';

let Route        = Router.Route;
//let Redirect     = Router.Redirect;
//let DefaultRoute = Router.Default;

let Pane = require('./components/route.jsx');
//let MenuPanel = require('./components/menu.jsx');

/** Routes: https://github.com/rackt/react-router/blob/master/docs/api/components/Route.md
  *
  * Routes are used to declare your view hierarchy.
  *
  * Say you go to http://material-ui.com/#/components/paper
  * The react router will search for a route named 'paper' and will recursively render its
  * handler and its parent handler like so: Paper > Components > Master
  */
let AppRoutes = (
  <Route name="root" path="/" handler={Pane}>
  </Route>
);

module.exports = AppRoutes;

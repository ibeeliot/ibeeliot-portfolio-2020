// #region Global Imports
const nextRoutes = require("next-routes");
// #endregion Global Imports

const routes = (module.exports = nextRoutes());

routes.add("home", "/");
routes.add("/ibeeliotDev2020", "/ibeeliotDev2020/index");

export default routes;

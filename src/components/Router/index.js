import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import FipePage from "../FipePage";

export const routes = {
	root: "/",
	fipePage: "/fipepage" 
};

function Router(props) {
	return (
		<ConnectedRouter history={props.history}>
			<Switch>
				<Route exact path={routes.root} component={Home}/>
				<Route exact path={routes.fipePage} component={FipePage}/>
			</Switch>
		</ConnectedRouter>
		);
}

export default Router;
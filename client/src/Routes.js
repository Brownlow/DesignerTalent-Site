import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Import Pages
import Home from './pages/Home';
import ClientsHome from "./pages/ClientsHome";
import DesignersHome from "./pages/DesignersHome";
import Consulting from "./pages/Consulting";
import WhoWeAre from "./pages/WhoWeAre";
import WhatWeDo from "./pages/WhatWeDo";
import NotFound from "./pages/NotFound";


export default () => (
	  <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/clients" component={ClientsHome} />
        <Route exact path="/designers" component={DesignersHome} />
        <Route exact path="/consulting" component={Consulting} />
        <Route exact path="/whoweare" component={WhoWeAre} />
        <Route exact path="/whatwedo" component={WhatWeDo} />
        {/* Finally, catch all unmatched routes */}
	    <Route component={NotFound} />
    </Switch>
);
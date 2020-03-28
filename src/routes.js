import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './Page/Logon';
import Register from './Page/Register';
import Profile from './Page/Profile';
import NewIncident from './Page/NewIncident';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
}


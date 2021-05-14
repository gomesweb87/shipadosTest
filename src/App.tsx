import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Screens/Home';

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

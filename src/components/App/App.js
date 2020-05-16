import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../../views/Home'
import Error404 from '../../views/Error404'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Header from '../elements/Header/Header';
import Home from '../Home/Home';
import Movie from  '../Movie/Movie';
import NotFound from '../elements/NotFound/NotFound';

const App = ()=>{
    return(
        <HashRouter basename="/react_rmdb/">
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/:movieId" component={Movie} exact />
                    <Route component={NotFound} />
                </Switch>
            </React.Fragment>
        </HashRouter>
    )
}

export default App;
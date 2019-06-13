import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SignIn from './Components/auth/SignIn/'
import SignUp from './Components/auth/SignUp'

import reducers from './reducers'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers)

ReactDOM.render(
<Provider>
    <Router>
        <div>
            <Navbar />
            <Route exact path="/" component={} />
            <Route path="/signin" component={} />
            <Route path="/request" component={} />
        </div>
    </Router>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

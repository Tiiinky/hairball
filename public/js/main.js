import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Band from '../../routes/band';
import Concert from '../../routes/concert';
import Home from '../../routes/home';
import Gallery from '../../routes/gallery';
import Music from '../../routes/Music';
import Impressum from '../../routes/Impressum';
import Contact from '../../routes/Contact';
import Button from 'react-bootstrap/lib/Button';
import  {createStore} from 'redux';
import { Router, Route, Link } from 'react-router'
import HeaderNavigation from './HeaderNavigation';
import Footer from './Footer';
var browserHistory = Router.browserHistory;
/*
const counter = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

const Counter = ({
    value,
    onIncrement,
    onDecrement
}) => (
    <div>
        <h1>{value}</h1>
        <Button onClick={onIncrement}>+</Button>
        <Button onClick={onDecrement}>-</Button>
    </div>
);

const store = createStore(counter);

const render = () => {
    ReactDOM.render(<Counter
        value={store.getState()}
        onIncrement = {() =>
            store.dispatch({
                type: 'INCREMENT'
            })
        }
        onDecrement = {() =>
            store.dispatch({
                type: 'DECREMENT'
            })
        }

        />, document.getElementById('app'));
}

store .subscribe(render);
render();
*/



    ReactDOM.render((

        <Router history={browserHistory}>
            <Route component={HeaderNavigation}>
                <Route path="/" component={Home} />
                <Route path="band" component={Band} />
                <Route path="concert" component={Concert} />
                <Route path="gallery" component={Gallery} />
                <Route path="music" component={Music} />
                <Route path="contact" component={Contact} />
                <Route path="about" component={Impressum} />
            </Route>
            <Route component={Footer} />
        </Router>

    ), document.getElementById('app'));

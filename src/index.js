import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//receiving rating from feeling component and moving it to the store.
const feelingRating = ( state = 1, action ) => {
    console.log( 'in feelingRating reducer:', action );
    if( action.type === 'feelingUpdate' ){
        console.log( 'succesfully dispatched feeling' );
        state = action.payload;
    }
    console.log( 'current feeling:', state );//should show the selected feeling from feeling component once submitted. 
    return state;
}

//receiving rating from understanding component
const understandingRating = ( state = 1, action ) => {
    console.log( 'in understandingRating reducer:', action );
    if( action.type === 'understandingUpdate' ){
        console.log( 'successfully dispatched understanding');
        state = action.payload;
    }
    console.log( 'current understanding:', state );//should show the selected understanding rating
    return state;
}

//receiving rating from supported component
const supportRating = ( state = 1, action ) => {
    console.log( 'in understandingRating reducer:', action );
    if( action.type === 'supportedUpdate' ){
        console.log( 'successfully dispatched support');
        state = action.payload;
    }
    console.log( 'current support:', state );//should show the selected support rating
    return state;
}

//storing data from components for later use. 
const store = createStore(
    combineReducers({
        feelingRating: feelingRating,
        understandingRating: understandingRating,
        supportRating: supportRating
    }),
    applyMiddleware( logger )
)//end of store

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

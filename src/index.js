import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//receiving rating from feeling component and moving it to the store.
const feelingRating = ( state=0, action ) => {
    console.log( 'in feelingRating reducer:', action );
    if( action.type === 'feelingUpdate' ){
        console.log( 'succesfully dispatched feeling' );
        state = action.payload;
    }
    console.log( 'current feeling:', state );//should show me the selected feeling from feeling component once submitted. 
    return state;
}

//storing data from components for later use. 
const store = createStore(
    combineReducers({
        feelingRating: feelingRating
    }),
    applyMiddleware( logger )
)//end of store

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

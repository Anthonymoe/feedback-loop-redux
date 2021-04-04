import { useSelector } from 'react-redux';
import react from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';


function Review() {
    const review = useSelector( (store)=>{
        return store;
    })
    let history = useHistory();

    const submitFeedback = () => {
        console.log( 'in submitFeedback in Review.jsx:', review );
        axios({
           method: 'POST',
           url: '/feedback',
           data: review
        }).then( ( response ) =>{
           console.log('back from POST with:', response );
        }).catch( (err) =>{
           console.log(err);
           alert( 'err in submitFeedback POST' )
        })
        history.push( '/complete' );
    } //end of submitFeedback

    return(
        <>
        <h1>Review Your Feedback</h1>
        <div>
            <h2>Feelings: {review.feelingRating}</h2>
            <h2>Understanding: {review.understandingRating}</h2>
            <h2>Support: {review.supportRating}</h2>
            <h2>Comments: {review.newComment}</h2>
        </div>
        <div>
            <button onClick={submitFeedback}>SUBMIT</button>
        </div>
        </>
    )
}

export default Review; 
import {useDispatch } from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Comments() {
    let[ comment, setComment ] = useState('');
    let history = useHistory();
    const dispatch = useDispatch();


    //Sends support rating to the store on and sends user to next route on button click
    const submitComment = () => {
        console.log( comment )
        dispatch( {type: 'commentUpdate', payload: comment })
        history.push( '/review' );
    }


    //changes the value of the rating upon change does not dispatch rating that happens ^^^in submitComment
    const handleChange =(event)=>{
    setComment( event.target.value );
    }

    return(
        <>
           <h1>Any comments that you would like to leave?</h1>
           <div>
                <textarea onChange={handleChange} rows="10" cols="50" placeholder="Comments" type="text"/>
           </div>
           <div>
               <button onClick={submitComment}>Next</button>
           </div>
        </>
    )
}

export default Comments;
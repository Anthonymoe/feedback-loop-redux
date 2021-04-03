import {useDispatch } from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Understanding () {
    let[ rating, setRating ] = useState(1);
    let history = useHistory();
    const dispatch = useDispatch();

    //Sends understanding to the store on and sends user to next route on button click
    const submitUnderstanding = () => {
        console.log( 'in click' )
        console.log( rating )
        dispatch( {type: 'understandingUpdate', payload: rating })
        history.push( '/supported' );
    }
        
    //changes the value of the rating upon change does not dispatch rating that happens ^^^in submitUnderstanding
    const handleChange =(event)=>{
        console.log( 'in handleChange:', event.target.value );
        setRating( event.target.value )
    }

    return(
        <>
            <h1>How well are you understanding the content?</h1>
            <h4>Scale 1-5</h4>
            <div>
                <select onChange={handleChange}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div>
                <button onClick={submitUnderstanding}>Next</button> 
            </div>
        </>
    )
}

export default Understanding;
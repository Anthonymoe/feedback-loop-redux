import {useDispatch } from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';


function Feeling() {
    let[ rating, setRating ] = useState('1');
    let history = useHistory();
     const dispatch = useDispatch();

    //Sends feelings to the store on and sends user to next route on button click
    const submitFeeling = () => {
        console.log( 'in click' )
        console.log( rating )
        dispatch( {type: 'feelingUpdate', payload: rating })
        history.push( '/understanding' );
    }
    //changes the value of the rating upon change does not dispatch rating that happens ^^^in submitFeeling
    const handleChange =(event)=>{
        console.log( 'in handleChange:', event.target.value );
        setRating( event.target.value )
    }


    return(
        <>
            <h1>How are you feeling today?</h1>
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
                <button onClick={submitFeeling}>Next</button> 
            </div>
        </>
    )
}

export default Feeling;


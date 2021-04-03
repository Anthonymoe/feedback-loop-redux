import {useDispatch } from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Supported() {
    let[ rating, setRating ] = useState(1);
    let history = useHistory();
    const dispatch = useDispatch();

     //Sends support rating to the store on and sends user to next route on button click
     const submitSupported = () => {
        console.log( 'in click' )
        console.log( rating )
        dispatch( {type: 'supportedUpdate', payload: rating })
        history.push( '/comments' );
    }
            
    //changes the value of the rating upon change does not dispatch rating that happens ^^^in submitSupported
    const handleChange =(event)=>{
        console.log( 'in handleChange:', event.target.value );
        setRating( event.target.value )
    }

    return (
    
        
        <>
            <h1>How well are you being supported?</h1>
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
                <button onClick={submitSupported}>Next</button> 
            </div>
        </>
    )
}

export default Supported;
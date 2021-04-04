import {useHistory} from 'react-router-dom';


function Complete () {
    let history = useHistory();

    const returnHome = () =>{
        history.push('/');
    }
    
    return (
        <>
            <h1>Thank you!</h1>
            <h4>Would you like to leave more feedback?</h4>
            <button onClick={returnHome}>Leave New Feedback</button>
        </>
    )
}

export default Complete;
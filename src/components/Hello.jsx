import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Hello ({ input }){
    let hello = true; 
    if (!isNaN(input)){
        hello = false;
    }
    return(
        <Jumbotron>
        {
            hello ?
                <h1>The word is: {input}</h1>
                :
                <h1>The number is: {input}</h1>
        }
        </Jumbotron>
    )
}
export default Hello
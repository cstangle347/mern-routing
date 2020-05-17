import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Color ({ bg, color, word }){
    let style = {
        backgroundColor: bg,
        color: color
    }
    return(
        <Jumbotron>
        {
            <h1 style = {style}>The word is: {word}</h1>
        }
        </Jumbotron>
    )
}
export default Color
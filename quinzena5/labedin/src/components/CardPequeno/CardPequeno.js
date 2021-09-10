import React from 'react';
import './CardPequeno.css'


function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <h4>{ props.email }</h4>
            <p>{ props.endereco }</p>
        </div>
    )
}

export default CardPequeno;
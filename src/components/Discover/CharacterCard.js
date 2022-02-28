import React from 'react';

import './styles/CharacterCard.css'
const CharacterCard = (props) => {
    return (
        <div className='character-card-wrapper'>
            <img className='character-card-image' src={props.items.imageurl} alt="profile "/>
            <div className='character-card-info'> <h1>{props.items.name}</h1>
            <p>{props.items.description}</p></div>
           
        </div>
    );
}

export default CharacterCard;

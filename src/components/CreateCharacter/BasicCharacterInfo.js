import React from 'react';
import DefautlImage from './../../resources/Images/default-image.jpg'
import './styles/BasicCharacterInfo.css'

const BasicCharacterInfo = () => {
    return (
        <div className='basic-character-info-wrapper'>
            <div className='basic-character-info-img' >
            <img src={DefautlImage} alt=''></img>
            </div>
            <div className='basic-charcter-info'>
                <form>
                <ul>
                    <li><p>name</p> <input type="text"></input></li>
                </ul>
                </form>
            </div>
        </div>
    );
}

export default BasicCharacterInfo;

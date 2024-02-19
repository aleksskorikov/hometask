
import React, { useState } from 'react';

const names = [ "aleks", "Vasya", "aleks", "Olga"];
const NamesList = () => {
    const [uniqueNames, setUniqueNames] = useState([]);

    const showUniqueNames = () => {
    const uniqueNamesArray = [...new Set(names)];
    setUniqueNames(uniqueNamesArray);
    };

    return (
        <div>
            <p className='job-number'>Завдання 2</p>
            <h2 className='list-name'>Список Імен</h2>
            <div className='name__list-block'>
                <ul >
                {uniqueNames.map((name, index) => (
                    <li className='name__list-list' key={index} >{name}</li>
                ))}
                </ul>
                <button onClick={showUniqueNames} className='name__list-btn'>Показати Імена</button>
            </div>
        
    </div>
    );
};

export default NamesList;



import React from 'react';

const Render = () => {
    const DivClick = () => {
        console.log('Div clicked');
    };

    const ButtonClick = (e) => {
        e.stopPropagation();
        console.log('Button clicked');
    };

    return (
        <>
            <p className='job-number'>Завдання 6</p>
            <div onClick={DivClick} className='render-div'>
            <button onClick={ButtonClick} className='render-btn'>Click me</button>
            </div>
        </>
        
    );
};

export default Render;

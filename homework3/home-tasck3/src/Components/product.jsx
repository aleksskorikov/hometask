import React, { useState } from 'react';
import img from './img/image.svg'

const product = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
    setCount(count + 1);
    };
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
        
    };
    return (
        <>
            <p className='job-number'>Завдання </p>
            <div className='product'>
                <img src={img} alt="" className='product-img'/>
                <p className='product-price'>800 ₴</p>
                <p className='product-name'>Мінібукет 1600-6</p>
                <p className='product-description'>Хрезантема - 6  шт. (50 см.),  Троянда міні  - 4 шт., </p>
                <div className="counter-block">
                    <div className="product-counter">
                        <button className="counter-btn" onClick={decrement}>-</button>
                        <p className='counter'>{count}</p>
                        <button onClick={increment} className='counter-btn'>+</button>
                    </div>
                    <button  className="counter-block-btn">Замовити</button>
                </div>
            </div>
        </>   
        )
        
}

export default product
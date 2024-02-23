
import React, { useState } from 'react';

const tasck3 = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [ValidInput1, setValidInput1] = useState(true);
    const [ValidInput2, setValidInput2] = useState(true);

        const InputChange = (e, setInput, setValidInput) => {
        const value = e.target.value;

        if (/^\d*$/.test(value)) {
            setInput(value);
            setValidInput(true);
        } else {
            setValidInput(false);
        }
    };

    const Results = (number) => {
        const result1 = number * 0.5;
        const result2 = number * 0.05;
        return { result1, result2 };
    };

    return (
        <>
        <form className='tasck3-form'>
            <input type="text" value={input1} onChange={(e) => InputChange(e, setInput1, setValidInput1)} className='tasck3-input'/>
            {!ValidInput1 && <span className='tasck3-span'>Введіть число</span>}
            {ValidInput1 && input1 !== '' && (
                <div>
                    <p>{input1} * 0.5 = {Results(Number(input1)).result1}</p>
                    <p>{input1} * 0.05 = {Results(Number(input1)).result2}</p>
                </div>
            )}

            <input type="text" value={input2} onChange={(e) => InputChange(e, setInput2, setValidInput2)} className='tasck3-input'/>
            {!ValidInput2 && <span className='tasck3-span'>Введіть число</span>}
            {ValidInput2 && input2 !== '' && (
            <div>
                <p>{input2} * 0.5 = {Results(Number(input2)).result1}</p>
                <p>{input2} * 0.05 = {Results(Number(input2)).result2}</p>
            </div>
            )}
        </form>
    </>
    );
};

export default tasck3;



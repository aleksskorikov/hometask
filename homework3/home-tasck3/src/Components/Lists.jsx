import React, {useState} from 'react'

const Lists = () => {
    const [list1, setList1] = useState(['Елемент 1', 'Елемент 2', 'Елемент 3']);
    const [list2, setList2] = useState(['Елемент 4', 'Елемент 5', 'Елемент 6']);

    const move = () => {
    if (list1.length > 0) {
        const element = list1[0];
        setList1(list1.slice(1));
        setList2([...list2, element]);
    }};
    return (
        <>
            <p className='job-number'>Завдання 5</p>
            <div className='lists-block'>
                <div>
                <h2 className='list-name'>Список 1</h2>
                <ul className='lists__block-lists'>
                    {list1.map((item, index) => (
                    <li key={index} className='lists__block-list'>{item}</li>
                    ))}
                </ul>
                </div>
                <div>
                <h2 className='list-name'>Список 2</h2>
                <ul className='lists__block-lists'>
                    {list2.map((item, index) => (
                    <li key={index} className='lists__block-list'>{item}</li>
                    ))}
                </ul>
                </div>
            </div>
            <button onClick={move} className='lists__block-btn'>Перемістити елемент</button>
    </>
    )
}

export default Lists


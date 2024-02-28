import React, { useState } from 'react';
import { RiCheckboxCircleLine } from 'react-icons/ri';
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";

const tasck3 = () => {
    const [Tasck, setTasck] = useState('');
    const [Tascks, setTascks] = useState([]);

    const AddTask = () => {
        if (Tasck.trim() !== '') {
            setTascks([...Tascks, { text: Tasck, done: false }]);
            setTasck('');
        }
    };

    const DeleteTask = (index) => {
    const updatedTasks = [...Tascks];
    updatedTasks.splice(index, 1);
    setTascks(updatedTasks);
    };

    const ToggleDone = (index) => {
    const updatedTasks = [...Tascks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTascks(updatedTasks);
    };
    return (
        <>
            <div className="conteiner">
                <h1 className="todo-title">TODU </h1>
                <div>
                    <input className='todo-input' type="text" placeholder="Enter a task" value={Tasck} onChange={(e) => setTasck(e.target.value)}/>
                    <button className='todo__input-btn' onClick={AddTask}>Add Task<RiCheckboxCircleLine /></button>
                </div>
                <ul>
                    {Tascks.map((task, index) => (
                    <li className={task.done ? 'done' : 'todo-tasck'} key={index}>
                        <span >{task.text}</span>
                        <div className="todo__list-btns">
                            <button className='btn-done' onClick={() => ToggleDone(index)}><IoCheckmarkDoneCircleOutline /></button>
                            <button className='btn-delete' onClick={() => DeleteTask(index)}><RiDeleteBin6Line /></button>     
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default tasck3
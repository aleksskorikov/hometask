
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { RiCheckboxCircleLine } from 'react-icons/ri';
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { styled } from '@mui/system';
import '../styles/scss/_tasck6.scss';

const TaskButton = styled(Button)(({ theme }) => ({
    width: '200px',
    height: '3rem',
    borderRadius: '10px',
    fontSize: '1.5rem',
    background: 'rgb(104, 200, 104)',
    color: 'black',
    border: '1px solid rgb(60, 147, 60)',
    '&:hover': {
        background: 'rgb(63, 122, 63)',
        color: 'antiquewhite',
    },
}));

const CancelButton = styled(Button)(({ theme }) => ({
    width: '100px',
    height: '2.5rem',
    borderRadius: '10px',
    fontSize: '1rem',
    background: 'rgb(158, 159, 226)',
    color: 'black',
    border: '1px solid rgb(81, 82, 143)',
    '&:hover': {
    border: '1px solid rgb(81, 82, 143)',
        background: 'rgb(54, 55, 143)',
        color: 'antiquewhite',
    },
}));

const AddTaskButton = styled(Button)(({ theme }) => ({
    width: '100px',
    height: '2.5rem',
    borderRadius: '10px',
    fontSize: '1rem',
    background: 'rgb(158, 159, 226)',
    color: 'black',
    border: '1px solid rgb(81, 82, 143)',
    '&:hover': {
        background: 'rgb(54, 55, 143)',
        color: 'antiquewhite',
    },
}));

const dialogTitle = {
    fontSize: '2rem',
    color: 'rgb(30, 84, 84)',
    margin: '0 auto',
}

const TasckItem = styled('li')(({ theme, done }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'rgb(245, 243, 243)',
    margin: '10px 0',
    padding: '10px',
    border: '1px solid gray',
    borderRadius: '10px',
    fontSize: '1.5rem',
    backgroundColor: done ? 'rgb(126, 236, 142)' : 'rgb(245, 243, 243)',
}));

const CustomDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiPaper-root': {
        background: 'rgb(208, 209, 240)', 
        width: '500px',
    },
}));

const CustomTextField = styled(TextField)(({ theme }) => ({
    fontSize: '2rem',
    color: 'Red',
}));

const textField = {
    background: 'rgb(235, 237, 235)',
    fontSize: '1.5rem',
}

const btnDone = {
    fontSize: '2rem',
    color: 'rgb(27, 128, 42)',
    backgroundColor: 'inherit',
    padding: '0',
    marginRight:'-1rem',
};

const btnDelete = {
    fontSize: '1.8rem',
    color: 'red',
    backgroundColor: 'inherit',
    padding: '0',
    marginTop:'-2px',
};

const Tasck6 = () => {
    const [tasck, setTasck] = useState('');
    const [tascks, setTascks] = useState([]);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAddTask = () => {
        if (tasck.trim() !== '') {
        setTascks([...tascks, { text: tasck, done: false }]);
        setTasck('');
        handleClose();
        }
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = [...tascks];
        updatedTasks.splice(index, 1);
        setTascks(updatedTasks);
    };

    const handleToggleDone = (index) => {
        const updatedTasks = [...tascks];
        updatedTasks[index].done = !updatedTasks[index].done;
        setTascks(updatedTasks);
    };

    return (
        <>
        <div className="container">
            <h1 className="todo-title">TODO</h1>
            <div>
            <TaskButton  variant="outlined" color="primary" onClick={handleClickOpen}>Add Task<RiCheckboxCircleLine /></TaskButton>
            <CustomDialog open={open} onClose={handleClose}>
                <DialogTitle style={dialogTitle}>Add Task</DialogTitle>
                <DialogContent>
                <CustomTextField style={textField}
                    autoFocus  margin="dense" id="task" label="Enter a task" type="text" fullWidth value={tasck} onChange={(e) => setTasck(e.target.value)}/>
                </DialogContent>
                <DialogActions>
                <CancelButton onClick={handleClose} color="primary">Cancel</CancelButton>
                <AddTaskButton onClick={handleAddTask} color="primary" disabled={!tasck.trim()}>Add Task</AddTaskButton>
                </DialogActions>
            </CustomDialog>
            </div>
            <ul className='hhh'>
            {tascks.map((task, index) => (
                <TasckItem done={task.done} key={index}>
                <span>{task.text}</span>
                <div className="todo__list-btns">
                    <Button style={btnDone} onClick={() => handleToggleDone(index)}><IoCheckmarkDoneCircleOutline /></Button>
                    <Button style={btnDelete} onClick={() => handleDeleteTask(index)}><RiDeleteBin6Line /></Button>
                </div>
                </TasckItem>
            ))}
            </ul>
        </div>
        </>
    );
};

export default Tasck6;




import React, { useState, useContext } from 'react';
import './styles.css';
import { TaskContext} from "../../context/TaskContext";


function TaskForm() {
    const {addTask, clearList } = useContext(TaskContext);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleChangeTitle = (event) => {

        setTitle(event.target.value)
    }

    const handleChangeDescription = (event) => {
        setDescription(event.target.value)
    }


    const handleSubmit = async (event) => {
        event.preventDefault()

       await addTask(title, description);
        setTitle('');
        setDescription('');
    }

    const handleClearList = (event) =>{
        event.preventDefault();
        clearList()
    }


    return (
        <form onSubmit={handleSubmit} className="form ">
            <input type="text"
                className="task-input"
                placeholder="Add title"
                required
                value={title}
                onChange={handleChangeTitle}></input>

            <input type="text"
                className="task-input"
                placeholder="Add description" required
                value={description}
                onChange={handleChangeDescription}></input>

            <div className="buttons">
                <button type="submit" className="btn add-task-btn">Adicionar</button>
                <button className="btn clear-btn" onClick={handleClearList}>Limpar</button>
            </div>
        </form>
    );
}

export default TaskForm;
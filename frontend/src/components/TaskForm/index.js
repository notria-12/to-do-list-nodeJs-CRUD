import { useState } from 'react';
import api from '../../service/api';
import './styles.css';


function TaskForm() {
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

        try {
            await api.post('/', {
                title,
                description
            });
        } catch (error) {
            console.log('Ocorreu um erro ao adicionar um regisrto' + error);
        }
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
                <button className="btn clear-btn">Limpar</button>
            </div>
        </form>
    );
}

export default TaskForm;
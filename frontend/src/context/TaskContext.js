import React, { createContext, useEffect, useState } from "react";
import api from '../service/api'

export const TaskContext = createContext();


const TaskContextProvider = (props) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function getTasks() {

            try {
                const { data } = await api.get('/');
                console.log("Tasks: ", data)
                setTasks(data);
            } catch (error) {
                console.log('Ocorreu um erro inesperado' + error);
            }
        }
        getTasks();
    }, []);
    
    const addTask = async (title, description) => {
        
        try {
           const {data} = await api.post('/', {
                title,
                description
            });
            setTasks([... tasks, data]);
            
        } catch (error) {
            console.log('Ocorreu um erro ao adicionar um regisrto' + error);
        }
    }

    const clearList = () => {
        setTasks([]);
    }

    return(
        <TaskContext.Provider
            value={{ tasks, addTask, clearList }}
        >
            {props.children}
        </TaskContext.Provider>
    );
}

export default TaskContextProvider;
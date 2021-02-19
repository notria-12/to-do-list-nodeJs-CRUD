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

    return(
        <TaskContext.Provider
            value={{ tasks }}
        >
            {props.children}
        </TaskContext.Provider>
    );
}

export default TaskContextProvider;
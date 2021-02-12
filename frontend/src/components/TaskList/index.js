import './styles.css';
import api from '../../service/api'
import Task from '../Task'
import React, { useEffect, useState } from 'react';


function TaskList() {
  const [tasks, setTasks] = useState([]);
  
  useEffect( () => {
    async function getTasks(){
      
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

  console.log(tasks)

  return (
    <div>
      {
        tasks.length ? (<ul className="list-tasks">
        {tasks.map(task => (
          <Task task={task} key={task.id}/>
        ))
        }
      </ul>): ( <div className="no-tasks">Não existe tarefas </div>)
      }
      
    </div>
  );
}

export default TaskList;
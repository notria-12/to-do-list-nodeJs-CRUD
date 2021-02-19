import './styles.css';
import { TaskContext} from "../../context/TaskContext";
import Task from '../Task'
import React, { useContext } from 'react';


function TaskList() {
  const {tasks} = useContext(TaskContext);
  
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
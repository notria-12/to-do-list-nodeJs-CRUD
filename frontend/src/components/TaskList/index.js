import './styles.css';

import Task from '../Task'


function TaskList() {
  let tasks = [
    {
      id: 1,
      description: "Aprender NodeJs"
    },
    {
      id: 2,
      description: "Aprender Spring Framework"
    }
  ]

  return (
    <div>
      <ul className="list-tasks">
        {tasks.map(task => (
          <Task task={task} key={task.id}/>
        ))
        }
      </ul>
    </div>
  );
}

export default TaskList;
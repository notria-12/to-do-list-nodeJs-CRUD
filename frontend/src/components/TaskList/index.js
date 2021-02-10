import './styles.css';

function TaskList(){
    return (
        <div>
            <ul className="list-tasks">
              <li className="list-item">
                <span>Tarefa 1</span>
                
              </li>
              <button>Deletar</button>
                <button>Editar</button>
            </ul>
          </div>
    );
}

export default TaskList;
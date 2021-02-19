import './styles.css';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useContext } from "react";
import { TaskContext} from "../../context/TaskContext";

function Task(props) {

    const {removeTask} = useContext(TaskContext);

    return (
        <li className="list-item" >
            <span>{props.task.description}</span>
            <div>
                <DeleteIcon className="btn-icons" onClick={() => removeTask(props.task.id)} />
                <EditIcon className="btn-icons" />
            </div>
        </li>
    );
}

export default Task;
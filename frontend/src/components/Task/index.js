import './styles.css';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

function Task(props) {
    return (
        <li className="list-item" >
            <span>{props.task.description}</span>
            <div>
                <DeleteIcon className="btn-icons" />
                <EditIcon className="btn-icons" />
            </div>
        </li>
    );
}

export default Task;
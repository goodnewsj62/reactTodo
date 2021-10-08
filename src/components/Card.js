import {taskContext} from './Main'
import {useContext} from 'react'
import Due from './Due'

function Card({task}){
    const data = useContext(taskContext);
    function done(e){
        if(data.data.indexOf(task) !== -1){
            data.setDoneTask(doneTask => ([...doneTask, task]));
            data.setData(todos => todos.filter((_,index) => index !== data.data.indexOf(task) ))
        }

    }

    const deleteTask = (e) =>{
        if(data.data.indexOf(task) !== -1){
            data.setData(todos => todos.filter((_,index) => index !== data.data.indexOf(task) ))
        }
    }
    return (
        <div className="card">
            <div className="done">
                <input type="checkbox" name="done" onChange={(e) => done(e)} />
            </div>
            <div  className="description">
                <h2>{task.title}</h2>
                <div className="footer">
                    <p>{task.date.substr(11,8)}</p>
                    <Due task={{task}}/>
                    <button type="button" onClick={event => deleteTask(event)}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card
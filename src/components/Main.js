import {useState,createContext} from 'react'
import Card from './Card'
import CreateForm from './Forms.js'


export const taskContext = createContext();


export function Main(props){
    const [data,setData] = useState([{"title":"firstTask","date":new Date().toISOString()}]);
    const [doneTask,setDoneTask] = useState([]);

    return(
        <taskContext.Provider value={{data,setData,doneTask,setDoneTask}}>
            <CreateForm show={props} />
            <div className="cards">
            {data.map(function (task){
                return <Card key={data.indexOf(task)} task={task}/>
            })}
        </div>
        </taskContext.Provider>
    );
}


import {useEffect,useState} from 'react'



export default function Due({task}){
    const [now,setNow] = useState(new Date());
    
    useEffect(()=>{
        const tick = setTimeout(()=>{
            setNow(new Date());
        },1000)

        return ()=>{
            clearTimeout(tick);
        }
    },[now]);
    const taskDate = new Date(task.task.date).toString()
    
    const response = now.toString() >= taskDate? <div className="due pad">Due</div>: <div className="due"></div>
    return response
}
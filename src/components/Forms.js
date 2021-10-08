import { useState,useRef,useContext} from "react";
import { taskContext } from "./Main";

export default function CreateForm({show}){
    const [inputValue, setInputValue] = useState({"title":"","date":""});
    const data = useContext(taskContext);

    const clearValue = useRef()

    function addTask (e){
        e.preventDefault();
        data.setData(todos => ([inputValue,...todos]))
        clearValue.current.value = ""
        show.show(false);
    }

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value
        setInputValue(values =>({...values,[name]:value}))
    }
    if(show.visibility){
        return (
            <form onSubmit={e => addTask(e)}>
                <input type="text" name="title" ref={clearValue} required onChange={e => handleChange(e)} />
                <input type="datetime-local" ref={clearValue} required name="date" id="date-time"  onChange={e => handleChange(e)}/>
                <button type="submit">
                    Create task
                </button>
            </form>
        );
    }else{
        return <></>
    }
}
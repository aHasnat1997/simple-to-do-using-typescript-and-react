import { useState } from "react";
import { TToDo } from "../types";
import { ToDoCtx } from "../provider/ToDoProvider";

function Form() {
    const [task, setTask] = useState('');
    const provider = ToDoCtx();

    const submitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();

        const todo: TToDo = {
            id: Math.random().toString(36).substring(2, 7),
            data: new Date().toISOString(),
            text: task,
            isCompleted: false
        }

        provider?.dispatch({ type: 'addToDo', payload: todo })
    }
    return (
        <form onSubmit={submitHandler}>
            <input onBlur={(e) => setTask(e.target.value)} type="text" />
            <button type="submit">ADD</button>
        </form>
    )
}

export default Form;
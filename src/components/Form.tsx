import { FormEvent, useEffect, useRef } from "react";
import { TToDo } from "../types";
import { ToDoCtx } from "../provider/ToDoProvider";

function Form() {
    const provider = ToDoCtx();
    const taskRef = useRef<HTMLInputElement>(null);

    const submitHandler = ((e: FormEvent) => {
        e.preventDefault();

        const todo: TToDo = {
            id: Math.random().toString(36).substring(2, 7),
            data: new Date().toISOString(),
            text: taskRef.current?.value as string,
            isCompleted: false
        }

        provider?.dispatch({ type: 'addToDo', payload: todo });
        if (taskRef.current) taskRef.current.value = '';
    })

    useEffect(() => {
        const enterKeyPressed = (e: KeyboardEvent) => {
            if (e.key === 'Enter') submitHandler
        }
        document.addEventListener('keypress', enterKeyPressed)
        return () => document.removeEventListener('keypress', enterKeyPressed)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                ref={taskRef}
            />
            <button type="submit">ADD</button>
        </form>
    )
}

export default Form;
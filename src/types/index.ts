import { ReactNode } from "react"

export type TToDo = {
    id: string,
    text: string,
    data: string,
    isCompleted: boolean
}

export type TAction = {
    type: 'addToDo' | 'removeToDo',
    payload: TToDo
}

export type TToDoProviderProps = {
    children: ReactNode
}

export type TToDoCreateContext = {
    state: TToDo[],
    dispatch: React.Dispatch<TAction>
}
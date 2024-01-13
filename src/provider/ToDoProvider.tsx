import { createContext, useContext, useReducer } from "react";
import { TAction, TToDo, TToDoCreateContext, TToDoProviderProps } from "../types";

const initialState: TToDo[] = [];

const reducer = (currentState: TToDo[], action: TAction) => {
    switch (action.type) {
        case 'addToDo':
            return [...currentState, action.payload];
        case 'completedToDo':
            return currentState.map(item => action?.payload?.id === item?.id ? { ...item, isCompleted: !item.isCompleted }
                : item);
        default:
            return currentState;
    }
};

const ToDoContext = createContext<TToDoCreateContext | null>(null);

const ToDoProvider = ({ children }: TToDoProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const todoData = { state, dispatch };

    return <ToDoContext.Provider value={todoData}>
        {children}
    </ToDoContext.Provider>
};

export const ToDoCtx = () => useContext(ToDoContext);

export default ToDoProvider;
import {DELETE_LIST, UPDATE_LIST} from "./list.types";


const initialStore = {
    taskList: [
        {id: "task_1", name: "Learn React", status: false, edit: false},
        {id: "task_2", name: "Learn Redux", status: true, edit: true},
        {id: "task_3", name: "Learn React Native", status: false, edit: false},
    ]
}

export const listReducer = (store = initialStore, action) => {
    switch (action.type){
        case DELETE_LIST:
            return{
                ...store,
                taskList: []
            }
        case UPDATE_LIST:
            return{
                ...store,
                taskList: action.payload
            }
        default:
            return store
    }
}
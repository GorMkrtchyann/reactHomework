import {DELETE_LIST, UPDATE_LIST} from "./list.types";


export const deleteList = () => {
    return{
        type: DELETE_LIST
    }
}

export const updateList = ( newList ) => {
    return{
        type: UPDATE_LIST,
        payload: newList
    }
}
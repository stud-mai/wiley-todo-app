import * as actionTypes from './constants';

export const openDialog = () => ({type: actionTypes.OPEN_DIALOG});
export const closeDialog = () => ({type: actionTypes.CLOSE_DIALOG});

export const updateTextField = (fieldName, value) => {
    return {
        type: actionTypes.UPDATE_FIELD,
        payload: {
            fieldName,
            value,
        }
    }
}

export const addNewTodo = (title, description) => {
    return {
        type: actionTypes.ADD_NEW_TODO,
        payload: {
            title,
            description,
        }
    }
}

export const removeTodo = (id) => {
    return {
        type: actionTypes.REMOVE_TODO,
        payload: id
    }
}

export const markTodo = (id) => {
    return {
        type: actionTypes.MARK_TODO,
        payload: id
    }
}

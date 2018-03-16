import { combineReducers } from 'redux';
import * as R from 'ramda';
import * as actionTypes from '../actions/constants';

function dialog(state = {}, action){
    const {type, payload} = action;

    switch(type){
        case actionTypes.UPDATE_FIELD:
            const {fieldName, value} = payload;
            return {
                ...state,
                [fieldName]: value
            };

        case actionTypes.OPEN_DIALOG:
            return {
                ...state,
                isDialogOpen: true
            };

        case actionTypes.CLOSE_DIALOG:
            return {};

        case actionTypes.EDIT_TODO:
            const {title, description, editingTodoId} = payload;
            return {
                isDialogOpen: true,
                isEditing: true,
                title,
                description,
                editingTodoId,
            }

        default:
            return state;
    }
}

function todos(state = [], action){
    const {type, payload} = action;

    switch(type){
        case actionTypes.ADD_NEW_TODO:
            const newTodo = { ...payload, isDone: false };
            return [...state, newTodo];

        case actionTypes.SAVE_TODO:
            const {title, description, editingTodoId} = payload;
            const editedTodo = {
                ...state[editingTodoId],
                title,
                description,
            };
            return R.update(editingTodoId, editedTodo, state);

        case actionTypes.REMOVE_TODO:
            return R.remove(payload, 1, state);

        case actionTypes.MARK_TODO:
            const markedTodo = {
                ...state[payload],
                isDone: !state[payload].isDone
            };
            return R.update(payload, markedTodo, state);

        default:
            return state;
    }
}

export default combineReducers({
    dialog,
    todos,
});
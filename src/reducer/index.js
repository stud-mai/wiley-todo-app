import { combineReducers } from 'redux';
import * as actionTypes from '../actions/constants';
import * as R from 'ramda';

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

        case actionTypes.REMOVE_TODO:
            return [
                ...state.slice(0, payload),
                ...state.slice(payload + 1),
            ];

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
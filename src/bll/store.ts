import {applyMiddleware, combineReducers} from 'redux';
import { legacy_createStore as createStore} from 'redux'
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import {
    UniversitiesActionsType,
    universityReducer
} from "./universityReducer";


const rootReducer = combineReducers({
    universities: universityReducer,

});

export type RootStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type RootActionsType =
    UniversitiesActionsType


export type ThunkType = ThunkAction<void, RootStateType, unknown, RootActionsType>;

// @ts-ignore
window.store = store;
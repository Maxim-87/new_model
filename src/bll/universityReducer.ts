import {ThunkType} from "./store";
import {api, UniversitiesType} from "../api/api";

type InitialStateType = {
    universities: Array<UniversitiesType>
}
const InitialState:InitialStateType = {
    universities: []
}

export const universityReducer = (state: InitialStateType = InitialState, action: UniversitiesActionsType) => {

    switch (action.type) {
        case 'GET_UNIVERSITIES':
            return {...state, universities: action.payload};
        default:
            return state
    }
}

export const getUniversities = (universities: Array<UniversitiesType>) => {
    return {type: 'GET_UNIVERSITIES', payload: universities}
}

export const getUniversitiesTC = (): ThunkType => async dispatch => {
    try {
        const res = await api.getApi()
        dispatch(getUniversities(res.data))
    }
    catch (e) {
        console.log('Error')
    }
}

export type UniversitiesActionsType = ReturnType<typeof getUniversities>

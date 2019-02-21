import {LOAD_PHILOS_SUCCESS, LOAD_PHILOS_START, LOAD_PHILOS_FAIL} from "../actions/types";

const initialState = {};

export default philosReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_PHILOS_START:
            return{
                isLoading: true
            };

        case LOAD_PHILOS_SUCCESS:
            return{
                ...state, philos: action.payload, isLoading: false
            };

        case LOAD_PHILOS_FAIL:
            return{
                ...state, error: action.error
            };
        default:
            return state;
    }
};
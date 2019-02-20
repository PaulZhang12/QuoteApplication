import {ADD_PHILOS} from "../actions/types";
import helpers from '../Services/QuoteAPI';

async function getInitialState(){
    return await helpers.API();
}

const initialState = getInitialState();

const philosReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_PHILOS:
            return{
                ...state,
                philos: action.payload
            };
        default:
            return state;
    }
};

export default philosReducer;
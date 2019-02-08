import {ADD_PHILOS} from "../actions/types";

const initialState = {
    philoQuote: "Life is great",
    philoStory: "I'm amazing",
    philosRelated: []
};

const philosReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_PHILOS:
            return{
                ...state,
                philosRelated: state.philosRelated.concat({
                    key: 1,
                    value: action.payload
                })
            };
        default:
            return state;
    }
};

export default philosReducer;
import {TOGGLE_PERSPECT} from "../actions/types";

const INITIAL_STATE = {
    perspect: false
};

const perspectReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TOGGLE_PERSPECT:
            if (state.perspect)
                return {perspect: false};
            else
                return {perspect: true};

        default:
            return state

    }
};

export default perspectReducer;
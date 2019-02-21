import {LOAD_PHILOS_FAIL, LOAD_PHILOS_START, LOAD_PHILOS_SUCCESS} from "./types";


export const loadPhilos = () => {
    return {
        type: LOAD_PHILOS_START
    }
};

export const recievePhilos = (philoJson) => {
    return {
        type: LOAD_PHILOS_SUCCESS,
        payload: philoJson

    }
};

export const errorPhilos = (error) => {
    return {
        type: LOAD_PHILOS_FAIL,
        error: error

    }
};
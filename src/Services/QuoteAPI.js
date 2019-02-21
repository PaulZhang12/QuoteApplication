import {loadPhilos, errorPhilos, recievePhilos} from '../actions/philoActions';

export const loadFeedPhilos = () => {

    return (dispatch) => {

        dispatch(loadPhilos());
        fetch("https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=10", header = {
            headers: {
                'X-Mashape-Key': 'LkFW0i7YOvmshxY4qtCZ1tj8ZpRkp1sozU6jsnvG7rkx7gS2iX',
                'Accept': 'application/json'
            }
        }).then(response => response.json(),
            error => {
                console.warn(error);
                dispatch(errorPhilos(error));
            }
        ).then(json => {
            dispatch(recievePhilos(json));
        });
    }
};

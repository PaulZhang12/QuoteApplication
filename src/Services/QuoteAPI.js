import {loadPhilos, errorPhilos, recievePhilos, addPhilos} from '../actions/philoActions'; //actions

export const loadFeedPhilos = () => {

    return (dispatch) => {

        dispatch(loadPhilos()); //dispatch loadphilos action
        fetch("https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=10", header = { //API request, get
            headers: {
                'X-Mashape-Key': 'LkFW0i7YOvmshxY4qtCZ1tj8ZpRkp1sozU6jsnvG7rkx7gS2iX',
                'Accept': 'application/json'
            }
        }).then(response => response.json(), //makes the response json Promise
            error => {
              //in case something bad happens
                dispatch(errorPhilos(error));
            }
        ).then(json => {
            dispatch(recievePhilos(json)); //the json file is received
        });
    }
};

export const addPhilo = (philo) => {
    return (dispatch) => {
        dispatch(addPhilos(philo))
    }
};

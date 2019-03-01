
import { createStore, applyMiddleware} from 'redux';
import philoReducer from './reducers/philoReducer';
import thunk from 'redux-thunk';


const configureStore = () => {
    return createStore(philoReducer, applyMiddleware(thunk)); //creating redux store based on the root reducer and using thunk middleware
};

export default configureStore;
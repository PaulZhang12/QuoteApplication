
import { createStore, applyMiddleware} from 'redux';
import philoReducer from './reducers/philoReducer';
import thunk from 'redux-thunk';


const configureStore = () => {
    return createStore(philoReducer, applyMiddleware(thunk));
};

export default configureStore;
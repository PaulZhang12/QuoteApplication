
import { createStore, combineReducers} from 'redux';
import philosReducer from './reducers/philoReducer';

const rootReducer = combineReducers({
   philos: philosReducer
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;
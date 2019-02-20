
import { createStore, combineReducers} from 'redux';
import philosReducer from './reducers/philoReducer';
import perspectReducer from './reducers/perspectReducer';

const rootReducer = combineReducers({
   philos: philosReducer,
   perspect: perspectReducer
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;
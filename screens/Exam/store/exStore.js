import imageReducer from '../reducer/ImagereducerEx';
import {createStore,combineReducers} from 'redux';



const rootReducer = combineReducers({
    imageStore: imageReducer,
});

const exStore = ()=>{
    return createStore(rootReducer);
};

export default exStore;
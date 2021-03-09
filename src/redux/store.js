import {applyMiddleware,createStore,combineReducers} from 'redux';
// import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import {authReducer} from '../redux/reducer/auth.reducer'
import {videosReducer} from '../redux/reducer/videos.reducer'




// const reducer =initialState =>initialState
const rootReducer=combineReducers({
    auth:authReducer,
    videosReducer:videosReducer,
})


const store =createStore(
    rootReducer,
    {},
    composeWithDevTools()
    // applyMiddleware(thunk)
    );
    export default store;
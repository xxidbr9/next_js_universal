import {combineReducers} from 'redux'
import {postReducer} from './postReducer'


// untuk menggabungkan semua reducer 
export default combineReducers({
    // di namai sesuai yang akan kita panggil nanti 
    posts:postReducer,
    // tai:postReducer,

})
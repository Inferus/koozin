import {createStore, combineReducers} from 'redux'
import { globalReducer } from './globalReducer'
import {productReducer} from './productReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import { swiperReducer } from './swiperReducer'

    
const mainReducer = combineReducers({
    global: globalReducer,
    product: productReducer,
    swiper:swiperReducer
  })
export const store = createStore(mainReducer, composeWithDevTools())




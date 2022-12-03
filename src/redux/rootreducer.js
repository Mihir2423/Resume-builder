import { combineReducers } from "redux";
import {step1Reducer, step2Reducer, step3Reducer, step4Reducer} from "./reducer/reducer"

const rootReducer = combineReducers({
    step1Reducer,
    step2Reducer,
    step3Reducer,
    step4Reducer
})

export default rootReducer
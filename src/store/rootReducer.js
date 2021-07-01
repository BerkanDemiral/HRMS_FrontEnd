import { combineReducers } from "redux";
import alertReducer from "./reducers/alertReducer";

const rootReducer = combineReducers({
    alert:alertReducer
})

export default rootReducer;
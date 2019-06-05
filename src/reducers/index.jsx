import { combineReducers } from "redux";
import imagesReducers from "./imagesReducer";
const reducers = combineReducers({ images: imagesReducers });
export default reducers;

import { combineReducers, createStore } from "redux";
import distanceReducer from "../reducer/distance-reducer";
import temperatureReducer from "../reducer/temperature-reducer";
import userProfileReducer from "../reducer/userprofile-reducer";

const store = createStore(
    combineReducers({
        distance : distanceReducer,
        temperature : temperatureReducer,
        userProfile : userProfileReducer
    })
);

export default store;
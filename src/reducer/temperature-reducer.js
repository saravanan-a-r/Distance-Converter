import { initialStateForTemperature } from "../store/initial-state";

const temperatureReducer = (state = initialStateForTemperature, action) => {

    switch(action.type) {

        case "temperature/F_TO_K" : 
            return state;
        break;

        case "temperature/K_TO_F" : 
            return state;
        break;

        case "temperature/F_TO_C" : 
            return state;
        break;

        case "temperature/C_TO_F" : 
            return state;
        break;

        case "temperature/K_TO_C" : 
            return state;
        break;

        case "temperature/C_TO_K" : 
            return state;
        break;
    }

    return state;
}

export default temperatureReducer;
import { initialStateForTemperature } from "../store/initial-state";
import temperatureCalculator from "../utils/temperature-calculator";

const temperatureReducer = (state = initialStateForTemperature, action) => {

    switch(action.type) {

        case "temperature/input_value_changed" : 
            state = {
                ...state,
                input : {
                    ...state.input,
                    value : action.payload
                },
                output : {
                    ...state.output,
                    value : undefined
                }
            };
            temperatureCalculator.convert(state);
        break;

        case "temperature/output_value_changed" : 
            state = {
                ...state,
                input : {
                    ...state.input,
                    value : undefined
                },
                output : {
                    ...state.output,
                    value : action.payload
                }
            };
            temperatureCalculator.convert(state);
        break;

        case "temperature/input_scale_changed" : 
            state = {
                ...state,
                input : {
                    ...state.input,
                    scale : action.payload
                },
                output : {
                    ...state.output,
                    value : undefined
                }
            };
            temperatureCalculator.convert(state);
        break;

        case "temperature/output_scale_changed" :
            state = {
                ...state,
                output : {
                    ...state.output,
                    scale : action.payload
                },
                input : {
                    ...state.input,
                    value : undefined
                }
            };
            temperatureCalculator.convert(state);
        break;

        case "temperature/swap" : 
            state = {
                ...state,
                input : {
                    ...state.output
                },
                output : {
                    ...state.input
                }
            };
        break;
    }

    return state;
}

export default temperatureReducer;
import { initialStateForDistance } from "../store/initial-state";
import distanceCalculator from "../utils/distance-calculator";

const distanceReducer = (state = initialStateForDistance, action) => {
    
    switch(action.type) {

        case "distance/input_value_changed" : 
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
            distanceCalculator.convert(state);
        break;

        case "distance/output_value_changed" : 
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
            distanceCalculator.convert(state);
        break;

        case "distance/input_scale_changed" : 
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
            distanceCalculator.convert(state);
        break;

        case "distance/output_scale_changed" :
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
            distanceCalculator.convert(state);
        break;
    }

    return state;
};

export default distanceReducer;

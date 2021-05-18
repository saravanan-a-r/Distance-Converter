import store from "../store/store";

class TemperatureAction {

    temperatureInputScaleChanged(newInputScale) {
        return {
            type : "temperature/input_scale_changed",
            payload : newInputScale
        };
    }

    temperatureOutputScaleChanged(newOutputScale) {
        return {
            type : "temperature/output_scale_changed",
            payload : newOutputScale
        };
    }

    temperatureInputValueChanged(newInputValue) {
        return {
            type : "temperature/input_value_changed",
            payload : newInputValue
        };
    }

    temperatureOutputValueChanged(newOutputValue) {
        return {
            type : "temperature/output_value_changed",
            payload : newOutputValue
        };
    }
}

export default new TemperatureAction();
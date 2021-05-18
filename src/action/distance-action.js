class DistanceAction {

    distanceInputScaleChanged(newInputScale) {
        return {
            type : "distance/input_scale_changed",
            payload : newInputScale
        };
    }

    distanceOutputScaleChanged(newOutputScale) {
        return {
            type : "distance/output_scale_changed",
            payload : newOutputScale
        };
    }

    distanceInputValueChanged(newInputValue) {
        return {
            type : "distance/input_value_changed",
            payload : newInputValue
        };
    }

    distanceOutputValueChanged(newOutputValue) {
        return {
            type : "distance/output_value_changed",
            payload : newOutputValue
        };
    }

    handleDistanceSwap() {
        return {
            type : "distance/swap",
            payload : undefined
        };
    }
}

export default new DistanceAction();
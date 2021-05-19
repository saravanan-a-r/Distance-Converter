class Calculator {

    parseStateValues(state) {

        let inputValue = state.input.value;
        let outputValue = state.output.value;

        if(typeof inputValue === "string") {
            state.input.value = parseInt(inputValue);
        }

        if(typeof outputValue === "string") {
            state.output.value = parseInt(outputValue);
        }
    }
}

export default Calculator;
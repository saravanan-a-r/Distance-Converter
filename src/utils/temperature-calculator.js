class TemperatureCalculator {

    convert(state) {

        let input = state.input;
        let output = state.output;

        let sourceUnits = input.scale;
        let destUnits = output.scale;

        if(this.isCelciusToFahrenheitConversion(sourceUnits, destUnits)) {
            this.celciusToFahrenheitConversion(state);
        }
        else if(this.isCelciusToKelvinConversion(sourceUnits, destUnits)) {
            this.celciusToKelvinConversion(state);
        }
        else if(this.isFahrenheitToKelvinConversion(sourceUnits, destUnits)) {
            this.fahrenheitToKelvinConversion(state);
        }
        else if(this.isFahrenheitToCelciusConversion(sourceUnits, destUnits)) {
            this.fahrenheitToCelciusConversion(state);
        }
        else if(this.isKelvinToCelciusConversion(sourceUnits, destUnits)) {
            this.kelvinToCelciusConversion(state);
        }
        else if(this.isKelvinToFahrenheitConversion(sourceUnits, destUnits)) {
            this.kelvinToFahrenheitConversion(state);
        }
        else;
    }

    isCelciusToFahrenheitConversion(inputScale, outputScale) {
        if(inputScale === "c" && outputScale === "f") {
            return true;
        }
        return false;
    }

    isCelciusToKelvinConversion(inputScale, outputScale) {
        if(inputScale === "c" && outputScale === "k"){
            return true;
        }
        return false;
    }

    isFahrenheitToKelvinConversion(inputScale, outputScale) {
        if(inputScale === "f" && outputScale === "k") {
            return true;
        }
        return false;
    }

    isFahrenheitToCelciusConversion(inputScale, outputScale) {
        if(inputScale === "f" && outputScale === "c") {
            return true;
        }
        return false;
    }

    isKelvinToCelciusConversion(inputScale, outputScale) {
        if(inputScale === "k" && outputScale === "c") {
            return true;
        }
        return false;
    }

    isKelvinToFahrenheitConversion(inputScale, outputScale) {
        if(inputScale === "k" && outputScale === "f") {
            return true;
        }
        return false;
    }

    celciusToFahrenheitConversion(state) {
        if(!state.input.value) {
            /* --- Fahrenheit to Celcius --- */
            state.input.value = (state.output.value - 32) * (5/9);
        }
        else {
            /* --- Celcius to Fahrenheit --- */
            state.output.value = (state.input.value * (9/5)) + 32;
        }
    }

    celciusToKelvinConversion(state) {
        if(!state.input.value) {
            /* --- Kelvin to Celcius --- */
            state.input.value = state.output.value - 273.15;
        }
        else {
            /* --- Celcius to Kelvin --- */
            state.output.value = state.input.value + 273.15;
        }
    }

    fahrenheitToKelvinConversion(state) { 
        if(!state.input.value) {
            /* --- Kelvin to Fahrenheit --- */
            state.input.value = ((state.output.value - 273.15) * (9/5)) + 32;    
        }
        else {
            /* --- Fahrenheit to Kelvin --- */
            state.output.value = ((state.input.value - 32) * (5/9)) + 273.15;
        }
    }

    fahrenheitToCelciusConversion(state) {
        if(!state.input.value) {
            /* --- Celcius to Fahrenheit --- */
            state.input.value = (state.output.value * (9/5)) + 32;
        }
        else {
            /* --- Fahrenheit to Celcius --- */
            state.output.value = (state.input.value - 32) * (5/9);
        }
    }

    kelvinToCelciusConversion(state) {
        if(!state.input.value) {
            /* --- Celcius to Kelvin --- */
            state.input.value = state.output.value + 273.15;
        }
        else {
            /* --- Kelvin to Celcius --- */
            state.output.value = state.input.value - 273.15;
        }
    }

    kelvinToFahrenheitConversion(state) {
        if(!state.input.value) {
            /* --- Fahrenheit to Kelvin --- */
            state.input.value = ((state.output.value - 32) * (5/9)) + 273.15;
        }
        else {
            /* --- Kelvin to Fahrenheit --- */
            state.output.value = ((state.input.value - 273.15) * (9/5)) + 32;
        }
    }
}

export default new TemperatureCalculator();
import React from "react";
import "../css/distance-converter.css";
import DropDown from "./dropdown";

export default function TemperatureConverter(props) {

    const temperatureOptions = [{
        value : "c",
        label : "Celcius"
    }, {
        value : "f",
        label : "Fahrenheit"
    }, {
        value : "k",
        label : "Kelvin"
    }];
    
    function handleFocusIn(event) {
        if(!event.target.value || event.target.value === "0") {
            event.target.value = undefined;
        }
    }

    function handleFocusOut(event) {
        if(event.target.value.trim() === "") {
            event.target.value = "0";
        }
    }
    
    return (
        <React.Fragment>

            <div id="source" className="fields">

                <DropDown
                    options={temperatureOptions}
                    onChange={(event, selectedOption) => props.temperatureInputScaleChanged(selectedOption.value)}
                    selectedValue={props.temperature.input.scale}
                >
                </DropDown>

                <input id="source-input" type="number" 
                    placeholder="Enter value" 
                    onChange={(event) => {props.temperatureInputValueChanged(event.target.value)}} 
                    value={props.temperature.input.value}
                    onFocus={(event) => {handleFocusIn(event)}}
                    onBlur={(event) => {handleFocusOut(event)}}
                    tabIndex="2"
                >
                </input>
            </div>

            <div className="iswap rotate-90" onClick={(event) => props.handleSwap(event)}></div>

            <div id="destination" className="fields">

                <DropDown
                    options={temperatureOptions}
                    onChange={(event, selectedOption) => props.temperatureOutputScaleChanged(selectedOption.value)}
                    selectedValue={props.temperature.output.scale}
                >
                </DropDown>

                <input id="destination-input" type="number" 
                    placeholder="Enter value" 
                    onChange={(event) => {props.temperatureOutputValueChanged(event.target.value)}} 
                    value={props.temperature.output.value}
                    onFocus={(event) => {handleFocusIn(event)}}
                    onBlur={(event) => {handleFocusOut(event)}}
                    tabIndex="4"
                >
                </input>
            
            </div>
            
        </React.Fragment>
    );
}
import React from "react";
import "../css/distance-converter.css";
import DropDown from "./dropdown";

export default function DistanceCoverter(props) {

    const distanceOptions = [{
        value : "mm",
        label : "Millimeter"
    }, {
        value : "cm",
        label : "Centimeter"
    }, {
        value : "m",
        label : "Meter"
    }, {
        value : "km",
        label : "Kilometer"
    }];
    
    function handleFocus(event) {
        if(!event.target.value || event.target.value === "0") {
            event.target.value = undefined;
        }
    }

    return (
        <React.Fragment>

            <div id="source" className="fields">

                <DropDown
                    options={distanceOptions}
                    onChange={(event, selectedOption) => props.distanceInputScaleChanged(selectedOption.value)}
                    selectedValue={props.distance.input.scale}
                >
                </DropDown>

                <input id="source-input" type="number" 
                    placeholder="Enter value" 
                    onChange={(event) => {props.distanceInputValueChanged(event.target.value)}} 
                    value={props.distance.input.value}
                    onFocus={(event) => {handleFocus(event)}}
                    tabIndex="2"
                >
                </input>
            </div>

            <div className="iswap rotate-90" onClick={(event) => props.handleSwap(event)}></div>

            <div id="destination" className="fields">

                <DropDown
                    options={distanceOptions}
                    onChange={(event, selectedOption) => props.distanceOutputScaleChanged(selectedOption.value)}
                    selectedValue={props.distance.output.scale}
                >
                </DropDown>

                <input id="destination-input" type="number" 
                    placeholder="Enter value" 
                    onChange={(event) => {props.distanceOutputValueChanged(event.target.value)}} 
                    value={props.distance.output.value}
                    onFocus={(event) => {handleFocus(event)}}
                    tabIndex="4"
                >
                </input>
            
            </div>
            
        </React.Fragment>
    );
}
import React from 'react';
import "../css/converter.css";
import DropDown from "./dropdown";
import DistanceCoverter from "../../utils/distance-converter";

let distanceCoverter = new DistanceCoverter();

export default class Converter extends React.Component {

    constructor() {
        super();

        this.state = {
            source : "m",
            source_value : 0,
            destination : "km",
            destination_value : 0
        };
        
        this.distanceOptions = [{
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
    }

    handleSourceSelection(event, selectedOption) {
        this.setState({
            source: selectedOption.value
        });
        
        setTimeout(() => {
            this.handleSourceInput({
                target : document.getElementById("source-input")
            });
        }, 0);
    }

    handleDestSelection(event, selectedOption) {
        this.setState({
            destination : selectedOption.value
        });

        this.handleDestInput({
            target : document.getElementById("destination-input")
        });
    }

    handleSourceInput(event) {

        let convertedValues = distanceCoverter.convert(
            this.state.source, 
            event.target.value, //this.state.source_value
            this.state.destination,
            undefined
        );

        this.setState({
            source_value : convertedValues.source_value,
            destination_value : convertedValues.destination_value
        });
    }

    handleDestInput(event) {
        let convertedValues = distanceCoverter.convert(
            this.state.source, 
            undefined,
            this.state.destination,
            event.target.value //this.state.destination_value
        );

        this.setState({
            source_value : convertedValues.source_value,
            destination_value : convertedValues.destination_value
        });
    }

    handleFocus(event) {
        if(!event.target.value || event.target.value === "0") {
            event.target.value = undefined;
        }
    }

    render() {
        return (
            <React.Fragment>

                <div id="source" className="fields">

                    <DropDown
                        options={this.distanceOptions}
                        onChange={this.handleSourceSelection.bind(this)}
                        selectedValue="m"
                        selectedLabel="Meter"
                    >
                    </DropDown>

                    <input id="source-input" type="number" 
                        placeholder="Enter value" 
                        onChange={(event) => this.handleSourceInput(event)} 
                        value={this.state.source_value}
                        onFocus={(event) => {this.handleFocus(event)}}
                        tabIndex="2"
                    >
                    </input>
                </div>

                <div id="destination" className="fields">

                    <DropDown
                        options={this.distanceOptions}
                        onChange={this.handleDestSelection.bind(this)}
                        selectedValue="km"
                        selectedLabel="Kilometer"
                    >
                    </DropDown>

                    <input id="destination-input" type="number" 
                        placeholder="Enter value" 
                        onChange={(event) => this.handleDestInput(event)} 
                        value={this.state.destination_value}
                        onFocus={(event) => {this.handleFocus(event)}}
                        tabIndex="4"
                    >
                    </input>
                
                </div>
                
            </React.Fragment>
        );
    }
}

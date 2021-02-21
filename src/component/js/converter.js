import React from 'react';
import "../css/converter.css";
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
    }

    handleSourceSelection(event) {
        this.setState({
            source: event.target.value
        });
        
        setTimeout(() => {
            this.handleSourceInput({
                target : document.getElementById("source-input")
            });
        }, 0);
    }

    handleDestSelection(event) {
        this.setState({
            destination : event.target.value
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

                <div id="source">
                    <select name="distance" className="distance" 
                        value={this.state.source} 
                        onChange={(event) => this.handleSourceSelection(event)} 
                    >

                        <option value="mm">Millimeter</option>
                        <option value="cm">Centimeter</option>
                        <option value="m">Meter</option>
                        <option value="km">Kilometer</option>

                    </select>

                    <input id="source-input" type="number" 
                        placeholder="Enter value" 
                        onChange={(event) => this.handleSourceInput(event)} 
                        value={this.state.source_value}
                        onFocus={(event) => {this.handleFocus(event)}}
                    >
                    </input>
                </div>

                <div id="destination">

                    <select name="distance" className="distance" 
                        value={this.state.destination} 
                        onChange={(event) => {this.handleDestSelection(event)}}
                    >
                        <option value="mm">Millimeter</option>
                        <option value="cm" >Centimeter</option>
                        <option value="m">Meter</option>
                        <option value="km">Kilometer</option>

                    </select>

                    <input id="destination-input" type="number" 
                        placeholder="Enter value" 
                        onChange={(event) => this.handleDestInput(event)} 
                        value={this.state.destination_value}
                        onFocus={(event) => {this.handleFocus(event)}}
                    >
                    </input>
                
                </div>
                
            </React.Fragment>
        );
    }
}

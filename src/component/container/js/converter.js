import React from 'react';
import { connect } from 'react-redux';
import distanceAction from '../../../action/distance-action';
import temperatureAction from '../../../action/temperature-action';
import DistanceCoverter from '../../presentation/js/distance-converter';

class Converter extends React.Component {

    constructor() {
        super();
        
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

        setTimeout(() => {
            this.handleDestInput({
                target : document.getElementById("destination-input")
            });
        });
    }

    handleSwap(event) {
        let temp;

        temp = this.state.source;
        this.setState({
            source : this.state.destination,
            destination : temp
        });
        
        temp = this.state.source_value;
        this.setState({
            source_value : this.state.destination_value,
            destination_value : temp
        });
    }

    render() {
        switch(this.props.userProfile.defaultPage) {

            case "distance" : 
                return (
                    <DistanceCoverter
                        distance={this.props.distance}
                        distanceInputScaleChanged={this.props.distanceInputScaleChanged}
                        distanceOutputScaleChanged={this.props.distanceOutputScaleChanged}
                        distanceInputValueChanged={this.props.distanceInputValueChanged}
                        distanceOutputValueChanged={this.props.distanceOutputValueChanged}
                    >
                    </DistanceCoverter>
                );
            break;

            case "temperature" : 
                // return (
                //     <TemperatureConverter
                //         temperature={this.props.temperature}
                //         temperatureInputScaleChanged={this.props.temperatureInputScaleChanged}
                //         temperatureOutputScaleChanged={this.props.temperatureOutputScaleChanged}
                //         temperatureInputValueChanged={this.props.temperatureInputValueChanged}
                //         temperatureOutputValueChanged={this.props.temperatureOutputValueChanged}
                //     >
                //     </TemperatureConverter>
                // );
            break;
        }
    }
}

const mapStateToProps = (state) => {
  
    return {
        userProfile : state.userProfile,
        distance : state.distance
    };
};

const mapDispatchToProps = (dispatch) => {
    
    return {
        distanceInputScaleChanged : (newInputScale) => {
            dispatch(distanceAction.distanceInputScaleChanged(newInputScale));
        },

        distanceOutputScaleChanged : (newOutputScale) => {
            dispatch(distanceAction.distanceOutputScaleChanged(newOutputScale));
        },

        distanceInputValueChanged : (newInputValue) => {
            dispatch(distanceAction.distanceInputValueChanged(newInputValue));
        },

        distanceOutputValueChanged : (newOutputValue) => {
            dispatch(distanceAction.distanceOutputValueChanged(newOutputValue));
        },

        temperatureInputScaleChanged : (newInputScale) => {
            dispatch(temperatureAction.temperatureInputScaleChanged(newInputScale));
        },

        temperatureOutputScaleChanged : (newOutputScale) => {
            dispatch(temperatureAction.temperatureOutputScaleChanged(newOutputScale));
        },

        temperatureInputValueChanged : (newInputValue) => {
            dispatch(temperatureAction.temperatureInputValueChanged(newInputValue));
        },

        temperatureOutputValueChanged : (newOutputValue) => {
            dispatch(temperatureAction.temperatureOutputValueChanged(newOutputValue));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Converter);
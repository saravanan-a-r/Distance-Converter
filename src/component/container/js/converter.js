import React from 'react';
import { connect } from 'react-redux';
import distanceAction from '../../../action/distance-action';
import temperatureAction from '../../../action/temperature-action';
import DistanceCoverter from '../../presentation/js/distance-converter';
import TemperatureConverter from '../../presentation/js/temperature-converter';

class Converter extends React.Component {

    constructor() {
        super();
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
                        handleSwap={this.props.handleDistanceSwap}
                    >
                    </DistanceCoverter>
                );
            break;

            case "temperature" : 
                return (
                    <TemperatureConverter
                        temperature={this.props.temperature}
                        temperatureInputScaleChanged={this.props.temperatureInputScaleChanged}
                        temperatureOutputScaleChanged={this.props.temperatureOutputScaleChanged}
                        temperatureInputValueChanged={this.props.temperatureInputValueChanged}
                        temperatureOutputValueChanged={this.props.temperatureOutputValueChanged}
                        handleSwap={this.props.handleTemperatureSwap}
                    >
                    </TemperatureConverter>
                );
            break;
        }
    }
}

const mapStateToProps = (state) => {
  
    return {
        userProfile : state.userProfile,
        distance : state.distance,
        temperature : state.temperature
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

        handleDistanceSwap : () => {
            dispatch(distanceAction.handleDistanceSwap());
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
        },

        handleTemperatureSwap : () => {
            dispatch(temperatureAction.handleTemperatureSwap());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Converter);
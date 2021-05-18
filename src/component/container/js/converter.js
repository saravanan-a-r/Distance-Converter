import React from 'react';
import { connect } from 'react-redux';
import distanceAction from '../../../action/distance-action';
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
                //return (<TemperatureConverter></TemperatureConverter>);
            break;

            default : 
                return (<DistanceCoverter></DistanceCoverter>);
            break;
        }

        return (<div></div>);
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
        distanceInputScaleChanged : (value) => {
            dispatch(distanceAction.distanceInputScaleChanged(value));
        },
        distanceOutputScaleChanged : (value) => {
            dispatch(distanceAction.distanceOutputScaleChanged(value));
        },
        distanceInputValueChanged : (value) => {
            dispatch(distanceAction.distanceInputValueChanged(value));
        },
        distanceOutputValueChanged : (value) => {
            dispatch(distanceAction.distanceOutputValueChanged(value));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Converter);
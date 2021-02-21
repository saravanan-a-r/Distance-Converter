/* ---
    COMPONENT INPUT SCHEMA
    1. options : Array of Object<value, label>
--- */

import React from "react";
import "../css/dropdown.css";

export default class DropDown extends React.Component {

    constructor(props) {
        super();
        
        this.options = props.options;

        this.state = {
            showOptions : false
        };
    }

    getLabel(value) {
        let list = this.options;
        for(let i = 0; i < list.length; i++) {
            if(list[i].value === value) {
                return list[i].label;
            }
        }
        return null;
    }

    toggleOptions(event) {
        this.setState({
            showOptions : !this.state.showOptions
        });
    }

    handleOptionSelect(event, selectedOption) {
        this.setState({
            selectedOption : selectedOption
        });
        this.props.onChange(event, selectedOption);
    }

    render() {

        return (
            <div className="drop-down" onClick={(event) => {this.toggleOptions(event);}}>
                {this.getLabel(this.props.selectedValue)}
                <div className={"drop-down-options " + (this.state.showOptions ? "show" : "")}>
                    {
                        this.options.map((eachOption) => {
                            return (
                                <span key={eachOption.value} className="each-option" onClick={(event) => {this.handleOptionSelect(event, eachOption)}}>
                                    {eachOption.label}
                                </span>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}
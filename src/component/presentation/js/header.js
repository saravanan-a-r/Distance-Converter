import React from "react";
import '../css/header.css';

export default class Header extends React.Component {

    constructor() {
        super();

        this.sections = [{
            value : "distance",
            label : "Distance",
            selected : true
        }, {
            value : "temperature",
            label : "Temperature",
            selected : false
        }, {
            value : "distance",
            label : "Distance",
            selected : false
        }];
    }

    render() {
        return (
            <React.Fragment>
                <div className="home-logo"></div>
                <div id="convert-section">
                    <hr></hr>
                    {
                        this.sections.map(function(eachSection) {
                            return (
                                <div key={eachSection.value} className={"each-section " + (eachSection.selected ? "selected" : "")}>
                                    {eachSection.label}
                                </div>
                            );
                        })
                    }
                </div>
            </React.Fragment>
        );
    }
}

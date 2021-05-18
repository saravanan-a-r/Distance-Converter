import React from "react";
import { connect } from "react-redux";
import userProfileAction from "../../../action/userprofile-action";
import '../css/header.css';

class Header extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="home-logo"></div>
                <div id="convert-section">
                    <hr></hr>
                    <div key="distance" onClick={() => this.props.changeDefaultPage("distance")} className={"each-section " + (this.props.defaultPage === "distance" ? "selected" : "")}>
                        Distance
                    </div>
                    <div key="temperature" onClick={() => this.props.changeDefaultPage("temperature")} className={"each-section " + (this.props.defaultPage === "temperature" ? "selected" : "")}>
                        Temperature
                    </div>
                    <div key="distance2" onClick={() => this.props.changeDefaultPage("distance2")} className={"each-section " + (this.props.defaultPage === "distance2" ? "selected" : "")}>
                        Distance
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        defaultPage : state.userProfile.defaultPage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeDefaultPage : (newPage) => {
            dispatch(userProfileAction.changeDefaultPage(newPage));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
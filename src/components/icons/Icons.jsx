import React, { Component } from "react";
import './icons.scss';

class Icons extends Component  {

    constructor(props) {
        super();
        this.state = {
            openCloud:false,
            divClose:false
        };

        this.openCloud = this.openCloud.bind(this);
    }

    openCloud() {

        this.setState({openCloud: !this.state.openCloud})
        this.setState({divClose: !this.state.divClose})
    }

    render() {    

    return (
        <div className="divIcon">
           <div onClick={() => this.openCloud()}>
                <img width="90px" src={this.props.src}/>
            </div>
           <div className={`${this.state.openCloud ? "IconOpen" : "IconClose"}`}>   
           </div>
           <div onClick={() => this.openCloud()}
                className={`${this.state.divClose ? "backOpen" : "backClose"}`}>
           </div>
        </div>
        )
    };
}
export default Icons;
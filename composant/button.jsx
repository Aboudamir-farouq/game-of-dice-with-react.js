import React from "react";

class Button extends React.Component{
    constructor(props){
        super(props);
        this.state = {display: 1}
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    render(){
        return (
            <div className="button" id={this.props.id} onClick={this.props.onClick}>
                <p>{this.props.value}</p>
            </div>
        );
    }
}

export default Button;
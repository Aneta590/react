import React from "react";

class Box extends React.Component {

    render() {
        let maybeslider
        if (this.props.icon !== "local_drink") {
            maybeslider = <input type="range" min={this.props.min} max={this.props.max} onChange={this.props.onChange} />

        }

        return (

            <div className="box col-sm-3 col-6">
                <span className="material-icons" style={{ fontSize: 100, color: this.props.color }}>
                    {this.props.icon}
                </span>
                <p>{this.props.value}  {this.props.unit}  </p>
                {maybeslider}

            </div>
        )
    }
}


export default Box
import React from "react";

class Result extends React.Component{
    render(){
        return (
            <div id="result">
                <table>
                    <tr>
                        <td>Face : </td>
                        <td>{this.props.face}</td>
                    </tr>
                    <tr>
                        <td>Nombre d'essai : </td>
                        <td>{this.props.essai}</td>
                    </tr>
                </table>
                <div id="message">
                    <p>{this.props.message}</p>
                </div>
            </div>
        )
    }
}

export default Result;
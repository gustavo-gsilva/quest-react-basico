import React, { Component } from "react";
import './style.css';

class Button extends Component {
    handleClick = () => {
        alert("A label desse botão é Baixar CV");
    };

    render() {

        return (
            <>
                <button className="botao" onClick={this.handleClick}>Clique para baixar</button>
            </>
        )
    }
};

export default Button;
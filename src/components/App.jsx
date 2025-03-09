import React, { Component } from "react";
import Button from "./button";

class App extends Component {
    render() {
        const estilo = {
            color: "hsl(224, 23%, 55%)",
            textTransform: "uppercase",
        }

        return (
            <>
                <Texto style={estilo} />
            </>
        )
    }
};

class Texto extends Component {
    render() {

        return (
            <>
                <div className="container">
                    <div className="container-paragrafo">
                        <h2 className="titulo">Currículo</h2>

                        <p
                            className="paragrafo" style={this.props.style}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia aperiam eligendi porro nostrum nemo maiores modi fugit vel nihil possimus repellendus asperiores error, est vitae atque in repudiandae quam accusamus. Quisquam reprehenderit voluptatem quasi, esse architecto perferendis laboriosam fugiat ab suscipit molestias numquam odio, ex delectus tempora cupiditate vero nulla nisi. Est impedit aspernatur beatae deleniti officia quas doloribus neque debitis, praesentium, deserunt excepturi quae.
                        </p>
                    </div>

                    <div className="container-button">
                        <label style={this.props.style}>Baixar CV:</label>

                        <Button />
                    </div>
                </div>
            </>
        )
    }
};

export default App;
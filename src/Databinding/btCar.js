import React, { Component } from 'react'

export default class BtCar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            image: "/imgCar/imgBlackCar.jpg",
        }
    }
    // changeRed =() => {
    //     this.setState({
    //         image: "/imgCar/imgRedCar.jpg",
    //     })
    // }
    // changeSilver =() => {
    //     this.setState({
    //         image: "/imgCar/imgSilverCar.jpg",
    //     })
    // }
    // changeBlack =() => {
    //     this.setState({
    //         image: "/imgCar/imgBlackCar.jpg",
    //     })
    // }
    change = (color) => {
        switch (color) {
            case "red":
                this.setState({
                    image: "/imgCar/imgRedCar.jpg",
                });
                break;
            case "silver":
                this.setState({
                    image: "/imgCar/imgSilverCar.jpg",
                });
                break;
            case "black":
                this.setState({
                    image: "/imgCar/imgBlackCar.jpg",
                });
                break;
        }
    }
    render() {
        return (
            <div >
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <p>Please choose your favorite about car's color</p>
                            <img src={this.state.image} width="100%"></img>
                        </div>
                        <div className="col-6 text-center">
                            <p>Change color</p>
                            <button className="btn btn-danger mx-3" onClick={() => this.change("red")} >
                                Red color
                            </button>
                            <button className="btn btn-secondary mx-3" onClick={() => this.change("silver")}>
                                Silver
                            </button>
                            <button className="btn btn-dark mx-3" onClick={() => this.change("black")}>
                                Black
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

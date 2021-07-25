import "./Loading.css"
import React, { Component } from 'react'
export default class Loading extends Component {
    constructor(props) {
        super(props);
        console.log("constructor");

        this.state = { step: 0, color: "red" }
    }

    componentDidMount() {
        console.log("componentDidMount");

        this.timer = setInterval(() => {
            this.state.step < 100 && this.setState((state) => {
                return { step: state.step + 1 }
            })
        }, 100);
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");

        if (this.state.step > 10 && this.state.step <= 15 && this.state.color != "#ff0000") {
            this.setState((state) => {
                return { color: '#ff0000'}
            })
        }
        if (this.state.step > 15 && this.state.step <= 20 && this.state.color != "#ff5000") {
            this.setState((state) => {
                return { color: '#ff5000'}
            })
        }
        if (this.state.step > 20 && this.state.step <= 25 && this.state.color != "#ff7000") {
            this.setState((state) => {
                return { color: '#ff7000'}
            })
        }
        if (this.state.step > 25 && this.state.step <= 30 && this.state.color != "#ff9000") {
            this.setState((state) => {
                return { color: '#ff9000'}
            })
        }
        if (this.state.step > 30 && this.state.step <= 35 && this.state.color != "#ffb000") {
            this.setState((state) => {
                return { color: "#ffb000" }
            })
        }
        if (this.state.step > 35 && this.state.step <= 40 && this.state.color != "#ffe000") {
            this.setState((state) => {
                return { color: "#ffe000" }
            })
        }
        if (this.state.step > 40 && this.state.step <= 45 && this.state.color != "#dff000") {
            this.setState((state) => {
                return { color: "#dff000" }
            })
        }
        if (this.state.step > 45 && this.state.step <= 50 && this.state.color != "#9ff000") {
            this.setState((state) => {
                return { color: "#9ff000" }
            })
        }
        if (this.state.step > 50 && this.state.step <= 55 && this.state.color != "#5ff000") {
            this.setState((state) => {
                return { color: "#5ff000" }
            })
        }
        if (this.state.step > 55 && this.state.step <= 60 && this.state.color != "#10d000") {
            this.setState((state) => {
                return { color: "#10d000" }
            })
        }
        if (this.state.step > 60 && this.state.step <= 65 && this.state.color != "#10b000") {
            this.setState((state) => {
                return { color: "#10b000" }
            })
        }
        if (this.state.step > 65 && this.state.step <= 70 && this.state.color != "#009000") {
            this.setState((state) => {
                return { color: "#009000" }
            })
        }
        if (this.state.step > 70 && this.state.step <= 75 && this.state.color != "#007000") {
            this.setState((state) => {
                return { color: "#007000" }
            })
        }
        if (this.state.step > 75 && this.state.step <= 80 && this.state.color != "#006000") {
            this.setState((state) => {
                return { color: "#006000" }
            })
        }
        if (this.state.step > 80 && this.state.step <= 85 && this.state.color != "#005000") {
            this.setState((state) => {
                return { color: "#005000" }
            })
        }
        if (this.state.step > 85 && this.state.step <= 90 && this.state.color != "#004000") {
            this.setState((state) => {
                return { color: "#004000" }
            })
        }
        else if (this.state.step > 90 && this.state.color != "#004000") {
            this.setState((state) => {
                return { color: "#004000" }
            })
        }
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");

        clearInterval(this.timer)
    }

    render() {
        console.log("render");
        return (
            <div className="loadingPanel">
                <div className="loading" style={{ backgroundColor: this.state.color, width: `${this.state.step}%` }}>{this.state.step}%</div>
            </div>

        )
    }
}
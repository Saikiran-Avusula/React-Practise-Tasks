import { Component } from "react";

class Counter extends Component {
    // we creating the state
    state = {
        count: 0
    }
    incHandler = () => {
        this.setState({
            count: this.state.count + 1
        }, () => { })
    }
    decHandler = () => {
        this.setState({
            count: this.state.count - 1
        }, () => { })
    }
    resetHandler = () => {
        this.setState({
            count: 0
        }, () => { })
    }
    render() {
        return (
            <>
                <h2>Counter {this.state.count}</h2>  {/*here, we using state */}
                <button onClick={this.incHandler}>Increment</button>
                <button onClick={this.resetHandler}>Reset</button>
                <button onClick={this.decHandler}>Decrement</button>

            </>
        );
    }
}

export default Counter
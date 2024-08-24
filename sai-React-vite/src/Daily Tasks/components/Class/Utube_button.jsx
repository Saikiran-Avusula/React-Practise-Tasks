{/* on 22 august creating a class based components*/ }

import { Component } from "react" //importing from react 
import { ClipLoader, ScaleLoader } from "react-spinners"
import Counter from "./counter"

class UtubeBtn extends Component {
    // state creation 
    state = {
        isSubscribe: false,
        text1: "Subscribe",
        text2: "Subscribed"
    }

    // creating a method to use in function inside --> we call it has method (because it is Class Component)
    clickHandler = () => {
        // alert("Namate kaka! edi pani chesthundi")

        // to change the state chnages must havr=e to use this.setState method. not by directly re-assigned, changes will be not rendered
        // if in case we use UI will be not updated i.e., this.state.isSubscribe=true
        this.setState({
            isSubscribe: !this.state.isSubscribe
        },
            () => { }) //function is an optional 
    }
    render() {
        return (
            <>
                <button onClick={this.clickHandler}> {this.state.isSubscribe ? this.state.text2 : this.state.text1}</button>
                {
                    this.state.isSubscribe ? <div>
                        <Counter />
                        <br />
                        <br />
                        <ClipLoader />
                        <ScaleLoader />
                    </div> : <div>Please do subscribe to access content</div>
                }
            </>
        )

    }
}

export default UtubeBtn //state we using it 
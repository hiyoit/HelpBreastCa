import React from "react";
import "./Timer.css"

class Timer extends React.Component {

    add = () => {

    }

    render(){
        let counter = 0
        return (
            <div className="Timer-contain">
                <h1>{counter}</h1>
                <button className="Timer-add">+</button>
                <button className="Timer-subtract">-</button>
            </div>
        )
    }
}

export default Timer;
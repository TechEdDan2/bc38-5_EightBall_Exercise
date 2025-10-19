import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import responses from "../assets/responses.json";

/**
 * 
 * This component renders a Magic Eight Ball that provides random answers to questions. 
 * 
 * @param {*} props  
 * @returns 
 */
const EightBall = (props) => {
    const startState = { msg: "Think of a Question", color: "black" }
    const [ballState, setBallState] = useState(startState);

    const handleClick = () => {
        const randomBallResponse = responses[Math.floor(Math.random() * responses.length)];
        setBallState(randomBallResponse);
    }

    return (
        <>
            <div
                className="EightBall bbh-sans-bogle-regular"
                style={{ backgroundColor: ballState.color }}
                onClick={handleClick}
            >
                <div className="EightBall-text">{ballState.msg}</div>
            </div>

        </>
    )
}

export default EightBall;
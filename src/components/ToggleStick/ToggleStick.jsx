import { Joystick } from "react-joystick-component";
import { useMemo, useRef, useState } from "react";

function ToggleStick({
    move,
    start,
    stop,
    opactiy = 1.0,
    className
}) {
    const [containerDiv, setContainerDiv] = useState();
    // the container will always fill it's parent
    const containerStyle = useRef({
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
        justifyContent: "center"
    }).current;
    const baseColor = useMemo(
        () =>
            `radial-gradient(circle at 50% 50%, rgba(100,100,100,${opactiy}), rgba(100,100,100,${opactiy}), rgba(100,100,100,${opactiy}),  rgba(5,5,5,${opactiy}))`,
        [opactiy]
    );
    const stickColor = useMemo(
        () =>
            `radial-gradient(circle at 50% 50%, rgba(70,70,70,${opactiy}), rgba(70,70,70,${opactiy}), rgba(5,5,5,${opactiy}))`,
        [opactiy]
    );
    return (
        <div ref={setContainerDiv} style={containerStyle} className={className}>
            {containerDiv ? (
                <Joystick
                    // we are assuming that the container dimensions will never change in the lifetime of this component
                    size={Math.min(containerDiv.offsetWidth, containerDiv.offsetHeight)}
                    //Optional component props:
                    baseColor={baseColor}
                    stickColor={stickColor}
                    //Throttle the rate of the move
                    throttle={200}
                    move={move}
                    stop={stop}
                    start={start}
                    //min distance to receive an event
                    minDistance={50}
                />
            ) : null}
        </div>
    );
}

export default function App() {
    //based on where it is pointing on a grid determines what direction its going. ex// x and y being a negative number means its going backwards.
    const handleMove = (e) => {
        console.log(e);
        if (e.direction === 'FORWARD') {
            console.log("Foward")
            setTimeout(() => {
                window.location.href = "https://www.youtube.com/channel/UCC6VdgJANZFwWexul6jGVag";
            }, 1000);
        }
        else if (e.direction === 'LEFT') {
            console.log("Left")
            setTimeout(() => {
                window.location.href = "https://twitter.com/vontiban";
            }, 1000);
        }
        else if (e.direction === 'RIGHT') {
            console.log("Right")
            setTimeout(() => {
                window.location.href = "https://discord.gg/G6PT5GkpYE";
            }, 1000);
        }
        else if (e.direction === 'BACKWARD') {
            console.log("Backward")
            setTimeout(() => {
                window.location.href = "https://www.twitch.tv/vontiban";
            }, 1000);
        }
    };
    const handleStop = (e) => {
        console.log(e);
    };
    const handleStart = (e) => {
        console.log(e);
    };


    return (
        <div className="App">
            <div className="controller-container">
                <ToggleStick
                    opactiy={1}
                    move={handleMove}
                    stop={handleStop}
                    start={handleStart}
                />
            </div>
        </div>
    );
}

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
                    baseColor={baseColor}
                    stickColor={stickColor}
                    throttle={200}
                    move={move}
                    stop={stop}
                    start={start}
                />
            ) : null}
        </div>
    );
}

export default function App() {
    const handleMove = (e) => {
        console.log(e);
    };
    const handleStop = (e) => {
        console.log(e);
    };
    const handleStart = (e) => {
        console.log(e);
    };

    return (
        <div className="App">
            <h1>Joystick</h1>

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

import "./intro.scss";
import {init} from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current,{
            showCursor: false,
            backDelay: 1500,
            showCursor: true,
            backspeed: 60,
            strings: ["Developer", "Writer", "Designer"],


        })

    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There! I'am</h2>
                    <h1>Sharayu</h1>
                    <h3>Good <span ref={textRef}> </span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt=""/>
                </a>
            </div>
            
        </div>
    )
}

import React, {useEffect, useState} from "react";
import "./Main.css";
import Board from "../board/Board";
import Dices from "../dices/Dices";
import {Players} from "../../helpers/players/Players";

let p1, p2, p3, p4;

function Main() {

    const [p1, setP1] = useState(new Players("red", true, [-11,-12,-13,-14], 'marker1.png', 1, true, true))
    const [p2, setP2] = useState(new Players("blue", false, [-21,-22,-23,-24], 'marker2.png', 1, false, true))
    const [p3, setP3] = useState(new Players("yellow", false, [-41,-42,-43,-44], 'marker3.png', 1, false, true))
    const [p4, setP4] = useState(new Players("green", false, [-31,-32,-33,-34], 'marker4.png', 1, false, true))

    console.log(p1)
    return (
        <div className="main-div1">
            <div className="outer">
                <Dices pl1={p1} pl2={p2} pl3={p3} pl4={p4} setpl1={setP1} setpl2={setP2} setpl3={setP3} setpl4={setP4}/>
                <Board pl1={p1} pl2={p2} pl3={p3} pl4={p4} setpl1={setP1} setpl2={setP2} setpl3={setP3} setpl4={setP4}/>
            </div>
        </div>
    );
}

export default Main;

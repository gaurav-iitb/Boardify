import "./Board.css";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import {useEffect, useRef, useState} from "react";
import {Players} from "../../helpers/players/Players";

let player1, player2, player3, player4;

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

let mySound = new sound("pawnMove.mp3");

function Board(props) {

    console.log("outside ", props.pl1);

    player1 = props.pl1;
    player2 = props.pl2;
    player3 = props.pl3;
    player4 = props.pl4;


    function PositionHandler(curr_pos, stepsAdd, playerId) {
        let new_pos = curr_pos + stepsAdd, steps;

        if (Math.trunc(curr_pos / 100) > 0) {
            if (playerId === "pl1") {
                if (new_pos === 516) return 516;  // marker is already at winning position at the center
                else if (new_pos > 516) return curr_pos;
                else return new_pos;
            } else if (playerId === "pl2") {
                if (new_pos === 126) return 126;  // marker is already at winning position at the center
                else if (new_pos > 126) return curr_pos;
                else return new_pos;
            } else if (playerId === "pl3") {
                if (new_pos === 256) return 256;  // marker is already at winning position at the center
                else if (new_pos > 256) return curr_pos;
                else return new_pos;
            } else if (playerId === "pl4") {
                if (new_pos === 386) return 386;  // marker is already at winning position at the center
                else if (new_pos > 386) return curr_pos;
                else return new_pos;
            }
        }


        if (playerId === "pl1" && new_pos > 51) {  // red marker
            steps = new_pos - 51;
            new_pos = 510 + steps;
        } else if (playerId === "pl2" && new_pos > 12 && curr_pos <= 12) {  // blue marker
            steps = new_pos - 12;
            new_pos = 120 + steps;
        } else if (playerId === "pl3" && new_pos > 25 && curr_pos <= 25) {  // yellow marker
            steps = new_pos - 25;
            new_pos = 250 + steps;
        } else if (playerId === "pl4" && new_pos > 38 && curr_pos <= 38) {  // green marker
            steps = new_pos - 38;
            new_pos = 380 + steps;
        } else if (new_pos > 52) {
            new_pos -= 52;
        }
        return new_pos;
    }

    function UpdatePlayer1(player, curr_id, new_position, isLocked) {
        let m1 = player.markers.m1.position;
        let m2 = player.markers.m2.position;
        let m3 = player.markers.m3.position;
        let m4 = player.markers.m4.position;
        if (curr_id === "pl1m1") props.setpl1(new Players("red", false, [new_position, m2, m3, m4], 'marker1.png', 1, false, isLocked));
        else if (curr_id === "pl1m2") props.setpl1(new Players("red", false, [m1, new_position, m3, m4], 'marker1.png', 1, false, isLocked));
        else if (curr_id === "pl1m3") props.setpl1(new Players("red", false, [m1, m2, new_position, m4], 'marker1.png', 1, false, isLocked));
        else if (curr_id === "pl1m4") props.setpl1(new Players("red", false, [m1, m2, m3, new_position], 'marker1.png', 1, false, isLocked));

        props.setpl2(new Players("blue", true, [player2.markers.m1.position, player2.markers.m2.position, player2.markers.m3.position, player2.markers.m4.position], 'marker2.png', 1, true, player2.isLocked))
    }

    function UpdatePlayer2(player, curr_id, new_position, isLocked) {
        let m1 = player.markers.m1.position;
        let m2 = player.markers.m2.position;
        let m3 = player.markers.m3.position;
        let m4 = player.markers.m4.position;
        if (curr_id === "pl2m1") props.setpl2(new Players("blue", false, [new_position, m2, m3, m4], 'marker2.png', 1, false, isLocked))
        else if (curr_id === "pl2m2") props.setpl2(new Players("blue", false, [m1, new_position, m3, m4], 'marker2.png', 1, false, isLocked))
        else if (curr_id === "pl2m3") props.setpl2(new Players("blue", false, [m1, m2, new_position, m4], 'marker2.png', 1, false, isLocked))
        else if (curr_id === "pl2m4") props.setpl2(new Players("blue", false, [m1, m2, m3, new_position], 'marker2.png', 1, false, isLocked))

        props.setpl3(new Players("yellow", true, [player3.markers.m1.position, player3.markers.m2.position, player3.markers.m3.position, player3.markers.m4.position], 'marker3.png', 1, true, player3.isLocked))
    }

    function UpdatePlayer3(player, curr_id, new_position, isLocked) {
        let m1 = player.markers.m1.position;
        let m2 = player.markers.m2.position;
        let m3 = player.markers.m3.position;
        let m4 = player.markers.m4.position;
        if (curr_id === "pl3m1") props.setpl3(new Players("yellow", false, [new_position, m2, m3, m4], 'marker3.png', 1, false, isLocked))
        else if (curr_id === "pl3m2") props.setpl3(new Players("yellow", false, [m1, new_position, m3, m4], 'marker3.png', 1, false, isLocked))
        else if (curr_id === "pl3m3") props.setpl3(new Players("yellow", false, [m1, m2, new_position, m4], 'marker3.png', 1, false, isLocked))
        else if (curr_id === "pl3m4") props.setpl3(new Players("yellow", false, [m1, m2, m3, new_position], 'marker3.png', 1, false, isLocked))

        props.setpl4(new Players("green", true, [player4.markers.m1.position, player4.markers.m2.position, player4.markers.m3.position, player4.markers.m4.position], 'marker4.png', 1, true, player4.isLocked))
    }

    function UpdatePlayer4(player, curr_id, new_position, isLocked) {
        let m1 = player.markers.m1.position;
        let m2 = player.markers.m2.position;
        let m3 = player.markers.m3.position;
        let m4 = player.markers.m4.position;
        if (curr_id === "pl4m1") props.setpl4(new Players("green", false, [new_position, m2, m3, m4], 'marker4.png', 1, false, isLocked))
        else if (curr_id === "pl4m2") props.setpl4(new Players("green", false, [m1, new_position, m3, m4], 'marker4.png', 1, false, isLocked))
        else if (curr_id === "pl4m3") props.setpl4(new Players("green", false, [m1, m2, new_position, m4], 'marker4.png', 1, false, isLocked))
        else if (curr_id === "pl4m4") props.setpl4(new Players("green", false, [m1, m2, m3, new_position], 'marker4.png', 1, false, isLocked))

        props.setpl1(new Players("red", true, [player1.markers.m1.position, player1.markers.m2.position, player1.markers.m3.position, player1.markers.m4.position], 'marker1.png', 1, true, player1.isLocked))
    }


    // This is the main function where all the logic will reside of hwo the markers should move on the roll of dice.
    function handler(e) {
        let curr_id = e.target.id;
        let parent_id;
        if (e.target.parentElement) parent_id = e.target.parentElement.id;
        console.log("ID IS", curr_id)
        console.log("PARENT ID IS", parent_id)

        console.log("inside ", player1)
        // when marker is in the home zone
        if (parent_id < 0) {
            if (curr_id.substring(0, 3) === "pl1") {
                if (player1.isActive) {
                    if (player1.diceValue === 6) {
                        removeMarker(parent_id, curr_id, "marker1");
                        addMarker(1, curr_id, "marker1");
                        UpdatePlayer1(player1, curr_id, 1, false);
                        mySound.play();
                    }
                    else{
                        UpdatePlayer1(player1, curr_id, parent_id, true);
                    }
                }
            } else if (curr_id.substring(0, 3) === "pl2") {
                if (player2.isActive) {
                    if (player2.diceValue === 6) {
                        removeMarker(parent_id, curr_id, "marker1");
                        addMarker(14, curr_id, "marker2");
                        UpdatePlayer2(player2, curr_id, 14, false);
                        mySound.play();
                    }
                    else{
                        UpdatePlayer2(player2, curr_id, parent_id, true);
                    }
                }

            } else if (curr_id.substring(0, 3) === "pl3") {
                if (player3.isActive) {
                    if (player3.diceValue === 6) {
                        removeMarker(parent_id, curr_id, "marker1");
                        addMarker(27, curr_id, "marker3");
                        UpdatePlayer3(player3, curr_id, 27, false);
                        mySound.play();
                    }
                    else{
                        UpdatePlayer3(player3, curr_id, parent_id, true);
                    }
                }
            } else if (curr_id.substring(0, 3) === "pl4") {
                if (player4.isActive) {
                    if (player4.diceValue === 6) {
                        removeMarker(parent_id, curr_id, "marker1");
                        addMarker(40, curr_id, "marker4");
                        UpdatePlayer4(player4, curr_id, 40, false);
                        mySound.play();
                    }
                    else{
                        UpdatePlayer4(player4, curr_id, parent_id, true);
                    }
                }
            }
        } else if (parent_id > 0) {         // handles the case when marker is in the playing area
            if (curr_id.substring(0, 3) === "pl1" && player1.isActive) {
                let new_position = PositionHandler(Number(parent_id), player1.diceValue, "pl1");
                console.log("new pos is ", new_position)
                removeMarker(parent_id, curr_id, "marker1");
                addMarker(new_position, curr_id, "marker1");

                UpdatePlayer1(player1, curr_id, new_position, false);

                // console.log("markers ", player2.markers)


            } else if (curr_id.substring(0, 3) === "pl2" && player2.isActive) {
                let new_position = PositionHandler(Number(parent_id), player2.diceValue, "pl2");
                removeMarker(parent_id, curr_id, "marker2");
                addMarker(new_position, curr_id, "marker2")

                UpdatePlayer2(player2, curr_id, new_position, false);

                // console.log("markers ", player3.markers)


            } else if (curr_id.substring(0, 3) === "pl3" && player3.isActive) {
                let new_position = PositionHandler(Number(parent_id), player3.diceValue, "pl3");
                removeMarker(parent_id, curr_id, "marker3");
                addMarker(new_position, curr_id, "marker3")

                UpdatePlayer3(player3, curr_id, new_position, false);

                // console.log("markers ", player3.markers)


            } else if (curr_id.substring(0, 3) === "pl4" && player4.isActive) {
                let new_position = PositionHandler(Number(parent_id), player4.diceValue, "pl4");
                removeMarker(parent_id, curr_id, "marker4");
                addMarker(new_position, curr_id, "marker4")

                UpdatePlayer4(player4, curr_id, new_position, false);

                // console.log("markers ", player3.markers)
            }
            mySound.play();
        }
    }

    function doesNotContainImage(id, eleId) {
        const divElement = document.getElementById(id);
        const containsImage = divElement && divElement.querySelector(`#${eleId}`) !== null;
        return !containsImage;
    }

    function doesContainImage(id, eleId) {
        const divElement = document.getElementById(id);
        const containsImage = divElement && divElement.querySelector(`#${eleId}`) !== null;
        return containsImage;
    }

    function addMarker(id, eleId, markerName) {
        if (doesNotContainImage(id, eleId)) {
            if (document.getElementById(id)) document.getElementById(id).innerHTML += `<img class="marker" id=${eleId} src="${markerName}.png" alt="" />`;
            const markerImg = document.getElementById(eleId);
            if (markerImg) {
                markerImg.addEventListener("click", handler);
            }
        }
    }

    function removeMarker(id, eleId, markerName) {

        if (doesContainImage(id, eleId)) {
            const divElement = document.getElementById(id);
            divElement.removeChild(divElement.querySelector(`#${eleId}`))
        }
    }

    useEffect(() => {

        addMarker(`${props.pl1.markers.m1.position}`, "pl1m1", "marker1");

        addMarker(`${props.pl1.markers.m2.position}`, "pl1m2", "marker1");

        addMarker(`${props.pl1.markers.m3.position}`, "pl1m3", "marker1");

        addMarker(`${props.pl1.markers.m4.position}`, "pl1m4", "marker1");

    }, [])

    useEffect(() => {

        addMarker(`${props.pl2.markers.m1.position}`, "pl2m1", "marker2");

        addMarker(`${props.pl2.markers.m2.position}`, "pl2m2", "marker2");

        addMarker(`${props.pl2.markers.m3.position}`, "pl2m3", "marker2");

        addMarker(`${props.pl2.markers.m4.position}`, "pl2m4", "marker2");

    }, [])

    useEffect(() => {

        addMarker(`${props.pl3.markers.m1.position}`, "pl3m1", "marker3");

        addMarker(`${props.pl3.markers.m2.position}`, "pl3m2", "marker3");

        addMarker(`${props.pl3.markers.m3.position}`, "pl3m3", "marker3");

        addMarker(`${props.pl3.markers.m4.position}`, "pl3m4", "marker3");

    }, [])

    useEffect(() => {

        addMarker(`${props.pl4.markers.m1.position}`, "pl4m1", "marker4");

        addMarker(`${props.pl4.markers.m2.position}`, "pl4m2", "marker4");

        addMarker(`${props.pl4.markers.m3.position}`, "pl4m3", "marker4");

        addMarker(`${props.pl4.markers.m4.position}`, "pl4m4", "marker4");

    }, [])


    // const [Red1, SetRed1] = useState({
    //     color: "red",
    //     ref: img11,
    //     path: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 100, 101, 102, 103, 104, 'win'],
    //     current_position: -1,
    //     locked: true,
    //     current_step: null,
    //     resetplayer: function () {
    //         this.current_position = -11;
    //         this.status = "home";
    //         this.previous_step = null;
    //     },
    //     previous_step: -1,
    //     home: ".red-home",
    // })


    // useEffect(() => {
    //     if (props.diceval1 == 6) {
    //         if (Red1.status == 'home') {
    //             SetRed1({
    //                 ...Red1,
    //                 ["locked"]: false,
    //                 ["previous_step"]: Red1.current_position,
    //                 ["current_position"]: 0,
    //             });
    //         }
    //     }
    // }, [props.diceval1])


    return (
        <div className="board">
            <div className="upper-part">
                <div className="block1">
                    <div className="inner_block1">
                        <div className="contain">
                            <div

                                id="-11"
                                className="inner-circle1"
                            ></div>
                            <div

                                id="-12"
                                className="inner-circle1"
                            ></div>
                        </div>
                        <div className="contain">
                            <div

                                id="-13"
                                className="inner-circle1"
                            ></div>
                            <div

                                id="-14"
                                className="inner-circle1"
                            ></div>
                        </div>
                    </div>
                </div>
                <div className="path-up">
                    <div className="row-path">
                        <div id="11" className="path-blocks"></div>
                        <div id="12" className="path-blocks">
                            <ArrowDownwardIcon fontSize="large" className="ar-1"/>
                        </div>
                        <div id="13" className="path-blocks"></div>
                    </div>
                    <div className="row-path">
                        <div id="10" className="path-blocks"></div>
                        <div id="121" className="path-blocks sp1"></div>
                        <div

                            id="14"
                            className="path-blocks sp1"
                        ></div>
                    </div>
                    <div className="row-path">
                        <div id="9" className="path-blocks">
                            <StarOutlineIcon fontSize="large"/>
                        </div>
                        <div id="122" className="path-blocks sp1"></div>
                        <div id="15" className="path-blocks"></div>
                    </div>
                    <div className="row-path">
                        <div id="8" className="path-blocks"></div>
                        <div id="123" className="path-blocks sp1"></div>
                        <div id="16" className="path-blocks"></div>
                    </div>
                    <div className="row-path">
                        <div id="7" className="path-blocks"></div>
                        <div id="124" className="path-blocks sp1"></div>
                        <div id="17" className="path-blocks"></div>
                    </div>
                    <div className="row-path">
                        <div id="6" className="path-blocks"></div>
                        <div id="125" className="path-blocks sp1"></div>
                        <div id="18" className="path-blocks"></div>
                    </div>
                </div>
                <div className="block2">
                    <div className="inner_block1">
                        <div className="contain">
                            <div id="-21" className="inner-circle2"></div>
                            <div

                                id="-22"
                                className="inner-circle2"
                            ></div>
                        </div>
                        <div className="contain">
                            <div

                                id="-23"
                                className="inner-circle2"
                            ></div>
                            <div

                                id="-24"
                                className="inner-circle2"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="middle-part">
                <div className="left-part">
                    <div className="row-path">
                        <div id="52" className="path-blocks"></div>
                        <div id="1" className="path-blocks sp2"></div>
                        <div id="2" className="path-blocks"></div>
                        <div id="3" className="path-blocks"></div>
                        <div id="4" className="path-blocks"></div>
                        <div id="5" className="path-blocks"></div>
                    </div>
                    <div className="row-path">
                        <div id="51" className="path-blocks">
                            <ArrowForwardIcon className="ar-2" fontSize="large"/>
                        </div>
                        <div id="511" className="path-blocks sp2"></div>
                        <div id="512" className="path-blocks sp2"></div>
                        <div id="513" className="path-blocks sp2"></div>
                        <div id="514" className="path-blocks sp2"></div>
                        <div id="515" className="path-blocks sp2"></div>
                    </div>
                    <div className="row-path">
                        <div id="50" className="path-blocks"></div>
                        <div id="49" className="path-blocks"></div>
                        <div id="48" className="path-blocks">
                            <StarOutlineIcon fontSize="large"/>
                        </div>
                        <div id="47" className="path-blocks"></div>
                        <div id="46" className="path-blocks"></div>
                        <div id="45" className="path-blocks"></div>
                    </div>
                </div>
                <div className="center-part">
                    <div id="256" className="arrow-left"></div>
                    <div id="386" className="arrow-up"></div>
                    <div id="516" className="arrow-right"></div>
                    <div id="126" className="arrow-down"></div>
                </div>
                <div className="right-part">
                    <div className="row-path">
                        <div id="19" className="path-blocks"></div>
                        <div id="20" className="path-blocks"></div>
                        <div id="21" className="path-blocks"></div>
                        <div id="22" className="path-blocks">
                            <StarOutlineIcon fontSize="large"/>
                        </div>
                        <div id="23" className="path-blocks"></div>
                        <div id="24" className="path-blocks"></div>
                    </div>
                    <div className="row-path">
                        <div id="255" className="path-blocks sp4"></div>
                        <div id="254" className="path-blocks sp4"></div>
                        <div id="253" className="path-blocks sp4"></div>
                        <div id="252" className="path-blocks sp4"></div>
                        <div id="251" className="path-blocks sp4"></div>
                        <div id="25" className="path-blocks">
                            <ArrowBackIcon className="ar-3" fontSize="large"/>
                        </div>
                    </div>
                    <div className="row-path">
                        <div id="31" className="path-blocks"></div>
                        <div id="30" className="path-blocks"></div>
                        <div id="29" className="path-blocks"></div>
                        <div id="28" className="path-blocks"></div>
                        <div

                            id="27"
                            className="path-blocks sp4"
                        ></div>
                        <div id="26" className="path-blocks"></div>
                    </div>
                </div>
            </div>
            <div className="bottom-part">
                <div className="block3">
                    <div className="inner_block1">
                        <div className="contain">
                            <div

                                id="-31"
                                className="inner-circle3"
                            ></div>
                            <div

                                id="-32"
                                className="inner-circle3"
                            ></div>
                        </div>
                        <div className="contain">
                            <div

                                id="-33"
                                className="inner-circle3"
                            ></div>
                            <div

                                id="-34"
                                className="inner-circle3"
                            ></div>
                        </div>
                    </div>
                </div>
                <div className="path-bot">
                    <div className="row-path">
                        <div id="44" className="path-blocks"></div>
                        <div id="385" className="path-blocks sp3"></div>
                        <div id="32" className="path-blocks"></div>
                    </div>
                    <div className="row-path">
                        <div id="43" className="path-blocks"></div>
                        <div id="384" className="path-blocks sp3"></div>
                        <div id="33" className="path-blocks"></div>
                    </div>
                    <div className="row-path">
                        <div id="42" className="path-blocks"></div>
                        <div id="383" className="path-blocks sp3"></div>
                        <div id="34" className="path-blocks"></div>
                    </div>
                    <div className="row-path">
                        <div id="41" className="path-blocks"></div>
                        <div id="382" className="path-blocks sp3"></div>
                        <div id="35" className="path-blocks">
                            <StarOutlineIcon fontSize="large"/>
                        </div>
                    </div>
                    <div className="row-path">
                        <div

                            id="40"
                            className="path-blocks sp3"
                        ></div>
                        <div id="381" className="path-blocks sp3"></div>
                        <div id="36" className="path-blocks"></div>
                    </div>
                    <div className="row-path">
                        <div id="39" className="path-blocks"></div>
                        <div id="38" className="path-blocks">
                            <ArrowUpwardIcon fontSize="large" className="ar-4"/>
                        </div>
                        <div id="37" className="path-blocks"></div>
                    </div>
                </div>
                <div className="block4">
                    <div className="inner_block1">
                        <div className="contain">
                            <div

                                id="-41"
                                className="inner-circle4"
                            ></div>
                            <div

                                id="-42"
                                className="inner-circle4"
                            ></div>
                        </div>
                        <div className="contain">
                            <div

                                id="-43"
                                className="inner-circle4"
                            ></div>
                            <div

                                id="-44"
                                className="inner-circle4"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Board;

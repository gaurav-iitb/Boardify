import {useState} from "react";
import "./Dices.css";
import {Players} from "../../helpers/players/Players";

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

let mySound = new sound("dice.mp3");

function Dices(props) {

    const RandomDice1 = () => {
        console.log(props.pl1);
        if(props.pl1.canRollDice){
            let randno = Math.floor(Math.random() * 6 + 1);
            mySound.play();

            if(props.pl1.isLocked && randno !== 6) {
                props.setpl1(new Players("red", true, [], 'marker1.png', randno, false, true));
                const timer = setTimeout(() => {
                    props.setpl1(new Players("red", false, [], 'marker1.png', randno, false, true));
                    props.setpl2(new Players("blue", true, [], 'marker2.png', props.pl2.diceValue, true, props.pl2.isLocked));
                }, 1000);
                setTimeout(() => {
                    clearTimeout(timer);
                }, 1000);
            }
            else
                props.setpl1(new Players("red", true, [], 'marker1.png', randno, false, false));
        }
    };
    const RandomDice2 = () => {
        if(props.pl2.canRollDice){
            let randno = Math.floor(Math.random() * 6 + 1);
            mySound.play();

            if(props.pl2.isLocked && randno !== 6) {
                props.setpl2(new Players("blue", true, [], 'marker2.png', randno, false, true));
                const timer = setTimeout(() => {
                    props.setpl2(new Players("blue", false, [], 'marker2.png', randno, false, true));
                    props.setpl3(new Players("yellow", true, [], 'marker3.png', props.pl3.diceValue, true, props.pl3.isLocked));
                }, 1000);
                setTimeout(() => {
                    clearTimeout(timer);
                }, 1000);
            }
            else props.setpl2(new Players("blue", true, [], 'marker2.png', randno, false, false));
        }

    };
    const RandomDice3 = () => {
        if(props.pl3.canRollDice){
            let randno = Math.floor(Math.random() * 6 + 1);
            mySound.play();

            if(props.pl3.isLocked && randno !== 6) {
                props.setpl3(new Players("yellow", true, [], 'marker3.png', randno, false, true));
                const timer = setTimeout(() => {
                    props.setpl3(new Players("yellow", false, [], 'marker3.png', randno, false, true));
                    props.setpl4(new Players("green", true, [], 'marker4.png', props.pl4.diceValue, true, props.pl4.isLocked));
                }, 1000);
                setTimeout(() => {
                    clearTimeout(timer);
                }, 1000);
            }
            else props.setpl3(new Players("yellow", true, [], 'marker3.png', randno, false, false));
        }

    };
    const RandomDice4 = () => {
        if(props.pl4.canRollDice){
            let randno = Math.floor(Math.random() * 6 + 1);
            mySound.play();

            if(props.pl4.isLocked && randno !== 6) {
                props.setpl4(new Players("green", true, [], 'marker4.png', randno, false, true));
                const timer = setTimeout(() => {
                    props.setpl4(new Players("green", false, [], 'marker4.png', randno, false, true));
                    props.setpl1(new Players("red", true, [], 'marker1.png', props.pl1.diceValue, true, props.pl1.isLocked));
                }, 1000);
                setTimeout(() => {
                    clearTimeout(timer);
                }, 1000);
            }
            else props.setpl4(new Players("green", true, [], 'marker4.png', randno, false, false));
        }

    };
    return (
        <div className="dices">
            <div className="dice-box1">
                {props.pl1.isActive && (
                    <img
                        className="dice"
                        src={`dice${props.pl1.diceValue}.png`}
                        onClick={RandomDice1}
                    />
                )}
            </div>
            <div className="dice-box2">
                {props.pl4.isActive && (
                    <img
                        className="dice"
                        src={`dice${props.pl4.diceValue}.png`}
                        onClick={RandomDice4}
                    />
                )}

            </div>
            <div className="dice-box3">
                {props.pl2.isActive && (
                    <img
                        className="dice"
                        src={`dice${props.pl2.diceValue}.png`}
                        onClick={RandomDice2}
                    />
                )}
            </div>
            <div className="dice-box4">
                {props.pl3.isActive && (
                    <img
                        className="dice"
                        src={`dice${props.pl3.diceValue}.png`}
                        onClick={RandomDice3}
                    />
                )}
            </div>
        </div>
    );
}

export default Dices;

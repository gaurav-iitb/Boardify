import React from 'react'
import {Markers} from "../markers/Markers";

export class Players {
    color;
    iconImg;
    isActive;
    markers;
    diceValue;
    canRollDice;
    isLocked;
    constructor(Color, IsActive, Positions, iconImg, diceValue, canRollDice, isLocked) {
        this.color = Color;
        this.isActive = IsActive
        this.markers = new Markers(Positions[0], Positions[1], Positions[2], Positions[3]);
        this.iconImg = iconImg;
        this.diceValue = diceValue;
        this.canRollDice = canRollDice;
        this.isLocked = isLocked;
    }
}


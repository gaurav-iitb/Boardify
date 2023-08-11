class Marker {
    position;

    constructor(pos) {
        this.position = pos;
    }
}

export class Markers {
    m1;
    m2;
    m3;
    m4;

    constructor(pos1, pos2, pos3, pos4) {
        this.m1 = new Marker(pos1);
        this.m2 = new Marker(pos2);
        this.m3 = new Marker(pos3);
        this.m4 = new Marker(pos4);
    }

    setPos1(pos1) {
        this.m1.position = pos1;
    }

    setPos2(pos2) {
        this.m2.position = pos2;
    }

    setPos3(pos3) {
        this.m3.position = pos3;
    }

    setPos4(pos4) {
        this.m4.position = pos4;
    }
}
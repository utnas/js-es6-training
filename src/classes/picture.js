class Picture {

    constructor(path, direction, brightness) {
        this.path = path;
        this.direction = direction;
        this.brightness = brightness;
    }

     path() {
        return this.path;
    }

     direction() {
        return this.direction;
    }

     brightness() {
        return this.brightness;
    }
}

export default Picture;
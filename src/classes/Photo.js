class Photo extends Image {

    constructor(path, direction, brightness) {
        super(path, direction, brightness);
    }

    static manipulate() {
        return 'was manipulated by static function';
    }
}

Photo.STATIC_FIELD = "The static field";

export default Photo;

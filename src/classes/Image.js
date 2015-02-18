class Image extends Picture {

    constructor(path, direction, brightness) {
        super(path, direction, brightness);
    }

    static manipulate() {
        return 'was manipulated by static function';
    }
}

Image.STATIC_FIELD = "The static field";

export default Image;
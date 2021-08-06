function MoviesValidator(_name, _number) {
    this.name = _name;
    this.number = _number;
}

MoviesValidator.prototype.checkEmpty = function (message = null) {
    if (this.name !== "" && this.number !== "" && parseInt(this.number) > 0) return true;
    else {
        alert(message);
        return false;
    }
}

MoviesValidator.prototype.checkNumberMaximum = function (max, message = null) {
    if (this.number > max) {
        alert(message);
        return false;
    } else return true;
}

MoviesValidator.prototype.checkNameValid = function (message = null) {
    let reg = new RegExp('[a-z]');
    if (!reg.test(this.name)) {
        alert(message);
        return false;
    } else return true;
}

export default MoviesValidator;
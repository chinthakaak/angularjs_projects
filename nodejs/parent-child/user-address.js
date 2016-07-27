exports.user = function (name, email) { 
    this.name = name;
    this.getName = function () {
        return name;
    }
}

exports.address = function (address) {
    this.address = address;
    this.getAddress = function() {
        return address;
    }
}

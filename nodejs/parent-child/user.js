var User1 = function (name,email) {
    this.name = name
    this.email = email
    	this.getEmail = function () {
		return email;
	}
}

// module.exports.User = User;
module.exports = User1
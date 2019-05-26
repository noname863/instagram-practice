(function() {
class UserControl {
	constructor(users) {
		this.allUsers = users;
	}

	static validateUser(user) {
		return (user.login != undefined) && (user.password != undefined);
	}

	static validateArray(users) {
		if (!Array.isArray(users)) {
			return false;
		}
		return users.every(function(user) { return UserControl.validateUser(user); })
	}

	login(login, password) {
		var user = this.allUsers.find(function(user) { return (user.login == login) && (user.password == password); });
		if (user == undefined) {
			return false;
		}
		else {
			this.currentUser = user;
			window.localStorage.setItem('currentUser', JSON.stringify(user));
			return true;
		}
	}

	getUser(username) {
		return this.allUsers.find(function(item) {return item.login == username; });
	}

	getCurrentLogin() {
		if (this.currentUser != null)
			return this.currentUser.login;
		else
			return null;
	}

	logOff() {
		this.currentUser = null;
		window.localStorage.setItem('currentUser', null);
	}
}

var users = [
{
	login: 'user1',
	password: 'qwerty',
	avatar: 'avatar.png'
},
{
	login: 'user2',
	password: '123456',
	avatar: 'avatar.png'
},
{
	login: 'user3',
	password: 'zdqxea',
	avatar: 'avatar.png'
}
];
window.userControl = new UserControl(users);
window.userControl.currentUser = JSON.parse(window.localStorage.getItem('currentUser'));
}());
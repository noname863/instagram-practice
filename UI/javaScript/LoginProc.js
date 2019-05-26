(function() {
class LoginProc {
	constructor() {
		this._loginHasText = false;
		this._passwordHasText = false;
		this._printedError = false;
	}

	loginOnFocus(element) {
		if (!this._loginHasText) {
			window.fineInput.elementOnFocus(element);
		}
	}

	loginOnBlur(element) {
		if (element.value == '') {
			window.fineInput.elementOnBlur(element, "Login");
			this._loginHasText = false;
		} else {
			this._loginHasText = true;
		}
	}

	passwordOnFocus(element) {
		if (!this._passwordHasText) {
			window.fineInput.elementOnFocus(element);
			element.setAttribute('type', 'password');	
		}
	}

	passwordOnBlur(element) {
		if (element.value == '') {
			window.fineInput.elementOnBlur(element, "Password");
			this._passwordHasText = false;
		} else {
			this._passwordHasText = true;
		}
	}

	printError() {
		if (!this._printedError) {
			document.getElementById('loginPageLoginButton').insertAdjacentHTML('beforebegin', 
				'<p class="loginError">wrong login or password</p>');
			this._printedError = true;
		}
	}

	login() {
		if (!this._loginHasText) {
			return false;
		}
		if (!this._passwordHasText) {
			this.printError();
			return false
		}
		if (userControl.login(document.getElementsByClassName('loginInput')[0].value, 
						      document.getElementsByClassName('passwordInput')[0].value)) {
			window.location.href = 'index.html';
			return true;
		} else {
			this.printError();
			return false;
		}
	}
}

window.loginProc = new LoginProc();
}());
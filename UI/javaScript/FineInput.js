(function() {
class FineInput {
	constructor() {}
	elementOnFocus(element) {
		element.setAttribute('style', 'color: white;');
		element.value = '';
	}

	elementOnBlur(element, text) {
		element.setAttribute('style', 'color: dimgray;');
		element.value = text;
	}
}

window.fineInput = new FineInput();
}());
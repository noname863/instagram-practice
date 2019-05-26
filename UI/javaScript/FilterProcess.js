(function() {
class FilterProcess {
	constructor() {
		this.currentFilter = {};
		this._datesTouched = Array(6);
		this._datesTouched.fill(false);
	}

	_elementOnFocus(element) {
		element.setAttribute('style', 'color: white;');
		element.value = '';
	}

	_elementOnBlur(element, text) {
		element.setAttribute('style', 'color: dimgray;');
		element.value = text;
	}

	parseTags(tags) {
		if (tags == '')
			return undefined;
		return tags.split(/[#\s,.;]+/);
	}

	parseUsers(users) {
		if (users == '')
			return undefined;
		return users.split(/[\s,.;]+/);
	}

	getDate(day, month, year) {
		if ((day == '') || (month == '') || (year == ''))
			return undefined;
		month = month - 1;
		var result = new Date(year, month, day);
		if (day != result.getDate())
			return undefined;
		if (month != result.getMonth())
			return undefined;
		return result;
	}

	getAuthorsValue() {
		return this.parseUsers(document.getElementById('usersFilter').value);
	}

	getTagsValue() {
		return this.parseTags(document.getElementById('tagsFilter').value);
	}

	getFirstDateValue() {
		var day = document.getElementById('dayFilter1').value;
		var month = document.getElementById('monthFilter1').value;
		var year = document.getElementById('yearFilter1').value;
		return this.getDate(day, month, year);
	}

	getSecondDateValue() {
		var day = document.getElementById('dayFilter2').value;
		var month = document.getElementById('monthFilter2').value;
		var year = document.getElementById('yearFilter2').value;
		return this.getDate(day, month, year);
	}

	getFilter() {
		var filter = {};
		filter.hashTags = this.getTagsValue();
		filter.authors = this.getAuthorsValue();
		filter.firstDate = this.getFirstDateValue();
		filter.secondDate = this.getSecondDateValue();
		return filter;
	}

	filterProcess() {
		this.currentFilter = this.getFilter();
		window.view.clearViewPosts();
		window.view.getPage();
	}

	inputOnFocus(element, num) {
		if (!this._datesTouched[num]) {
			window.fineInput.elementOnFocus(element);
		}
	}

	inputOnBlur(element, num, text) {
		if (element.value == '') {
			window.fineInput.elementOnBlur(element, text);
			this._datesTouched[num] = false;
		} else {
			this._datesTouched[num] = true;
		}
	}

}

window.filterProcess = new FilterProcess();
}());
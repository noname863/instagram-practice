(function() {
class View {
	constructor() {
		this._viewedPosts = 0;
		this._showMoreViewed = true;
	}

	viewPost(post) {
		var htmlPost = '<div id="' + post.id + '">';
		htmlPost += '<img class="post" src="';
		htmlPost += post.photoLink;
		htmlPost += '"><img class="avatar" src="';
		htmlPost += window.userControl.getUser(post.author).avatar;
		htmlPost += '">';
		if (post.likes.length == 0) {
			htmlPost += '<button class="tool" onclick="view.pressLike(this)"><img src="icons/like.svg"></button>'; // avatar will depends from user
		}
		else {
			if (post.likes.includes(window.userControl.getCurrentLogin()))
				htmlPost += '<button class="tool" onclick="view.deleteLike(this)"><img src="icons/pressedLike.svg"><p class="numOfLikes">';
			else
				htmlPost += '<button class="tool" onclick="view.pressLike(this)"><img src="icons/like.svg"><p class="numOfLikes">';
			htmlPost += post.likes.length;
			htmlPost += '</p></button>';
		}
		if (post.author == window.userControl.getCurrentLogin()) {
			htmlPost += '<button class="tool" onclick="view.editPost(this)"><img src="icons/pencil.svg"></button> \
						<button class="tool" onclick="view.askDelete(this)"><img src="icons/trashcan.svg"></button>';
		}
		htmlPost += '<p class="postUsername">';
		htmlPost += post.author;
		htmlPost += '</p><p class="postDescription">';
		htmlPost += post.description;
		htmlPost += '</p><p class="tags"><i>tags:';
		if (post.hashTags.length != 0) {
			htmlPost += (' #' + post.hashTags.join(' #'));
		}
		htmlPost += '</i><span style="float: right;">posted ';
		htmlPost += (post.createdAt.getDate() + '.');
		htmlPost += ((post.createdAt.getMonth() + 1) + '.');
		htmlPost += (post.createdAt.getFullYear());
		htmlPost += '</span></p></div>';

		var main = document.getElementsByTagName('main')[0];
		main.insertAdjacentHTML('beforeend', htmlPost);
	}

	clearViewPosts() {
		document.getElementsByTagName('main')[0].innerHTML = "";
		this._viewedPosts = 0;
	}

	getPage(top=10) {
		var page = window.postList.getPage(this._viewedPosts, top, window.filterProcess.currentFilter);
		for (var i = 0; i < page.array.length; ++i)
			this.viewPost(page.array[i]);
		if ((page.array.length == 0) && (this._viewedPosts == 0)) {
			document.getElementsByTagName('main')[0].insertAdjacentHTML('beforeend', 
				'<p class="emptyFilter">there is nothing to see here</p>');
		}
		this._viewedPosts = page.newNumber + page.array.length;
		if ((this._viewedPosts == postList.getLength()) && this._showMoreViewed) {
			document.getElementsByClassName('showMore')[0].remove();
			this._showMoreViewed = false;
		}
		if ((this._viewedPosts != postList.getLength()) && !this._showMoreViewed) {
			this._showMoreViewed = true;
			document.getElementsByTagName('footer')[0].insertAdjacentHTML('afterbegin', 
				'<button class="showMore" onclick="view.getPage()">show more</button>');
		}
	}

	addPhotoPost(post) {
		if (window.postList.add(post)) {
			var numberOfPosts = this._viewedPosts;
			this.clearViewPosts();
			this.getPage(numberOfPosts);
		}
	}

	removePhotoPost(id) {
		window.postList.remove(id);
		document.getElementById(id).remove();
	}

	editPhotoPost(id, post) {
		if (window.postList.edit(id, post)) {
			var numberOfPosts = this._viewedPosts;
			this.clearViewPosts();
			this.getPage(numberOfPosts);
		}
	}

	filterActivate() {
		var filter = document.getElementById("filter");
		if (filter.className == "activatedFilter")
			filter.className = "deactivatedFilter";
		else
			filter.className = "activatedFilter";
	}

	askDelete(element) {
		this._elementToDelete = element;
		var htmlToInsert = '<div class="popup"><div class="askWindow"> \
			<p class="askWindowText">Are you sure?</p> \
			<button class="squareButton" id="deleteYes" onclick="view.deleteChosen()">Yes</button> \
			<button class="squareButton" id="deleteNo" onclick="view.removeAskDelete()">No</button> \
		</div></div>';				'<button class="showMore" onclick="view.getPage()">show more</button>';
		document.getElementsByTagName('main')[0].insertAdjacentHTML('afterend', htmlToInsert);
	}

	deleteChosen() {
		this.removePhotoPost(this._elementToDelete.parentElement.id);
		this.removeAskDelete();
	}

	removeAskDelete() {
		document.getElementsByClassName('popup')[0].remove();
	}

	logOff() {
		window.userControl.logOff();
		this.clearViewPosts();
		this.getPage();
		this.reloadHeader();
	}

	pressLike(element) {
		if (window.userControl.currentUser == null) {
			window.location.href = 'login.html';
		} else {
			var post = window.postList.get(element.parentElement.id);
			window.postList.pressLike(post, window.userControl.currentUser);
			var htmlToInsert = '<button class="tool" onclick="view.deleteLike(this)"><img src="icons/pressedLike.svg"><p class="numOfLikes">';
			htmlToInsert += post.likes.length;
			htmlToInsert += '</p></button>';
			element.insertAdjacentHTML('beforebegin', htmlToInsert);
			element.remove();
		}
	}

	deleteLike(element) {
		var post = window.postList.get(element.parentElement.id);
		window.postList.deleteLike(post, window.userControl.currentUser);
		if (post.likes.length == 0) {
			element.insertAdjacentHTML('beforebegin', 
				'<button class="tool" onclick="view.pressLike(this)"><img src="icons/like.svg"></button>');
			element.remove();
		} else {
			var htmlToInsert = '<button class="tool" onclick="view.pressLike(this)"><img src="icons/like.svg"><p class="numOfLikes">';
			htmlToInsert += post.likes.length;
			htmlToInsert += '</p></button>';
			element.insertAdjacentHTML('beforebegin', htmlToInsert);
			element.remove();
		}
	}

	loadHeader() {
		var headerHtml = '<header> \
		<button class="circleButton" id="filterButton" onclick="window.view.filterActivate()"><img src="icons/filter.svg"></button> \
		<h1 class="head"><a href="index.html">Gram</a></h1>';
		var currentUser = window.userControl.getCurrentLogin();
		if (currentUser == null) {
			headerHtml += '<a href="login.html"><button class="squareButton" id="login">log in</button></a>';
		} else {
			headerHtml += '<button class="squareButton" id="login" onclick="window.view.logOff()">log off</button> \
			<p class="headerUsername">';
			headerHtml += currentUser;
			headerHtml += '</p><button class="circleButton" id="addPost" onclick="view.addPost()"><img src="icons/addPost.svg"></button>';
		}
		headerHtml += '</header>';
		document.getElementsByTagName('body')[0].insertAdjacentHTML('afterbegin', headerHtml);
	}

	reloadHeader() {
		document.getElementsByTagName('header')[0].remove();
		this.loadHeader();
	}

	addPost() {
		window.location.href = "EditPost.html";
	}

	editPost(element) {
		console.log(JSON.stringify(window.postList.get(element.parentElement.id)));
		window.localStorage.setItem('changedPost', JSON.stringify(window.postList.get(element.parentElement.id)));
		window.location.href = "EditPost.html";
	}
}

document.onreadystatechange = function()
{
    if(document.readyState === 'complete')
    {
		window.view = new View();
		window.view.loadHeader();
		window.view.getPage();
    }
}

}());
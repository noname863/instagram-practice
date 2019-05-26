(function() {
class EditPostView {
	constructor() {
		this._currentPost = JSON.parse(window.localStorage.getItem('changedPost'));
	}

	loadHeader() {
		var headerHtml = '<header><h1 class="head"><a href="index.html">Gram</a></h1>';
		var currentUser = window.userControl.getCurrentLogin();
		headerHtml += '<button class="squareButton" id="login" onclick="window.view.logOff()">log off</button> \
		<p class="headerUsername">';
		headerHtml += currentUser;
		headerHtml += '</p><button class="circleButton" id="addPost"><a href="EditPost.html"><img src="icons/addPost.svg"></a></button>';
		headerHtml += '</header>';
		document.getElementsByTagName('body')[0].insertAdjacentHTML('afterbegin', headerHtml);
	}

	logOff() {
		window.userControl.logOff();
		window.location.href = 'index.html';
	}

	// here i assume that photos are in photos/filename because i can't get full path of image with javascript
	pageView() {
		if (this._currentPost == null) {
			this.addPostView();
			this._currentPost = {
				photoLink: ""
			};
			this._idCounter = window.localStorage.getItem('idCounter');
			if (this._idCounter == null) {
				this._idCounter = '26';
				window.localStorage.setItem('idCounter', '26');
			}
		} else {
			this.editPostView();
			window.localStorage.removeItem('changedPost');
		}
		var img = document.getElementsByTagName('img')[0];
		img.onclick = function() {
			document.getElementById('getFile').click();
		}
		img.ondrop = function(event) {
			event.preventDefault();
			window.editPostView._currentPost.photoLink = 'photos/' + event.dataTransfer.files[0].name;
			document.getElementsByClassName('post')[0].setAttribute('src', window.editPostView._currentPost.photoLink);
		}
		img.ondragover = function (event) { 
  			event.preventDefault() 
		}
		document.getElementById('getFile').onchange = function() {
			editPostView.clickHandler(this.files);
		}
	}	

	editPostView() {
		var post = this._currentPost;
		var htmlToInsert = '<img class="post" src="';
		htmlToInsert += post.photoLink;
		htmlToInsert += '"><p class="editText">Description:</p><textarea id="descriptionText" class="editTextArea">';
		htmlToInsert += post.description;
		htmlToInsert += '</textarea><p class="editText">tags:</p><textarea id="tagsText" class="editTextArea">'
		if (post.hashTags.length != 0) {
			htmlToInsert += '#' + post.hashTags.join(' ,#');
		} 
		htmlToInsert += '</textarea><input type="file" id="getFile" style="display: none;"> \
			<button class="squareButton" id="addButton" onclick="editPostView.addPost()">edit post</button>';
		document.getElementsByTagName('main')[0].insertAdjacentHTML('beforeend', htmlToInsert);
	}

	addPostView() {
		document.getElementsByTagName('main')[0].insertAdjacentHTML('beforeend', 
			'<img class="post" src="defaultPhoto.png"><p class="editText">Description:</p> \
			<textarea id="descriptionText" class="editTextArea"></textarea> \
			<p class="editText">tags:</p> \
			<textarea id="tagsText" class="editTextArea"></textarea> \
			<input type="file" id="getFile" style="display: none;">\
			<button class="squareButton" id="addButton" onclick="editPostView.addPost()">add post</button>');
	}

	clickHandler(list) {
		window.URL.revokeObjectURL(this._currentPost.photoLink);
		this._currentPost.photoLink = 'photos/' + list[0].name;
		document.getElementsByClassName('post')[0].setAttribute('src', this._currentPost.photoLink);
	}

	addPost() {
		this._currentPost.description = document.getElementById('descriptionText').value;
		this._currentPost.hashTags = document.getElementById('tagsText').value.split(/[#,.\s;]+/);
		if (this._currentPost.hashTags[0] == '') {
				this._currentPost.hashTags.splice(0, 1);
		}
		if (this._idCounter == undefined) {
			window.postList.edit(this._currentPost.id, this._currentPost);
		} else {
			this._currentPost.id = this._idCounter;
			++this._idCounter;
			window.localStorage.setItem('idCounter', this._idCounter);
			this._currentPost.createdAt = new Date();
			this._currentPost.author = window.userControl.currentUser.login;
			this._currentPost.likes = [];
			window.postList.add(this._currentPost);
		}
		window.location.href = 'index.html';
	}
}

document.onreadystatechange = function()
{
    if(document.readyState === 'complete')
    {
		window.editPostView = new EditPostView();
		window.editPostView.pageView();
		window.editPostView.loadHeader();
    }
}

}());

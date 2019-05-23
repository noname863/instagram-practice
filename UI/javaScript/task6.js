class View {
	constructor() {
		this._viewedPosts = 0;
	}

	viewPost(post) {
		var htmlPost = '<div id="' + post.id + '">';
		htmlPost += '<img class="post" src="';
		htmlPost += post.photoLink;
		htmlPost += '"><img class="avatar" src="avatar.png">';
		if (post.likes.length == 0) {
			htmlPost += '<button class="tool"><img src="icons/like.svg"></button>'; // avatar will depends from user
		}
		else {
			if (post.likes.includes(window.postList.currentUser))
				htmlPost += '<button class="tool"><img src="icons/pressedLike.svg"><p class="numOfLikes">';
			else
				htmlPost += '<button class="tool"><img src="icons/like.svg"><p class="numOfLikes">';
			htmlPost += post.likes.length;
			htmlPost += '</p></button>'; // avatar will depends from user
		}
		if (post.author == window.postList.currentUser) {
			htmlPost += '<button class="tool"><img src="icons/pencil.svg"></button> \
						<button class="tool"><img src="icons/trashcan.svg"></button>';
		}
		htmlPost += '<p class="postUsername">';
		htmlPost += post.author;
		htmlPost += '</p><p class="postDescription">';
		htmlPost += post.description;
		htmlPost += '</p><p class="tags"><i>tags:';
		if (post.hashTags.length != 0) {
			htmlPost += (' #' + post.hashTags.join(' #'));
		}
		htmlPost += '</i><span class="postDate">posted ';
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

	getPage(top=10, filterConfig={}) {
		var array = window.postList.getPage(this._viewedPosts, top, filterConfig);
		for (var i = 0; i < array.length; ++i)
			this.viewPost(array[i]);
		this._viewedPosts += top;
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
}


document.onreadystatechange = function()
{
    if(document.readyState === 'complete')
    {
        (function() {
			window.view = new View();
			window.view.getPage();
		}());
    }
}

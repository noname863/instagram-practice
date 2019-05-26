(function() {
	function isString(string) {
		return (string instanceof String) || (typeof string === 'string');
	}

	class PostList {
		constructor() {
			this._posts = JSON.parse(window.localStorage.getItem('photoPosts'));
			this._posts.forEach(function(item) { item.createdAt = new Date(item.createdAt)});
		}

		_updatePosts() {
			window.localStorage.setItem('photoPosts', JSON.stringify(this._posts));
		}

		_reversedPosts() {
			var result = Array(this._posts.length);
			for (var i = 0; i < this._posts.length; ++i)
				result[i] = this._posts[this._posts.length - i - 1];
			return result;
		}

		getPage(skip=0, top=10, filterConfig={}) {
			if (!(Number.isInteger(skip)) ||
				!(Number.isInteger(top)) || 
				!(filterConfig instanceof Object)) {
				return undefined;
			}
			// all posts already sorted, but in reversed order
			var result = this._reversedPosts().slice(skip, this._posts.length);
			result = result.filter(function(post) {
				if (Array.isArray(filterConfig.authors))
					if (!filterConfig.authors.includes(post.author)){
						++skip;
						return false;
					}
				if ((filterConfig.firstDate != undefined) && (filterConfig.secondDate != undefined))
					if ((post.createdAt.getTime() < filterConfig.firstDate.getTime()) || 
						(post.createdAt.getTime() > filterConfig.secondDate.getTime())){
						++skip;
						return false;
					}
				if (Array.isArray(filterConfig.hashTags)) {
					if (!post.hashTags.some(function(item) { return filterConfig.hashTags.includes(item); })) {
						++skip;
						return false;
					} else {
						return true;
					}
				}
				return true;
			});
			return {
				array: result.slice(0, top),
				newNumber: skip
			}
		}

		get(id) {
			return this._posts.find(function(item) { return item.id == id; });
		}

		static validate(post) {
			return (post instanceof Object) &&
			(isString(post.id)) &&
			(isString(post.description)) && (post.description.length < 200) &&
			(post.createdAt instanceof Date) &&
			(isString(post.author)) && (post.author != '') &&
			(isString(post.photoLink)) && (post.photoLink != '') &&
			(post.hashTags instanceof Array) &&
			(post.likes instanceof Array);
		}

		add(post) {
			if (PostList.validate(post) && 
				(this.get(post.id) == undefined)) {
				if (this._posts[this._posts.length - 1].createdAt <= post.createdAt)
					this._posts.push(post);
				else {
					var i = this._posts.findIndex(function(item) { 
						return item.createdAt >= post.createdAt; 
					});
					this._posts.splice(i, 0, post);
				}
				this._updatePosts();
				return true;
			}
			return false;
		}

		edit(id, post) {
			if (!(post instanceof Object) || 
				(isString(post.description) && (post.description.length >= 200))) {
				return false;
			}
			var postToChange = this.get(id);
			if (!PostList.validate(postToChange)) {
				return false;
			}
			var properties = ['description', 'photoLink', 'hashTags'];
			properties.forEach(function(property) {
				if (post[property] != undefined) {
					postToChange[property] = post[property];
				}
			});
			this._updatePosts();
			return true;
		}

		remove(id) {
			var index = this._posts.findIndex(function(item) {return item.id == id;});
			if (index == -1)
				return false;
			this._posts.splice(index, 1);
			this._updatePosts();
			return true;
		}

		pressLike(post, currentUser) {
			post.likes.push(currentUser.login);
			this._updatePosts();
		}

		deleteLike(post, currentUser) {
			var postlikes = post.likes;
			postlikes.splice(postlikes.findIndex(function(item) {return item == currentUser.login;}), 1);
			this._updatePosts();
		}

		getLength() {
			return this._posts.length;
		}
	}

	var photoPosts = [
	{
		id: '1',
		description: 'description of first photo',
		createdAt: new Date(2019, 0, 10),
		author: 'user1',
		photoLink: 'photos/image1.png', 
		hashTags: ['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6'], 
		likes: []
	}, 
	{
		id: '2',
		description: 'description of second photo',
		createdAt: new Date(2019, 0, 10),
		author: 'user2',
		photoLink: 'photos/image2.png', 
		hashTags: ['tag1','tag3'], 
		likes: []
	},
	{
		id: '3',
		description: 'description of third photo',
		createdAt: new Date(2019, 0, 10),
		author: 'user1',
		photoLink: 'photos/image3.png', 
		hashTags: [], 
		likes: []
	},
	{
		id: '4',
		description: 'description of fourth photo',
		createdAt: new Date(2019, 0, 10),
		author: 'user3',
		photoLink: 'photos/image4.png', 
		hashTags: ['tag1','tag3'], 
		likes: []
	},
	{
		id: '5',
		description: 'description of fifth photo',
		createdAt: new Date(2019, 0, 10),
		author: 'user2',
		photoLink: 'photos/image5.png', 
		hashTags: ['tag1', 'tag5', 'tag2'], 
		likes: []
	},
	{
		id: '6',
		description: 'description of sixth photo',
		createdAt: new Date(2019, 0, 11),
		author: 'user2',
		photoLink: 'photos/image6.png', 
		hashTags: ['tag1', 'tag6', 'tag4'], 
		likes: []
	},
	{
		id: '7',
		description: 'description of seventh photo',
		createdAt: new Date(2019, 0, 11),
		author: 'user1',
		photoLink: 'photos/image7.png', 
		hashTags: ['tag5', 'tag2'], 
		likes: []
	},
	{
		id: '8',
		description: 'description of eighth photo',
		createdAt: new Date(2019, 0, 11),
		author: 'user3',
		photoLink: 'photos/image8.png', 
		hashTags: ['тэг3', 'тэг1'], 
		likes: []
	},
	{
		id: '9',
		description: 'description of ninth photo',
		createdAt: new Date(2019, 0, 12),
		author: 'user3',
		photoLink: 'photos/image9.png', 
		hashTags: ['tag2', 'tag4'], 
		likes: []
	},
	{
		id: '10',
		description: 'description of tenth photo',
		createdAt: new Date(2019, 0, 12),
		author: 'user2',
		photoLink: 'photos/image10.png', 
		hashTags: ['tag1', 'tag5'], 
		likes: []
	},
	{
		id: '11',
		description: 'original description 11',
		createdAt: new Date(2019, 0, 12),
		author: 'user3',
		photoLink: 'photos/image11.png', 
		hashTags: ['tag1', 'tag2', 'tag3', 'tag4', 'tag0'], 
		likes: []
	},
	{
		id: '12',
		description: 'original description 12',
		createdAt: new Date(2019, 0, 12),
		author: 'user1',
		photoLink: 'photos/image12.png', 
		hashTags: ['tag5', 'tag4', 'tag2', 'tag1', 'tag3', 'tag0'], 
		likes: []
	},
	{
		id: '13',
		description: 'original description 13',
		createdAt: new Date(2019, 0, 12),
		author: 'user1',
		photoLink: 'photos/image13.png', 
		hashTags: ['tag1', 'tag4', 'tag0', 'tag5', 'tag2', 'tag6', 'tag3'], 
		likes: []
	},
	{
		id: '14',
		description: 'original description 14',
		createdAt: new Date(2019, 0, 12),
		author: 'user2',
		photoLink: 'photos/image14.png', 
		hashTags: ['tag6', 'tag5', 'tag1', 'tag4', 'tag0', 'tag3', 'tag2'], 
		likes: []
	},
	{
		id: '15',
		description: 'original description 15',
		createdAt: new Date(2019, 0, 12),
		author: 'user3',
		photoLink: 'photos/image15.png', 
		hashTags: ['tag3', 'tag6', 'tag2', 'tag4', 'tag1', 'tag0', 'tag5'], 
		likes: []
	},
	{
		id: '16',
		description: 'original description 16',
		createdAt: new Date(2019, 0, 13),
		author: 'user3',
		photoLink: 'photos/image16.png', 
		hashTags: ['tag2', 'tag1', 'tag3', 'tag0', 'tag4'], 
		likes: []
	},
	{
		id: '17',
		description: 'original description 17',
		createdAt: new Date(2019, 0, 13),
		author: 'user1',
		photoLink: 'photos/image17.png', 
		hashTags: ['tag2', 'tag3', 'tag0', 'tag4', 'tag5', 'tag1'], 
		likes: []
	},
	{
		id: '18',
		description: 'original description 18',
		createdAt: new Date(2019, 0, 13),
		author: 'user2',
		photoLink: 'photos/image18.png', 
		hashTags: ['tag4', 'tag3', 'tag6', 'tag5', 'tag1', 'tag2', 'tag0'], 
		likes: []
	},
	{
		id: '19',
		description: 'original description 19',
		createdAt: new Date(2019, 0, 13),
		author: 'user3',
		photoLink: 'photos/image19.png', 
		hashTags: ['tag2', 'tag4', 'tag3', 'tag0', 'tag1'], 
		likes: []
	},
	{
		id: '20',
		description: 'original description 20',
		createdAt: new Date(2019, 0, 13),
		author: 'user1',
		photoLink: 'photos/image20.png', 
		hashTags: ['tag2', 'tag1', 'tag0', 'tag3'], 
		likes: []
	},
	{
		id: '21',
		description: 'original description 21',
		createdAt: new Date(2019, 0, 13),
		author: 'user2',
		photoLink: 'photos/image21.png', 
		hashTags: ['tag1', 'tag0', 'tag2'], 
		likes: []
	},
	{
		id: '22',
		description: 'original description 22',
		createdAt: new Date(2019, 0, 13),
		author: 'user2',
		photoLink: 'photos/image22.png', 
		hashTags: ['tag1', 'tag6', 'tag4', 'tag2', 'tag0', 'tag3', 'tag5'], 
		likes: []
	},
	{
		id: '23',
		description: 'original description 23',
		createdAt: new Date(2019, 0, 14),
		author: 'user2',
		photoLink: 'photos/image23.png', 
		hashTags: ['tag5', 'tag3', 'tag0', 'tag4', 'tag2', 'tag1'],  
		likes: []
	},
	{
		id: '24',
		description: 'original description 24',
		createdAt: new Date(2019, 0, 14),
		author: 'user1',
		photoLink: 'photos/image24.png', 
		hashTags: ['tag2', 'tag6', 'tag4', 'tag1', 'tag3', 'tag0', 'tag5'], 
		likes: []
	},
	{
		id: '25',
		description: 'original description 25',
		createdAt: new Date(2019, 0, 14),
		author: 'user3',
		photoLink: 'photos/image25.png', 
		hashTags: ['tag2', 'tag3', 'tag1', 'tag4', 'tag0'], 
		likes: ['user1']
	}
	];
	if (window.localStorage.getItem('photoPosts') == null) {
		window.localStorage.setItem('photoPosts', JSON.stringify(photoPosts));
	}
	window.postList = new PostList();


}());



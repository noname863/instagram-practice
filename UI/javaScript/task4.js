(function() {
	var photoPosts = [
	{
		id: '1',
		description: 'description of first photo',
		createdAt: new Date(2019, 0, 10),
		author: 'user1',
		photoLink: 'photo1.png', 
		hashTags: ['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6'], 
		likes: []
	}, 
	{
		id: '2',
		description: 'description of second photo',
		createdAt: new Date(2019, 0, 10),
		author: 'user2',
		photoLink: 'photo2.png', 
		hashTags: ['tag1','tag3'], 
		likes: []
	},
	{
		id: '3',
		description: 'description of third photo',
		createdAt: new Date(2019, 0, 10),
		author: 'user1',
		photoLink: 'photo3.png', 
		hashTags: [], 
		likes: []
	},
	{
		id: '4',
		description: 'description of fourth photo',
		createdAt: new Date(2019, 0, 10),
		author: 'user3',
		photoLink: 'photo4.png', 
		hashTags: ['tag1','tag3'], 
		likes: []
	},
	{
		id: '5',
		description: 'description of fifth photo',
		createdAt: new Date(2019, 0, 10),
		author: 'user2',
		photoLink: 'photo5.png', 
		hashTags: ['tag1', 'tag5', 'tag2'], 
		likes: []
	},
	{
		id: '6',
		description: 'description of sixth photo',
		createdAt: new Date(2019, 0, 11),
		author: 'user2',
		photoLink: 'photo6.png', 
		hashTags: ['tag1', 'tag6', 'tag4'], 
		likes: []
	},
	{
		id: '7',
		description: 'description of seventh photo',
		createdAt: new Date(2019, 0, 11),
		author: 'user1',
		photoLink: 'photo7.png', 
		hashTags: ['tag5', 'tag2'], 
		likes: []
	},
	{
		id: '8',
		description: 'Описание восьмого фото для проверки русского языка',
		createdAt: new Date(2019, 0, 11),
		author: 'user3',
		photoLink: 'photo8.png', 
		hashTags: ['тэг3', 'тэг1'], 
		likes: []
	},
	{
		id: '9',
		description: 'description of ninth photo',
		createdAt: new Date(2019, 0, 12),
		author: 'user3',
		photoLink: 'photo9.png', 
		hashTags: ['tag2', 'tag4'], 
		likes: []
	},
	{
		id: '10',
		description: 'description of tenth photo',
		createdAt: new Date(2019, 0, 12),
		author: 'user2',
		photoLink: 'photo10.png', 
		hashTags: ['tag1', 'tag5'], 
		likes: []
	},
	{
		id: '11',
		description: 'original description 11',
		createdAt: new Date(2019, 0, 12),
		author: 'user3',
		photoLink: 'photo11.png', 
		hashTags: ['tag1', 'tag2', 'tag3', 'tag4', 'tag0'], 
		likes: []
	},
	{
		id: '12',
		description: 'original description 12',
		createdAt: new Date(2019, 0, 12),
		author: 'user1',
		photoLink: 'photo12.png', 
		hashTags: ['tag5', 'tag4', 'tag2', 'tag1', 'tag3', 'tag0'], 
		likes: []
	},
	{
		id: '13',
		description: 'original description 13',
		createdAt: new Date(2019, 0, 12),
		author: 'user1',
		photoLink: 'photo13.png', 
		hashTags: ['tag1', 'tag4', 'tag0', 'tag5', 'tag2', 'tag6', 'tag3'], 
		likes: []
	},
	{
		id: '14',
		description: 'original description 14',
		createdAt: new Date(2019, 0, 12),
		author: 'user2',
		photoLink: 'photo14.png', 
		hashTags: ['tag6', 'tag5', 'tag1', 'tag4', 'tag0', 'tag3', 'tag2'], 
		likes: []
	},
	{
		id: '15',
		description: 'original description 15',
		createdAt: new Date(2019, 0, 12),
		author: 'user3',
		photoLink: 'photo15.png', 
		hashTags: ['tag3', 'tag6', 'tag2', 'tag4', 'tag1', 'tag0', 'tag5'], 
		likes: []
	},
	{
		id: '16',
		description: 'original description 16',
		createdAt: new Date(2019, 0, 13),
		author: 'user3',
		photoLink: 'photo16.png', 
		hashTags: ['tag2', 'tag1', 'tag3', 'tag0', 'tag4'], 
		likes: []
	},
	{
		id: '17',
		description: 'original description 17',
		createdAt: new Date(2019, 0, 13),
		author: 'user1',
		photoLink: 'photo17.png', 
		hashTags: ['tag2', 'tag3', 'tag0', 'tag4', 'tag5', 'tag1'], 
		likes: []
	},
	{
		id: '18',
		description: 'original description 18',
		createdAt: new Date(2019, 0, 13),
		author: 'user2',
		photoLink: 'photo18.png', 
		hashTags: ['tag4', 'tag3', 'tag6', 'tag5', 'tag1', 'tag2', 'tag0'], 
		likes: []
	},
	{
		id: '19',
		description: 'original description 19',
		createdAt: new Date(2019, 0, 13),
		author: 'user3',
		photoLink: 'photo19.png', 
		hashTags: ['tag2', 'tag4', 'tag3', 'tag0', 'tag1'], 
		likes: []
	},
	{
		id: '20',
		description: 'original description 20',
		createdAt: new Date(2019, 0, 13),
		author: 'user1',
		photoLink: 'photo20.png', 
		hashTags: ['tag2', 'tag1', 'tag0', 'tag3'], 
		likes: []
	},
	{
		id: '21',
		description: 'original description 21',
		createdAt: new Date(2019, 0, 13),
		author: 'user2',
		photoLink: 'photo21.png', 
		hashTags: ['tag1', 'tag0', 'tag2'], 
		likes: []
	},
	{
		id: '22',
		description: 'original description 22',
		createdAt: new Date(2019, 0, 13),
		author: 'user2',
		photoLink: 'photo22.png', 
		hashTags: ['tag1', 'tag6', 'tag4', 'tag2', 'tag0', 'tag3', 'tag5'], 
		likes: []
	},
	{
		id: '23',
		description: 'original description 23',
		createdAt: new Date(2019, 0, 14),
		author: 'user2',
		photoLink: 'photo23.png', 
		hashTags: ['tag5', 'tag3', 'tag0', 'tag4', 'tag2', 'tag1'],  
		likes: []
	},
	{
		id: '24',
		description: 'original description 24',
		createdAt: new Date(2019, 0, 14),
		author: 'user1',
		photoLink: 'photo24.png', 
		hashTags: ['tag2', 'tag6', 'tag4', 'tag1', 'tag3', 'tag0', 'tag5'], 
		likes: []
	},
	{
		id: '25',
		description: 'original description 25',
		createdAt: new Date(2019, 0, 14),
		author: 'user3',
		photoLink: 'photo25.png', 
		hashTags: ['tag2', 'tag3', 'tag1', 'tag4', 'tag0'], 
		likes: []
	}
	];

	function reversedArray(array) {
		result = Array(array.length);
		for (var i = 0; i < array.length; ++i)
			result[i] = array[array.length - i - 1];
		return result;
	}

	function isString(string) {
		return (string instanceof String) || (typeof string === 'string');
	}
	/*  
	filterConfig: { 
		authors: array of strings, 
		dates: array of Dates, 
		hashTags: array of strings
	}
	*/
	var module = {
		getPhotoPosts : function(skip=0, top=10, filterConfig={}) {
			if (!(Number.isInteger(skip)) ||
				!(Number.isInteger(top)) || 
				!(filterConfig instanceof Object)) {
				return undefined;
			}
			// all posts already sorted, but in reversed order
			var result = reversedArray(photoPosts).slice(skip, photoPosts.length);
			result = result.filter(function(post) {
				if (Array.isArray(filterConfig.authors))
					if (!filterConfig.authors.includes(post.author))
						return false;
				if (Array.isArray(filterConfig.dates))
					if (!filterConfig.dates.map(function(item) { return item.getTime() })
						.includes(post.createdAt.getTime()))
						return false;
				if (Array.isArray(filterConfig.hashTags)) {
					return post.hashTags.some(function(item) {
							   return filterConfig.hashTags.includes(item);
							});
				}
				return true;
			});
			return result.slice(0, top);
		}, 

		getPhotoPost : function(id) {
			return photoPosts.find(function(item) { return item.id == id; });
		},

		validatePhotoPost : function(post) {
			return (post instanceof Object) &&
			(isString(post.id)) &&
			(isString(post.description)) && (post.description.length < 200) &&
			(post.createdAt instanceof Date) &&
			(isString(post.author)) && (post.author != '') &&
			(isString(post.photoLink)) && (post.photoLink != '') &&
			(post.hashTags instanceof Array) &&
			(post.likes instanceof Array);
		},

		addPhotoPost : function(post) {
			if (this.validatePhotoPost(post) && 
				(this.getPhotoPost(post.id) == undefined)) {
				if (photoPosts[photoPosts.length - 1].createdAt <= post.createdAt)
					photoPosts.push(post);
				else {
					var i = photoPosts.findIndex(function(item) { 
						return item.createdAt >= post.createdAt; 
					});
					photoPosts.splice(i, 0, post);
				}
				return true;
			}
			return false;
		},

		editPhotoPost : function(id, post) {
			if (!(post instanceof Object) || 
				(isString(post.description) && (post.description.length >= 200))) {
				return false;
			}
			var postToChange = this.getPhotoPost(id);
			if (!this.validatePhotoPost(postToChange)) {
				return false;
			}
			var properties = ['description', 'photoLink', 'hashTags'];
			properties.forEach(function(property) {
				if (post[property] != undefined) {
					postToChange[property] = post[property];
				}
			});
			return true;
		},

		removePhotoPost : function(id) {
			var index = photoPosts.findIndex(function(item) {return item.id == id;});
			if (index == -1)
				return false;
			photoPosts.splice(index, 1);
			return true;
		}
	}

	window.module = module;

	// tests starts

	function isSorted(array, comparator=function(x, y) { return x <= y; })
	{
		if (!Array.isArray(array))
			return "not Array";
		return array.every(function(item, index, array) {
			if (index == 0)
				return true;
			else
				return comparator(array[index - 1], array[index]);
		});
	}

	function isSortedDates(array) {
		return isSorted(array, function(x, y) { return x.createdAt >= y.createdAt; });
	}


	function getPhotoPostsTests() {
		console.log('tests of getPhotoPosts');
		var res = module.getPhotoPosts(5, 10, {});
		console.log(isSortedDates(res));
		console.log(res);
		res = module.getPhotoPosts(0, 10, { 
			hashTags:['tag1', 'tag3', 'tag2'], 
			authors:['user1', 'user2'], 
			dates:[new Date(2019, 0, 13), new Date(2019, 0, 12), new Date(2019, 0, 11)]});
		console.log(isSortedDates(res));
		console.log(res);
		res = module.getPhotoPosts(undefined, 20, null);
		console.log(isSortedDates(res));
		console.log(res);
	}

	function getPhotoPostTests() {
		console.log('tests of getPhotoPost');
		console.log(module.getPhotoPost('5'));
		console.log(module.getPhotoPost(10));
		console.log(module.getPhotoPost(null));
	}

	function validatePhotoPostTests() {
		console.log('tests of validatePhotoPost');
		console.log(module.validatePhotoPost(photoPosts[5]));
		console.log(module.validatePhotoPost({	
			id: '24',
			description: 'original description 24',
			createdAt: new Date(2019, 0, 14),
			author: 'user1',
			photoLink: 'photo24.png'
		}));
		console.log(module.validatePhotoPost(undefined));
		console.log('should be true false false');
	}

	function addPhotoPostTests() {
		console.log('tests of addPhotoPost');
		console.log(module.addPhotoPost({
			id: '26',
			description: 'original description 26',
			createdAt: new Date(2019, 0, 14),
			author: 'user3',
			photoLink: 'photo26.png', 
			hashTags: ['tag2', 'tag0', 'tag1', 'tag3'], 
			likes: []
		}));
		console.log(module.addPhotoPost({
			id: '50', 
			description: 'original description 27',
			createdAt: new Date(2012, 11, 10),
			author: 'user4',
			photoLink: 'photo27.png',
			hashTags: ['tag1', 'tag6'],
			likes: []
		}));
		console.log(module.addPhotoPost(20));
		console.log('should be true true false');
		console.log(module.getPhotoPost(50));
		console.log(module.validatePhotoPost(module.getPhotoPost(50)));
	}

	function editPhotoPostTests() {
		console.log("tests of editPhotoPost");
		console.log(module.editPhotoPost(50, { 
			createdAt: new Date(2019, 0, 15), 
			description: 'changed description', 
			hashTags:['tag3', 'tag4']
		}));
		console.log(module.editPhotoPost('40', {}));
		console.log(module.editPhotoPost(null, {}));
		console.log('should be true false false');
		console.log(module.getPhotoPost('50'));
	}

	function removePhotoPostTests() {
		console.log('tests of removePhotoPost');
		console.log(module.removePhotoPost(50));
		console.log(module.removePhotoPost('26'));
		console.log(module.removePhotoPost('40'));
		console.log('should be true true false');
	}

	getPhotoPostsTests();
	getPhotoPostTests();
	validatePhotoPostTests();
	addPhotoPostTests();
	editPhotoPostTests();
	removePhotoPostTests();
	console.log(photoPosts);
}());



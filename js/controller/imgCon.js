angular.module('wzpdAPP', ['ui.bootstrap', 'ngAnimate']).controller('CarouselDemoCtrl', function($scope) {
	$scope.myInterval = 2000;
	$scope.noWrapSlides = false;
	var slides = $scope.slides = [];
	$scope.addSlide = function() {
		var newWidth = 600 + slides.length + 1;
		slides.push({
			image: 'http://steamcommunity-a.akamaihd.net/economy/image/U8721VM9p9C2v1o6cKJ4qEnGqnE7IoTQgZI-VTdwyTBeimAcIoxXpgK8bPeslY9pPJIvB5IWW2-452kaM8heLSRgleGArrBBwe94OfEh0bOlAlopvOVPAWe3GEKAgj6ULuupkVhtYZ0pIxzzk5gY59xSWJ95SOIxsbCuJg/800x600',
			text: '1 & Vanilla',
		});
		slides.push({
			image: 'http://steamcommunity-a.akamaihd.net/economy/image/U8721VM9p9C2v1o6cKJ4qEnGqnE7IoTQgZI-VTdwyTBeimAcIoxXpgK8bPeslY9pPJIvB5IWW2-452kaM8heLSRgleGArrBBwe94PqYvguSpXFVwv-URAD3mGBHRgzaceuqqk1BlN5IrcUvxlp8d5t8BX595SOKdq0CMpw/800x600',
			text: '2 & Vanilla',
		});
		slides.push({
			image: 'http://cdn.steamcommunity.com/economy/image/U8721VM9p9C2v1o6cKJ4qEnGqnE7IoTQgZI-VTdwyTBeimAcIoxXpgK8bPeslY9pPJIvB5IWW2-452kaM8heLSRgleGArrBBwe94PqUrgrStA1tw6OZBXGTgH0fQ1j-WeOeskQUxYcYuI02hkpgYuNZRW595SOLioa6j6w/800x600',
			text: '3 & Vanilla',
		});
		slides.push({
			image: 'http://steamcommunity-a.akamaihd.net/economy/image/U8721VM9p9C2v1o6cKJ4qEnGqnE7IoTQgZI-VTdwyTBeimAcIoxXpgK8bPeslY9pPJIvB5IWW2-452kaM8heLSRgleGArrBBwe94aqAq0-T4CVtyvLEUV2C1F0jU3mOTfrqqwlM0McZ9cBv0yckdvNxTUJ95SOId8xoS5w/800x600',
			text: '4 & Vanilla',
		});
	};
	//$scope.addSlide();

	$scope.items = [];
	var items = $scope.items;
	$scope.addItems = function() {
		items.push({
			url:'/wzpd/img/lb/3.jpg',
			title:'美女',
			price:'1200'
		});
		items.push({
			url:'/wzpd/img/lb/4.jpg',
			title:'美女',
			price:'1200'
		});
		items.push({
			url:'/wzpd/img/lb/3.jpg',
			title:'美女',
			price:'1200'
		});
		items.push({
			url:'/wzpd/img/lb/4.jpg',
			title:'美女',
			price:'1200'
		});
	}
	$scope.addItems();

});
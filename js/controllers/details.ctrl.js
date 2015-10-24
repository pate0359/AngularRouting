angular.module('Booya')
	.controller('DetailsCtrl', function ($scope, $routeParams, Items) {

		$scope.itemId = $routeParams.itemID;
		$scope.item = {};

		//$http({method:'GET', url:'data/items.json'})
		Items.getOne($scope.itemId)
			.then(function (response) {
				//success
				var items = response.data.items;
				items.forEach(function (i) {
					if (i.id == $routeParams.itemID) {
						$scope.item = i;
					}
				});
			}, function (response) {
				//error

			});
	});
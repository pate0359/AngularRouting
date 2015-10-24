angular.module('Booya')
.factory('Items',function ItemsFactory($http){
	
	return{
		
		getAll:function()
		{
			return $http({method:'GET', url:'data/items.json'});
		},
		getOne:function()
		{
			return $http({method:'GET', url:'data/items.json'});
		},
	}
})
            angular.module('mySharedElements',[])
			.provider('configurableService', 
			function () {
			    var name = '';
			    this.setName = function (newName) {
			        name = newName;
			    };
			    this.$get = function () {
			        return name;
			    };
			});
			
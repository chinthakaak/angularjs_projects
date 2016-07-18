                angular.module('myAppModule', ['mySharedElements'])
                .controller('MyController',function($scope,dateTimeService)
                    {
                        	$scope.theDate = dateTimeService.getDate();
					        $scope.theTime = dateTimeService.getTime();
                    });
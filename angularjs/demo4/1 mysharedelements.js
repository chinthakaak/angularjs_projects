                angular.module("mySharedElements", [])
                .directive("myDirective", function () 
                    {
                    return {
                        restrict: "AE",
                        transclude: true,
                        template: "<div style='background-color:yellow; width:300px; height:60px;' ng-transclude></div>",
                        };
                    });
                
                 // reopening mySharedElements module to add service
                angular.module("mySharedElements")
                .service('dateTimeService', function ()
                    {
                        this.getDate = function () {
                            return new Date().toDateString();
                        }
                        this.getTime = function () {
                            return new Date().toLocaleTimeString();
                        }
                    });
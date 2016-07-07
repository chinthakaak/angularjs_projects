
    var mathApp = angular.module('mathApp',[]);

            mathApp.service('MathService', function () 
            {			  
			    this.add = function (x,y) {
                    alert('Addition!');
			        return x+y;
			    }
			    this.mult = function (x,y) {
                    alert('Multiplication!');
			        return x*y;
			    }
			});
			
			mathApp.service('CalculatorService', function ()
             {    
			    this.square = function (x) {
			        return x*x;
			    }
			    this.cube = function (x) {
			        return x*x*x;
			    }
			});
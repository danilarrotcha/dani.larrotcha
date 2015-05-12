'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		var options = [{
			value: 'solid',
			text: 'be SOLID'
		}, {
			value: 'clean_code',
			text: 'Code Clean'
		}, {
			value: 'xp_programming',
			text: 'XP Programming'
		}, {
			value: 'get_inspired',
			text: 'Get INspired!'
		}],
		selfScope = $scope;

		// This provides Authentication context.
		$scope.authentication = Authentication;
		$scope.options = options;

		$scope.currentOption = options[0].value;

		$scope.changeOption = function(option){
			var currentOpt = options.filter(function(opt){
				return opt.value === option;
			});
			if(currentOpt && currentOpt.length === 1){
				selfScope.currentOption = currentOpt[0].value;
			} else{
				selfScope.currentOption = options[0].value;
			}
		};
	}
]);
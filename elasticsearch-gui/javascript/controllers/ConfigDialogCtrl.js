(function () {
    
    function ConfigDialogCtrl($scope, $modalInstance, configuration){
    $scope.configuration = configuration;

    $scope.close = function (result) {
        $modalInstance.close($scope.configuration);
    };

}

    angular
      .module('myApp')
      .controller('ConfigDialogCtrl', ['$scope', '$modalInstance', 'configuration', ConfigDialogCtrl]);
})();

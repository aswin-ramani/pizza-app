app.controller('PizzaCtrl', ['$scope','$stateParams', function($scope, $stateParams){  
 //  console.log;
    $scope.id = $stateParams.id;
    $scope.toppings = [ 'onions', 'tomato', 'cheese', 'capsicum/bell pepper', 'jalapenos', 'artichokes', 'paneer', 'olive', 'babycorn', ] 
    
    $scope.price = 0;
    
    $scope.addPrice = function(){
        
        $scope.price += 20;
        console.log("adding price");
        console.log($scope.price);
        
    };
    
                             //shgfgfsg
    
        
}]);
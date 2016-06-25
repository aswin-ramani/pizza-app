app.controller('PostCtrl', ['$scope','$stateParams','Posts',function($scope, $stateParams, Posts){
    
    $scope.heading = 'data from api';
    
    $scope.posts = Posts.default();
    
    
    if (typeof($stateParams.id) !== "undefined" && 
      $stateParams.id !== null && $stateParams.id !== "") {
     Posts.get($stateParams.id, $scope.posts);
    } else {
      Posts.list($scope.posts);
    }
    
    //console.log($scope.posts);
    
}]);
                             
                             
                             
                             
//Factory
app.factory('Posts', ['$http', function($http){
    
    var get_default = function(){
        return({
            single: {},
            list: []
        })
    };
    
   
    
    var get_list = function(posts){
        return($http.get('http://localhost:3000/posts')
               .success(function(result){
                          console.log(result)

              posts.list = result;
        }) 
               .error(function(data, status){
             console.log(data);
        })
    )};
    
     var get_single = function(post_id, posts){
        return($http.get('http://localhost:3000/posts/' + post_id)
               .success(function(response){
           posts.single = response; 
            //console.log(result);
        })
               .error(function(data, status){
            console.log(data);
        })
        )
    };
    
        
    return({
        default: get_default,
        list: get_list,
        get: get_single
    });
                             
}]);                             
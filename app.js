//MODULE
var app =  angular.module('postApp',['ui.router']);

//ROUTES

app.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){
    
    
    $stateProvider
    
    .state('main',{
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    })
    
    .state('about',{
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
    })
    
   .state('pizzas',{
        url:'/pizzas',
        templateUrl: 'views/pizzas/index.html',
        controller: 'PizzaCtrl'
    })
    
  
    .state('pizzas_detail',{
        url:'/pizzas/:id',
        templateUrl: 'views/pizzas/show.html', 
        controller: 'PizzaCtrl'
    })
    
    .state('contact',{
        url:'/contact',
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
    })
    
    $urlRouterProvider.otherwise('/');

}]);

//CONTROLLERS






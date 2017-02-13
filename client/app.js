var app=angular.module('app',['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl:'partials/dashboard.html',
    css: 'css/style.css'
  })
  .when('/logreg',{
    templateUrl:'partials/logreg.html',
    css: 'css/style2.css'
  })
  .when('/logreg2',{
    templateUrl:'partials/logreg2.html',
    css: 'css/style2.css'
  })
  .when('/contactus',{
    templateUrl:'partials/contactus.html',
  })
  .when('/catering',{
    templateUrl:'partials/catering.html',
    css:'css/catering.css'
  })
  .when('/menu',{
    templateUrl:'partials/menu.html'
  })
  .otherwise({
    redirectTo:'/'
  })
})
function onLoadFunction(){
    gapi.client.setApiKey('AIzaSyDImExSBW2S93Z7gJvMg4aGAia52bv2xNg');
    gapi.client.load('plus','v1',function(){});
}

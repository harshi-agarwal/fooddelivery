app.factory('sessionFactory',function($http,$location){
  var factory={};
  factory.logReg=function(user){
      console.log(user,"i am factory");
    $http.post('/user/login' ,user).then(function(data){
      console.log(data);
      if(data.errors){
        // console.log(data.errors.name.message);
        cb(data.errors.name.message);
      }
      if(data.status && (data.data.data == "olduser")){
        console.log("i am old user"+data.data.data);
          $location.url('/dashboard');
      }
      else{
      console.log("i am newuser"+data.data.data)
        $location.url('/logreg2');
      }
    })
  }
  factory.checkSess=function(cb){
    $http.get('/user/checksess').then(function(data){
    if(data == ""){
      $location.url('/logreg')
    }
    else{
      cb(data);
    }
    })
  }
  return factory;
})

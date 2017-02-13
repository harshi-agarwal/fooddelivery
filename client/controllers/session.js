app.controller('Sessioncontroller',function($scope,sessionFactory,$location){
  $scope.gmail={
    username:"",
    email:""
  };
  sessionFactory.checkSess(function(data){
          $scope.session_user=data;
        console.log($scope.session_user,"i am controller check");
      })
  $scope.onGoogleLogin=function(){
    var params={
      'clientid':'341107495356-2607a79s7n0qedjq5e5tep8ncrqas738.apps.googleusercontent.com',
      'cookiepolicy':'single_host_origin',
      'callback':function(result){
          if(result['status']['signed_in']){
            var request=gapi.client.plus.people.get({'userId':'me'});
            request.execute(function(resp){
              $scope.$apply(function(){
                $scope.gmail.username=resp.displayName;
                $scope.gmail.email=resp.emails[0].value;
                $scope.g_image=resp.image.url;
                // console.log(resp);
                sessionFactory.logReg({email:$scope.gmail.email,name:$scope.gmail.username},function(data){
                $scope.error=data;
                console.log($scope.error);
    });
        });
            });
          }
      },
      'approvalprompt':'force',
      'scope':'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
    };
    gapi.auth.signIn(params);
  };
  // $scope.name="Login please";
  // $scope.FBLogin=function(){
  //   FB.login(function(response){
  //     if (response.status ==='connected')
  //     {
  //       console.log(response);
  //       document.getElementById('status').innerHTML="we are connnected";
  //     }
  //     else if(response.status ==='not_authorized')
  //     {
  //       document.getElementById('status').innerHTML="we are not logged in";
  //     }
  //     else{
  //       document.getElementById('status').innerHTML="we are not logged into facebook";
  //
  //     }
  //   })
  // }
});

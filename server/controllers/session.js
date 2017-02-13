 var mongoose=require('mongoose');
 var User=mongoose.model('User');
module.exports=(function(){
  return{
    logReg:function(req,res){
      // console.log(req.body,"i am sessioncontroller");
      // var table = new AWS.DynamoDB({apiVersion: '2012-08-10', params: {TableName: 'user'}});
      // var key = 'sankhla2@gmail.com';
      // var location = 'Blackfoot';
      //
      // // Write the item to the table
      // var itemParams = {
      //    Item: {
      //      email: {S: key},
      //      location: {S: location}
      //    }
      // };
      //
      // table.getItems
      // table.putItems(itemParams)

      User.findOne({email:req.body.email},function(err,user)
      {
           if(!user){
             console.log(req.body);
             var user=new User({email:req.body.email,name:req.body.name,kind:false});
             user.save(function(err,user){
            if(err){
                res.json(err);
            }
            else{
              req.session.user=user;
              console.log(req.session.user);
              req.session.save()
              console.log("new user at server");
               res.json({status:true,data:"new user"})
             }
            })
          }
          else{
           req.session.user=user;
           req.session.save()
           console.log("old user at server");
           res.json({status:true,data:"olduser"})
         }
       })
    },
    checkSess: function(req, res){
      console.log("hey checksess",req.session.user);
			if(req.session.user){
				res.json(req.session.user)
			}else{
				res.send(null)
			}
		},
    logout:function(req,res){
      console.log(req.session.user)
      req.session.destroy()
      res.redirect('/')
    },
}
})();

var session=require('./../controllers/session.js');
module.exports=function(app){
  app.post('/user/login',session.logReg)
  app.get('/user/checksess', session.checkSess)
  app.get('/logout',session.logout)

}

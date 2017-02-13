$(document).ready(function(){
  //set options
  var speed=500;              //fadeout speed
  var autoswitch=true;       //auto switch options
  var autoswitch_speed=3000; //auto slider speed

  // add initial active class
  $('.slide').first().addClass('active');
  // Hide all slides
  $('.slide').hide();
  // show first class
  $('.active').show();
  // chnage the slide on clicking next
  $('#next').on('click',function(){
  $('.active').removeClass('active').addClass('oldActive');
  if($('.oldActive').is(':last-child'))
  {
    $('.slide').first().addClass('active');
  }
  else
  {
    $('.oldActive').next().addClass('active');
  }
  $('.oldActive').removeClass('oldActive');
  $('.slide').fadeOut(speed);
  $('.active').fadeIn(speed);
  });
  // change the slide on clicking prev
  $('#prev').on('click',function(){
  $('.active').removeClass('active').addClass('oldActive');
  if($('.oldActive').is(':first-child'))
  {
    $('.slide').last().addClass('active');
  }
  else
  {
    $('.oldActive').prev().addClass('active');
  }
  $('.oldActive').removeClass('oldActive');
  $('.slide').fadeOut(speed);
  $('.active').fadeIn(speed);
  });
  // auto slider function
  if(autoswitch == true){
    setInterval(function(){
      $('.active').removeClass('active').addClass('oldActive');
      if($('.oldActive').is(':last-child'))
      {
        $('.slide').first().addClass('active');
      }
      else
      {
        $('.oldActive').next().addClass('active');
      }
      $('.oldActive').removeClass('oldActive');
      $('.slide').fadeOut(speed);
      $('.active').fadeIn(speed);
  },autoswitch_speed);
  }
});

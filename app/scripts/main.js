console.log('\'Allo \'Allo!');

$(document).ready(function(){
  $('.slider').slider({
      full_width: true,
      height: 900
  });



  $('.materialboxed').materialbox();


  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });
});

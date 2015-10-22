console.log('\'Allo \'Allo!');

$(document).ready(function(){
  $('.slider').slider({
      full_width: true,
      height: 900
  });


  var options = [
      {selector: '#main-nav', offset: 50, callback: 'Materialize.toast("This is our ScrollFire Demo!", 1500 )' },
      {selector: '#main-nav', offset: 205, callback: 'Materialize.toast("Please continue scrolling!", 1500 )' },
      {selector: '#main-nav', offset: 400, callback: 'Materialize.showStaggeredList("#staggered-test")' },
      {selector: '#image-test', offset: 5000, callback: 'Materialize.fadeInImage("#image-test")' }
  ];
  Materialize.scrollFire(options);


  $('.materialboxed').materialbox();


  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });
});

var $mammals = $('.mammals');
var $plesiosaurs = $('.plesiosaurs');
var $dinosaurs = $('.dinosaurs');
var $pterosaurs = $('.pterosaurs');

// http://imakewebthings.com/waypoints/

$mammals.waypoint(function (direction) {
  if (direction == 'down') {
    $mammals.addClass('js-fade-animate');
  } else {
    $mammals.removeClass('js-fade-animate');
  }
}, {offset: '50%'});

$plesiosaurs.waypoint(function (direction) {
  if (direction == 'down') {
    $plesiosaurs.addClass('js-fade-animate');
  } else {
    $plesiosaurs.removeClass('js-fade-animate');
  }
}, {offset: '50%'});

$dinosaurs.waypoint(function (direction) {
  if (direction == 'down') {
    $dinosaurs.addClass('js-fade-animate');
  } else {
    $dinosaurs.removeClass('js-fade-animate');
  }
}, {offset: '50%'});

$pterosaurs.waypoint(function (direction) {
  if (direction == 'down') {
    $pterosaurs.addClass('js-fade-animate');
  } else {
    $pterosaurs.removeClass('js-fade-animate');
  }
}, {offset: '50%'});

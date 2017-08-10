var $mammals = $('.mammals');
var $plesiosaurs = $('.plesiosaurs');
var $dinosaurs = $('.dinosaurs');
var $pterosaurs = $('.pterosaurs');

// http://imakewebthings.com/waypoints/

$mammals.waypoint(function () {
  console.log('waypoint');
  $mammals.addClass('js-fade-animate');
}, {offset: '50%' });

$plesiosaurs.waypoint(function () {
  console.log('waypoint');
  $plesiosaurs.addClass('js-fade-animate');
}, {offset: '50%' });

$dinosaurs.waypoint(function () {
  console.log('waypoint');
  $dinosaurs.addClass('js-fade-animate');
}, {offset: '50%' });

$pterosaurs.waypoint(function () {
  console.log('waypoint');
  $pterosaurs.addClass('js-fade-animate');
}, {offset: '50%' });

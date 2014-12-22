//Script to get the background url from momentum chrome extension - Vivek Bharatha

var bgUrl = $('#background > li').css('background-image').match(/\((.+?)\)/)[1];
window.open(bgUrl);

$(function() {
  $('a.vcard').hover(
    function() {
      $("#vcard-tooltip").animate({opacity: 1}, 250);
    }, 
    function() {
      $("#vcard-tooltip").animate({opacity: 0}, 250);
    }
  );
});

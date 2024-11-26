// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

$(document).ready(function() {
    $(".modal").on("hidden.bs.modal", function(e) {
      var $video = $(this).find("video");
      $video.each(function() {
        this.pause();
      });
    });
  });  


$('.navbar a').on('click', function(e){
    if(this.hash !== ''){
        e.preventDefault();

        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top-100
        },
        800
        );
    }
});


$('.top').click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
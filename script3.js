$(document).ready(function() {

    // DIGITAL CLOCK code

    function displayTime() {
        /*this will get the current date and time and store it in a
        variable called currentTime*/

        var currentTime = new Date();

        /*code below is where we get the values we want from our
        currentTime variable and store each value in separate
        variables*/


        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var meridiem = 'AM';


        // Convert from 24 hour to 12 hour format
        // and keep track of the meridiem.

        if (hours > 12) {
            hours = hours - 12;
            meridiem = 'PM';
        }

        // 0 AM and 0 PM should read as 12
        if (hours === 0) {
            hours = 12;
        }

        /*the if statement adds a 0 infront of seconds if its
        less than 10s. DOES THE SAME FOR HOURS & MINUTES*/
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        if (hours < 10) {
            hours = "0" + hours;
        }


        //code below stores id clock in variable
        var clockDiv = document.getElementById('clockDiv');

        //code displays the the time in variable clockDiv
        clockDiv.innerHTML = "LONDON" + "<br>" + hours + ":" + minutes + ":" + seconds + " " + meridiem;



    }







    var menutoggle = function() {
        /*menu jQuery variables*/
        var $menubtn = $('.menu-btn');
        var $nav = $('.navbar');
        var $closebtn = $('.close-btn');

        $($menubtn).click(function() {
            $($nav).animate({
                left: "0px"
            }, 600);

        });

        $($closebtn).click(function() {
            $($nav).animate({
                left: "-20em"
            }, 600);

        });
    };

    var arrowButtons = function() {
        /*arrow variables*/
        var $arrowDown = $('#a-down');
        var $arrowLeft1 = $('#a-left');
        var $arrowRight1 = $('#a-right');

        var $arrowUp = $('#a-up');
        var $arrowRight2 = $('#a-right2');
        var $arrowLeft2 = $('#a-left2');


        /*arrow buttons jumbotron 1*/

        $($arrowDown).click(function() {
            $('.jumbotron2').animate({
                top: "0%"
            }, 600);

            $('.fl').removeClass('flip');
        });

        $($arrowLeft1).click(function() {
            $('.jumbotron4').animate({
                left: "0%"
            }, 600);

            $('.fl').removeClass('flip');

            var $window = $(window),
                $collapse = $('#collapseOne');

            var myArray = [$('#collapseOne'), $('#collapseTwo'), $('#collapseThree')];

            function resize() {
                if ($window.width() > 325) {

                    if (myArray.length > 0) {
                        for (var i = 0; i < myArray.length; i++) {
                            return myArray[i].addClass('in');
                        }
                    }

                }

            }

            $window
                .resize(resize)
                .trigger('resize');
        });

        $($arrowRight1).click(function() {

            $('.jumbotron3').animate({
                left: "0%"
            }, 600);

            $(".a-left02").css({
                "visibility": "visible"
            });

            $('.fl').removeClass('flip');
        });


        /*arrow buttons jumbotron 2*/
        $($arrowUp).click(function() {
            $('.jumbotron2').animate({
                top: "100%"
            }, 600);

            $('.fl').addClass('flip');
        });

        /*arrow buttons jumbotron 4*/
        // $($arrowRight2).click(function() {
        //     $('.jumbotron4').animate({
        //         left: "-100%"
        //     }, 600);
        //
        //     $('.fl').addClass('flip');
        // });


        /*arrow buttons jumbotron 3*/
        $($arrowLeft2).click(function() {
            $('.jumbotron3').animate({
                left: "100%"
            }, 600);

            $(".a-left02").css({
                "visibility": "hidden"
            });

            $('.jumbotron3').addClass('fadeOut');

            $('.fl').addClass('flip');
        });

    }

    /*about page js code*/

    var arrowAbout = function() {
        var $ab_arrow1 = $('#cdown');
        var $ab_arrow2 = $('#cclose');

        $($ab_arrow1).click(function() {
            $('.ab-jumbotron2').animate({
                top: "0%"
            }, 600);
        });

        $($ab_arrow2).click(function() {
            $('.ab-jumbotron2').animate({
                top: "100%"
            }, 600);
        });
    }

    var formCode = function() {
        var $input1 = $('#ip1');
        var $input2 = $('#ip2');
        var $input3 = $('#ip3');

        var $lbl1 = $('#lbl1');
        var $lbl2 = $('#lbl2');
        var $lbl3 = $('#lbl3');
        var i = 0;

        var lblArray = [$lbl1, $lbl2, $lbl3];

        /*FIRST form input*/
        $($input1).click(function() {
            $(lblArray[0]).animate({
                marginLeft: "20%"
            }, 300);


        });

        $($input1).mouseleave(function() {
            $(lblArray[0]).animate({
                marginLeft: "0%"
            }, 300);
        });


        /*SECOND form input*/
        $($input2).click(function() {
            $(lblArray[1]).animate({
                marginLeft: "20%"
            }, 300);


        });

        $($input2).mouseleave(function() {
            $(lblArray[1]).animate({
                marginLeft: "0%"
            }, 300);
        });


        /*THIRD form input*/
        $($input3).click(function() {
            $(lblArray[2]).animate({
                marginLeft: "20%"
            }, 300);


        });

        $($input3).mouseleave(function() {
            $(lblArray[2]).animate({
                marginLeft: "0%"
            }, 300);
        });



    }

    var slideArtists = function() {

        var $slide1 = $('.sb1');
        var $slide2 = $('.sb2');
        var $slide3 = $('.sb3');

        var $one = $('#ctrl01');
        var $two = $('#ctrl02');
        var $three = $('#ctrl03');

        $($one).click(function() {

            if ($($slide1).hasClass('fadeOut')) {
                $($slide1).removeClass('fadeOut').addClass('fadeIn');
            }

            if ($('#ctrl02, #ctrl03').hasClass('active-btn')) {
                $('#ctrl02, #ctrl03').removeClass('active-btn');
                $('#ctrl01').addClass('active-btn');
            }


        });


        $($two).click(function() {

            $($slide1).addClass('fadeOut');
            // $($slide2).css('z-index', '1');

            if ($($slide2).hasClass('fadeOut')) {
                $($slide2).removeClass('fadeOut').addClass('fadeIn');
            }

            // $($slide2).animate({
            //   top: "-100px"
            // }, 600);

            if ($('#ctrl01, #ctrl03').hasClass('active-btn')) {
                $('#ctrl01, #ctrl03').removeClass('active-btn');
                $('#ctrl02').addClass('active-btn');
            }

        });

        $($three).click(function() {
            $($slide1).addClass('fadeOut');
            $($slide2).addClass('fadeOut');





            if ($('#ctrl02, #ctrl01').hasClass('active-btn')) {
                $('#ctrl01, #ctrl02').removeClass('active-btn');
                $('#ctrl03').addClass('active-btn');
            }

        });


    }

    var slideMusic = function() {
        $('.vMore').click(function() {
            $('.jumbotron-a2').animate({
                left: "0%"
            }, 600);


        });

        $('#ap-close').click(function() {
            $('.jumbotron-a2').animate({
                left: "-100%"
            }, 600);
        })


    }

    var fadeinbox = function() {
        $('.musicbox').click(function() {
            $('.scloud-embed, .row-mdl').addClass('animated fadeIn');
        })
    }

    var gallerycover = function() {
        var $galleryInfo = $('.gallery-info');


        if ($($galleryInfo).hover(function() {

                $(this).css({
                    "height": "100%"
                });
                $(this).animate({
                    top: "0%"
                }, 100);

            }, function() {
                if ($(window).width() < 767) {
                  $(this).css({
                      "height": "84px"
                  });
                  $(this).animate({
                      top: "90px"
                  }, 300);
                } else if($(window).width() > 768 && $(window).width() < 1024){
                  $(this).css({
                      "height": "82px"
                  });
                  $(this).animate({
                      top: "75px"
                  }, 300);
                } else if($(window).width() > 1024){
                  $(this).css({
                      "height": "86px"
                  });
                  $(this).animate({
                      top: "150px"
                  }, 300);
                }


            }));

    }

    // $("p").hover(function(){
    //     $(this).css("background-color", "yellow");
    //     }, function(){
    //     $(this).css("background-color", "pink");
    // });



    // var $vmore = $('#vMore2');
    //
    //  $($vmore).click(function(){
    //
    //     if (window.addEventListener) // older FF
    //         window.addEventListener('DOMMouseScroll', preventDefault, false);
    //     window.onwheel = preventDefault; // modern standard
    //     window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    //     window.ontouchmove  = preventDefault; // mobile
    //     document.onkeydown  = preventDefaultForScrollKeys;
    //
    // });

    // var modalcustom = function(){
    //   $('.bm-1').click(function(){
    //     // Load up a new modal...
    //     $('#scloud-modal-2').modal('show');
    //
    //     $('#scloud-modal-1').modal('hide');
    //
    //
    //
    //
    //   });
    //
    // }





    //
    // TweenMax.to(".logo-artists", 0.5, {
    //     opacity: 0,
    //     scale: 1.8,
    //     ease: Bounce.easeIn
    // });

    gallerycover();
    fadeinbox();

    slideMusic();
    slideArtists();
    formCode();
    arrowAbout();
    arrowButtons();
    menutoggle();

    displayTime();
    setInterval(displayTime, 1000);


    //
    //     var keys = {37: 1, 38: 1, 39: 1, 40: 1};
    //
    // function preventDefault(e) {
    //   e = e || window.event;
    //   if (e.preventDefault)
    //       e.preventDefault();
    //   e.returnValue = false;
    // }
    //
    // function preventDefaultForScrollKeys(e) {
    //     if (keys[e.keyCode]) {
    //         preventDefault(e);
    //         return false;
    //     }
    // }
    //
    //
    //
    // function enableScroll() {
    //     if (window.removeEventListener)
    //         window.removeEventListener('DOMMouseScroll', preventDefault, false);
    //     window.onmousewheel = document.onmousewheel = null;
    //     window.onwheel = null;
    //     window.ontouchmove = null;
    //     document.onkeydown = null;
    // }



});

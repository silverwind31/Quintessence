    $(document).ready(function(e){

       // ANIMATION 
  new WOW().init();

  const theme = document.querySelector("body");
  let darkMode = localStorage.getItem("dark-mode");
  let toggleBtn = $(".dark_mode_toggle");

  const enableDarkMode = () => {
    theme.classList.add("darkMode");
    localStorage.setItem("dark-mode", "enabled");
  };

  const disableDarkMode = () => {
    theme.classList.remove("darkMode");
    localStorage.setItem("dark-mode", "disabled");
  };

  if (darkMode === "enabled") {
    enableDarkMode(); // set state of darkMode on page load
  }

  toggleBtn.on("click", (e) => {
    darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
    if (darkMode === "disabled") {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
      
      if(localStorage.length==0){
             // DATE FUNCTION
      $(function(e) {
        var hour = new Date().getHours();
        if (hour > 9 && hour < 18) {
          $('body').removeClass('darkMode');
        } else {
          $('body').addClass('darkMode');
        }    
        console.log(hour);
      });
      }else{
        console.log(localStorage)
      }
      // DARKMODE //

          // INDEX SWIPER
          var swiper = new Swiper(".hero_swiper", {
            slidesPerView: "auto",
            grabCursor: true,
            spaceBetween: 32,
            speed: 600, 
            autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          navigation: {
              nextEl: ".slide_next",
              prevEl: ".slide_prev",
            },
            breakpoints: {
              0:{
                  slidesPerView: "auto",
                  spaceBetween: 16,
                  
              },
              744:{
                  slidesPerView: "auto",
                  spaceBetween: 16,
              },
              1024:{
                slidesPerView: "auto",
                spaceBetween: 32,
            },
            }
        });

        // STEPS
        var mySwiper = new Swiper('main .information_container', {
          fadeEffect: { crossFade: true },
          virtualTranslate: true,
          allowTouchMove: false,
          speed: 600, 
          slidersPerView: 1,
          effect: "fade",
          spaceBetween: 16,
          navigation: {
            nextEl: '.next',
            prevEl: '.prev',
          },
          breakpoints: {
            0:{
              allowTouchMove: true,
            },
            1024:{
              allowTouchMove: true,
          },
          },
          on: {
            slideChange: function () {
              activeStep(mySwiper.activeIndex)
            }
          }
        });
        var btnsList = [].slice.call(document.querySelectorAll('[data-button-step]'));
        btnsList.forEach(function (btn) {
          btn.addEventListener('click', function () {
            var id = this.dataset.buttonStep;
            mySwiper.slideTo(id);
          })
        });
        function activeStep(id) {
          var num = parseInt(id, 10) + 1;
        
          btnsList.slice(0, num).forEach(function (el) {
            el.classList.add('active');
          });
        
          btnsList.slice(num, btnsList.length).forEach(function (el) {
            el.classList.remove('active');
          });
        }
        // END STEPS

        // LIGHTGALLERY
        lightGallery(document.querySelector('.product_information .card'), {
          thumbnail: true,
          selector: 'a',
        });
        var images = document.querySelectorAll('.categories .images_row a');
        lightGallery(document.querySelector('.categories .images_row'), {
          thumbnail: true,
          selector: images,
        });      
        // COMPARISON IMAGES
        $(function(){
          $("main section.preview .preview_content").cndkbeforeafter({
              autoSliding:true,
              showText:false,
              hoverEffect:false,
              autoSlidingStopOnHover:true,
            });            
          });
          
        $('.actions .action_item.price').on('click', function(e){
          $(this).addClass('active');
          $('.actions .action_item.projects').removeClass('active');
          $(".animation").removeClass("left");
          $(".animation").addClass("right");
          $('.prices_page').addClass('active');
          $('.projects_page').removeClass('active');
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        })
        $('.actions .action_item.projects').on('click', function(e){
          $(this).addClass('active');
          $('.actions .action_item.price').removeClass('active');
          $(".animation").removeClass("right");
          $(".animation").addClass("left");
          $('.projects_page').addClass('active');
          $('.prices_page').removeClass('active');
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        })
        $('header .order_button').on('click', function(e){
          $('.call_back_modal').addClass('active'); 
          $('body').toggleClass("overflow_hidden");    
        })
        $('.main_brief .brief_button').on('click', function(e){
          $('.call_back_modal').addClass('active'); 
          $('body').toggleClass("overflow_hidden");    
        })

        $('.call_back_modal .close_btn').on('click', function(e){
          $('.call_back_modal').removeClass('active');
          $('body').removeClass("overflow_hidden"); 
        })

        $('.call_back_modal .order_form .order_button').on('click', function(e){
          $('.call_back_modal .submit_modal').addClass('active');
        })

        $('.call_back_modal .submit_modal .close').on('click', function(e){
          $('.call_back_modal .submit_modal').removeClass('active');
        })
        $('.call_back_modal .submit_modal .overlay').on('click', function(e){
          $('.call_back_modal .submit_modal').removeClass('active');
        })

        let tip_1 = $(".call_back_modal .choose_item #tip_1 .tip_image");
        let tip_2 = $(".call_back_modal .choose_item #tip_2 .tip_image");

        $(tip_1).on('click', function(e){
          e.stopPropagation();
          $('.choose_container #tip_1').toggleClass('active');
          $('.call_back_modal .choose_container .overlay').toggleClass('active');
          $('.choose_container #tip_2').removeClass('active');
        })

        $(tip_2).on('click', function(e){
          e.stopPropagation();
          $('.call_back_modal .choose_container .overlay').toggleClass('active');
          $('.choose_container #tip_2').toggleClass('active');
          $('.choose_container #tip_1').removeClass('active');
        })
        
        $('.call_back_modal .choose_container .overlay').on('click', function(e){
          $('.call_back_modal .tip').removeClass('active');
          $(this).removeClass('active');
        })
        
        // MOBILE MENU

        $("header .hamburger").on('click', function(e){
          $(".mobile_header").toggleClass("active");
          $('header').toggleClass("mobile");
          $('body').toggleClass("overflow_hidden");
        })

        // LIKE BUTTON
        $('.product_information .category_action .btn-counter').on('click', function(e){
          $('.call_back_modal').addClass('active'); 
          $('body').toggleClass("overflow_hidden");  
        })

        $(window).on('scroll',function(e){
          let setValue = -100 + $(document).scrollTop() / 5;
          if(setValue < 0){
            if($(window).width() < 680){
              $('.hero_title_text').css('left',($(document).scrollTop() / 4) + '%')
              $('.hero_description_text').css('right',(-35 + $(document).scrollTop() / 3) + '%')
            }else if($(window).width() < 1024){
              $('.hero_title_text').css('left',($(document).scrollTop() / 3) + '%')
              $('.hero_description_text').css('right',(-35 + $(document).scrollTop() / 3) + '%')
            }else{
              $('.hero_title_text').css('right',(-100 + $(document).scrollTop() / 5) + '%')
              $('.hero_description_text').css('left',(-100 + $(document).scrollTop() / 5) + '%')
            }
          }else{
            if($(window).width() < 680){
              $('.hero_title_text').css('left',($(document).scrollTop() / 4) + '%')
              $('.hero_description_text').css('right',($(document).scrollTop() / 3) + '%')
            }else if($(window).width() < 1024){
              $('.hero_title_text').css('left',($(document).scrollTop() / 3) + '%')
              $('.hero_description_text').css('right',(-35 + $(document).scrollTop() / 3) + '%')
            }else{
              $('.hero_title_text').css('right',(-100 + $(document).scrollTop() / 5) + '%')
              $('.hero_description_text').css('left',(-100 + $(document).scrollTop() / 5) + '%')
            }
          }
        })
        $('.projects_item .card .card_image').mouseenter(function(e) {
          $(this).closest(".card").find(".card_title").addClass('hover');
        });
        $('.projects_item .card .card_image').mouseleave(function(e) {
          $(this).closest(".card").find(".card_title").removeClass('hover');
        });

        // INDEX TEXTS
        const items = document.querySelectorAll('.projects_item .card .card_image')
        items.forEach((el) => {
          const image = el.querySelector('.projects_item .card .product_name')
          
          el.addEventListener('mouseenter', (e) => {
            gsap.to(image, { autoAlpha: 1 })
          })
          
          el.addEventListener('mouseleave', (e) => {
            gsap.to(image, { 
              autoAlpha: 0, 
            })
          })
          
          el.addEventListener('mousemove', (e) => {
            gsap.set(image, { 
              x: e.offsetX,
              y: e.offsetY
            })
          })
        })
         
        // ABOUT US
        $(window).on('scroll',function(e){
          let setValue = 100 - $(document).scrollTop();
          if(setValue < 0){
            $('.information .block_title').css('left',(100 - $(document).scrollTop() ) + 'px')
          }else{
            $('.information .block_title').css('left',(100 - $(document).scrollTop() ) + 'px')
          }
        })

        var swiper = new Swiper(".portfolio .portfolio_block", {
          slidesPerView: 3,
          spaceBetween: 32,
          navigation: {
            nextEl: ".slide_next",
            prevEl: ".slide_prev",
          },
          autoplay: {
            delay: 10000,
            disableOnInteraction: false
          },
          pagination: {
            el: ".portfolio .portfolio_block .pagination",
            clickable: true,
          },
          breakpoints: {
            0:{
                slidesPerView: 1.2,
                spaceBetween: 30,
            },
            744:{
                slidesPerView: 1.6,
                spaceBetween: 32,
            },
            1024:{
                slidesPerView: 3,
                spaceBetween: 32,
            }
          }
        });
})

    
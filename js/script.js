$(document).ready(function () {
   // на header burger вешаем событие клик
   $('.head__burger').click(function (event) {
      // при клике на бургер и хедер меню добавился класс aktive (нажали-добав класс, нажали-убрался класс) 
      $('.head__burger, .head__menu').toggleClass('active');
      // при открытом бургере блокируем прокрутку страницы
      $('body').toggleClass('lock');
   });
});

// закрытие бургера, при нажатии на меню
const headerLinks = document.querySelectorAll('.head__menu')
headerLinks.forEach((el) => {
   el.addEventListener('click', () => {
      $('.head__burger,.head__menu').toggleClass('active');
   })
})




var time = 0.5, cc = 1;
$(window).scroll(function () {
   $('#counter').each(function () {
      var
         cPos = $(this).offset().top,
         topWindow = $(window).scrollTop();
      if (cPos < topWindow + 500) {
         if (cc < 2) {
            $('div').each(function () {
               var
                  i = 1,
                  num = $(this).data('num'),
                  step = 1000 * time / num,
                  that = $(this),
                  int = setInterval(function () {
                     if (i <= num) {
                        that.html(i);
                     }
                     else {
                        cc = cc + 2;
                        clearInterval(int);
                     }
                     i++;
                  }, step);
            });
         }
      }
   });
});


// спойлер-аккордион 
$(document).ready(function () {
   // ссылка, на которую нажимаем 
   $('.spoiler__link').click(function (event) {
      // общий класс спойлера
      if ($('.footer__top__spoiler').hasClass('one')) {
         // ссылка, на которую нажимаем 
         $('.spoiler__link').not($(this)).removeClass('hidden');
         // блок который идет сразу после ссылки
         $('.top-items__menu').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('hidden').next().slideToggle(300);
   });
});
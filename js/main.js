$(window).on('load', function() {
  $('.tender-details-tab-header-item').click(function() {
    $('.tender-details-tab-header-item').removeClass('active');
    $('.tab-content').removeClass('tab-active');
    if (!$('.tender-details-tab-header-item').hasClass('active')) {
      $(this).addClass('active');
      // Display the selected tab content
      var tab = $(this).attr('data-tab');
      tab = '.' + tab;
      $(tab).addClass('tab-active');
    } else {
      $('.tender-details-tab-header-item').removeClass('active');
    }
  });

  $('.mobile-nav__icon').click(function() {
    $('.mobile-nav ul').css({
      width: '265px',
      display: 'block'
    });
    $('.mobile-nav__bg').css('display', 'block');
  });

  $('.mobile-nav__close, .mobile-nav__bg').click(function() {
    $('.mobile-nav ul').css({
      width: '0%',
      display: 'none'
    });
    $('.mobile-nav__bg').css('display', 'none');
  });

  // Toggle switch function when span is clicked
  $('.toggle-switch-name').click(function() {
    $('#toggleSwitch').prop('checked', false);
  });
  $('.toggle-switch-code').click(function() {
    $('#toggleSwitch').prop('checked', true);
  });

  // Modal
  // მოდალის დახურვა
  $('.modal__close').click(function() {
    $('.modal').removeClass('active');
  });

  // მოდალის დახურვა გარეთ დაკლიკებისას
  $('.modal').click(function(e) {
    if (e.target.classList.contains('modal')) {
      $('.modal').removeClass('active');
    }
  });

  $('.add-user-btn').click(function() {
    $('#add-user-modal')[0].classList.add('active');
  });

  $('.header__user').click(function() {
    $('.header__user__dropdown').toggleClass('active');
  });

  // ტენდერის ფავორიტებში დამატება
  $('.tenders__add-to-fav').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('clicked');
    if ($(this).hasClass('clicked')) {
      $(this).html('<i class="fas fa-star"></i>');
    } else {
      $(this).html('<i class="far fa-star"></i>');
    }
  });

  // ტენდერის გამოწერაში ყველას მონიშვნა
  $('#check-all').click(function() {
    $('.subscribe__listing input[type="checkbox"]').prop(
      'checked',
      this.checked
    );
  });

  $('.edit').click(function() {
    this.classList.toggle('active');
    const editMenu = this.nextElementSibling;
    editMenu.classList.toggle('active');
  });

  // Search box
  $('.search-input input').keypress(function() {
    if ($('#toggleSwitch').is(':checked')) {
      $('.search-out')[0].classList.add('open');
    } else {
      $('.search-out')[0].classList.remove('open');
    }
  });
  $('.search-input input').blur(function() {
    if ($(this).val().length === 0) {
      $('.search-out')[0].classList.remove('open');
    }
  });

  $('.trade-item').each(function() {
    $(this).click(function() {
      $(this).toggleClass('active');

      let panel = this.nextElementSibling;

      // ისრის მიმართულება კლიკზე
      if (
        $(this)
          .children('div')
          .children('.fas').length > 0
      ) {
        if (
          $(this)
            .children('div')
            .children('.fas')
            .hasClass('fa-chevron-right')
        ) {
          $(this)
            .children('div')
            .children('.fas')
            .removeClass('fa-chevron-right');
          $(this)
            .children('div')
            .children('.fas')
            .addClass('fa-chevron-down');
        } else {
          $(this)
            .children('div')
            .children('.fas')
            .addClass('fa-chevron-right');
          $(this)
            .children('div')
            .children('.fas')
            .removeClass('fa-chevron-down');
        }
      }

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  // ფაილის ატვირთვის მოდალის გამოჩენა
  $('.uploadfile-btn').each(function() {
    $(this).click(function(e) {
      e.preventDefault();
      $('.modal').addClass('active');
    });
  });

  const closeChatBtns = Array.from($('.close-chat-btn'));

  closeChatBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      $('.close-chat-modal').addClass('active');
    });
  });

  $('button.cancel').click(function(e) {
    e.preventDefault();
    $('.close-chat-modal').removeClass('active');
  });

  // Terms & Services Modal
  $('.terms-services label').click(function() {
    $('.modal').addClass('active');
  });

  // ფაილის ატვირთვის ინდიკატორი
  for (var i = 0; i <= 100; i++) {
    $('.uploading').css('width', i + '%');
  }
  // ფაილის წარმატებით ატვირთვის შემთხვევაში შეიძლება uploading დივის წაშლა და
  // .add-tender-uploaded-ისთვის კლასი .success-ის მინიჭება,
  // რაც მისი border-ის ფერს შეცვლის მწვანედ;
  // წინააღმდეგ შემთხვევაში კლასი .error, რაც border-ის ფერს შეცვლის წითლად.

  // Chat messages function
  var $container = $('.chat__msgs');
  var $scrollTo = $('.msg').last();

  $container.scrollTop(
    $scrollTo.offset().top - $container.offset().top + $container.scrollTop()
  );
});

/**
 * Array.from() polyfill
 */
// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
// Production steps of ECMA-262, Edition 6, 22.1.2.1
if (!Array.from) {
  Array.from = (function() {
    var toStr = Object.prototype.toString;
    var isCallable = function(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function(value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function(value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike /*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError(
          'Array.from requires an array-like object - not null or undefined'
        );
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError(
            'Array.from: when provided, the second argument must be a function'
          );
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method
      // of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] =
            typeof T === 'undefined'
              ? mapFn(kValue, k)
              : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  })();
}

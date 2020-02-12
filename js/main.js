$(".tender-details-tab-header-item").click(function() {
  $(".tender-details-tab-header-item").removeClass("active");
  if (!$(".tender-details-tab-header-item").hasClass("active")) {
    $(this).addClass("active");
  } else {
    $(".tender-details-tab-header-item").removeClass("active");
  }
});

$(".mob-menu-icon").click(function() {
	$('.mob-menu ul').css({
		width: '265px',
		display: 'block'
	});
  $('.mob-menu-bg').css('display','block')
});

$('.mob-menu-close, .mob-menu-bg').click(function(){
	$('.mob-menu ul').css({
		width: '0%',
		display: 'none'
	});
	$('.mob-menu-bg').css('display','none')
})

// Toggle switch function when span is clicked
document.querySelector('.toggle-switch-name').addEventListener('click', () => {
	document.querySelector('#toggleSwitch').checked = false;
})
document.querySelector('.toggle-switch-code').addEventListener('click', () => {
	document.querySelector('#toggleSwitch').checked = true;
})
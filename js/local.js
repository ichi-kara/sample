$(function(){
	//inview
	inview();

	//予約用モーダル
	reserve();

	//menuのアコーディオン
	menuAccordion();

	//ページ内リンク
	innerLinkMove();
});

function inview() {
	setTimeout(function(){
		$('#header .ttl').addClass('inviewFade');
	}, 1000);

	$('.inview, .ttlInview, .firstInview, .secondInview, .thirdInview').on('inview', function(event, isInView){
		if (isInView) {
			$(this).addClass('inviewFade');
		}
	});
}

function reserve() {
	$(document).on('click', '#header .reserve', function() {
		//mask表示
		$('body').append('<div class="mask"></div>');

		//modal表示
		$('#reserve').fadeIn();
	});
	$(document).on('click', '.mask, #reserve .close', function() {
		//mask非表示表示
		$('.mask').remove();

		//modal表示
		$('#reserve').fadeOut();
	});
}

function menuAccordion() {
	$(document).on('click', '#menu .detail h3', function() {
		if ($(this).attr('class') == '') {
			$(this)
				.addClass('open')
				.next().slideDown();
		} else {
			$(this)
				.removeClass('open')
				.next().slideUp();
		}
	});
}

function innerLinkMove () {
	$(document).on('click', 'a[href^="#"]', function() {
		var target = $(this).attr('href');
		var i = $(this).index(this);
		var p = $(target).eq(i).offset().top;
		$('html,body').animate({ scrollTop: p }, 'slow');
		return false;
	});
}
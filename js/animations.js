// ///////////////////////////
// Self executing function
// ///////////////////////////
(function() {

	var tweetComposeTextAreas = $('.tweet-compose');
	$('#page-container p:first').text('Lezlee Beckstead');
	$('#profile-summary .avatar').attr('src', 'img/lezlee_JacksonGalaxy.jpg');

	// jQuery("time.timeago").timeago();
	var newDate = jQuery.timeago(new Date());
	$(".stats .time:first").text(newDate);
	
	// <abbr class="timeago" title="2008-07-17T09:24:17Z">July 17, 2008</abbr>
	// <span>11:42 AM - 30 Apr 2015</span>
	// <a href="/EfusjonLezlee/status/593832897364107265" class="tweet-timestamp js-permalink js-nav js-tooltip" data-original-title="11:42 AM - 30 Apr 2015"><span class="_timestamp js-short-timestamp js-relative-timestamp" data-time="1430415770" data-time-ms="1430415770000" data-long-form="true" aria-hidden="true">2m</span><span class="u-hiddenVisually" data-aria-label-part="last">2 minutes ago</span></a>


	console.log('newDate: ' , newDate);

	$('#char-count, #tweet-submit').hide();

	tweetComposeTextAreas.on('focus', function(e) {
		$(e.target).css('height', '5em');
		$('#char-count, #tweet-submit').show();
	});


	// tweetComposeTextAreas.on('blur', function(e) {
	// 	$(e.target).css('height', '2.5em');
	// });

	tweetComposeTextAreas.on('keyup', function(e) {
		//console.log('e.target', e.target);
		var characterCount = $(e.target).val().length,
			remaining = 140 - characterCount,
			charCount = $('#char-count'),
			tweetSubmit = $('#tweet-submit');


		charCount.text(remaining);
		if(remaining < 10) {
			charCount.css('color', 'red');
		} else {
			charCount.removeAttr('style');
		}

		if(characterCount < 1 || remaining < 0) {
			tweetSubmit.attr('disabled', true);
		} else {
			tweetSubmit.removeAttr('disabled')
		}


	});

	var tweetSubmit = $('#tweet-submit');
	tweetSubmit.on('click', function(e) {
		var tweetText = $('#tweet-content .tweet-compose').val(),
			tweetClone = $('#stream .tweet').first().clone();

		tweetClone.find('.avatar').attr('src', 'img/alagoon.jpg');
		tweetClone.find('.tweet-text').text(tweetText);
		tweetClone.find('.num-retweets').text(0);
		tweetClone.find('.num-favorites').text(0);

		tweetClone.find('.stats').each(function(text, el) {
			console.log(el);
		});

		tweetClone.find('.users-interact div').empty();
		$('#stream').prepend(tweetClone);

		console.log('tweetText', tweetText);
		console.log('tweetClone', tweetClone);


	});
// Add timeago date
// //<abbr class="timeago" title="30 April 2015 01:57:32 PM"></abbr>
// 	var tweetActions = $('.tweet #tweet-actions');
// 	$('tweetActions').hide();

	$('.tweet').find('.tweet-actions').hide();

	$('.tweet').hover(
		function() {
			$(this).find('.tweet-actions').show().slideDown({height: 25}, 500);
		}, function() {
			$(this).find('.tweet-actions').slideUp(500);
		}
	);

	$('.tweet').find('.stats').hide();
	var stats = false;
	$('.tweet').on('click', function() {
		if(stats == false) {
			$(this).find('.stats').slideDown({height: 75}, 500);
			stats = true;
		} else {
			$(this).find('.stats').slideUp(500);
			stats = false;
		}
	});


	


})();


// $(document).ready(function() {

// 	//console.log('jQuery is working');

// 	$('#char-count, #tweet-submit').hide();
	

// 	$('#page-container p:first').text('Lezlee Beckstead');
// 	// $('.avatar').image(src='img/lezlee_JacksonGalaxy.jpg')
// 	// chld.attr("src", "images/icon_sync.gif");

// 	$('.tweet-compose:first').on('click', function() {
// 		$(this).animate({ height: "4em" }, 500);
// 		$('#char-count, #tweet-submit').show();
// 	});





// 	//$("#char-count").css("color","red");

// 	//$('.tweet-compose:first').keyup(function(e){if(e.keyCode == 8)alert('backspace trapped')})  


// 	$('.tweet-compose:first').on('keyup', function(e) {
// 		var count = 0;
// 		var min = 0;
// 		var max = 140;
// 		//if(e.keyCode == 8)alert('backspace trapped');
// 		//$('html').keyup(function(e){if(e.keyCode == 8)alert('backspace trapped')})  

// 		$('#char-count').html(function(i, val) { 
// 			if(e.keyCode == 8 || e.keyCode == 46) {
// 				count = +val+1;
// 			} else {
// 				count = +val-1;
// 			}

// 			$('#tweet-submit').attr('disabled', false);
// 			if(val <= 10) {
// 				$(this).css('color','red');
// 			} else if (val > 10) {
// 				$(this).css('color','black');
// 			} if(val > 140) {
// 				$('#tweet-submit').attr('disabled', true);
// 			}
// 			return count;
// 		});


// 		// if($(this).val().length > characters){
//   //       	$(this).val($(this).val().substr(0, characters));
//   //       	$('.char-count').val() = $(this).val();
//   //       }
// 	});


// });




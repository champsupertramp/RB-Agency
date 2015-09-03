jQuery(document).ready(function($) {

	$(".mp3-link").on('click',function(){
		//data-profileid
	});
	
	$(".play-button").on('click',function(){
		var audioPlayer = document.getElementById('voice-over-player');     
        var sourceUrl = $(this).attr("voicelink");
	    audioPlayer.pause();
	    audioPlayer.src = sourceUrl;
	    audioPlayer.load();//suspends and restores all audio element
	
	    //audio[0].play(); changed based on Sprachprofi's comment below
	    audioPlayer.oncanplaythrough = audioPlayer.play();
	    console.log('request to play');
	    return false;
	});
	
	
	$("ul.media-categories-link li a").on('click',function(){
		$("ul.media-categories-link li a").removeClass("active");
		$(this).addClass("active");
		var classDisplay = $(this).attr('media-cate-id');
		
		//trigger the media category select All
		$("ul.media-categories-link2 li a").removeClass("active");
		$("ul.media-categories-link2 li a[media-cate-id='all']").addClass("active");
		
		
		//console.log(classDisplay);
		if(classDisplay == 'all'){
			$('.rbprofile-list').show();
			//$('.profile-voiceover ul.links li').show();
		}else{
			$('.rbprofile-list').hide();
			$('.rbprofile-list.'+classDisplay).show();
			$('.profile-voiceover ul.links li').show();
		}
		
		
		
		
		return false;
	});
	
	$("ul.media-categories-link2 li a").on('click',function(){
	
		var requestMediaCat = $("ul.media-categories-link li a[class='active']").attr('media-cate-id');
		if (requestMediaCat === undefined ){
			//trigger the main as all.. 
			$("ul.media-categories-link li a[media-cate-id='all']").addClass("active");
			requestMediaCat = 'all';
		}
		console.log(requestMediaCat);
		
		$("ul.media-categories-link2 li a").removeClass("active");
		$(this).addClass("active");
		var classDisplay = $(this).attr('media-cate-id');
		
		//console.log(classDisplay);
		if(classDisplay == 'all'){
			if(requestMediaCat == 'all'){
				$('.rbprofile-list').show();
				$('.profile-voiceover ul.links li').show();
			}else{
				$('.rbprofile-list.'+requestMediaCat).show();
				$('.rbprofile-list.'+requestMediaCat+' .profile-voiceover ul.links li').show();
			}
		}else{
		
			$('.rbprofile-list').hide();
			
			if(requestMediaCat == 'all'){
				$('.rbprofile-list.'+classDisplay).show();
				$('.profile-voiceover ul.links li:NOT(.site_link)').hide();
				$('.profile-voiceover ul.links li.'+classDisplay).show();
			}else{
				$('.rbprofile-list.'+requestMediaCat+'.'+classDisplay).show();
				$('.rbprofile-list.'+requestMediaCat+'.'+classDisplay+' .profile-voiceover ul.links li:NOT(.site_link)').hide();
				$('.rbprofile-list.'+requestMediaCat+'.'+classDisplay+' .profile-voiceover ul.links li.'+classDisplay).show();
			}
			console.log(classDisplay);
		
			
			//
			//
			//
		}
		return false;
	});
	
	
	
	
});
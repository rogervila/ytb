/**
 * YTB, async youtube iframe javascript plugin
 * (c) 2015. Created by Roger Vilà. http://rogervila.es
 * MIT License
 */
(function() {

	var ytb = document.getElementsByClassName("ytb"),
		i;

	for (i = 0; i < ytb.length; i++) {
		ytb[i].innerHTML = '<a href="https:\/\/www.youtube.com/watch?v='+ytb[i].dataset.ytbvideo+'"><img class="ytbimg1" src="http:\/\/img.youtube.com/vi/'+ytb[i].dataset.ytbvideo+'/0.jpg" alt="ytb"><img class="ytbimg2" src="http:\/\/s1.postimg.org/qzo70wnjf/rsz_play.png" alt="ytb"></a>';
		ytb[i].childNodes[0].addEventListener('click', function(e){
			e.preventDefault();
			this.parentNode.innerHTML = '<iframe class="ytbiframe" type="text/html" width="100%" height="360px" src="http://www.youtube.com/embed/'+this.parentNode.dataset.ytbvideo+'?autoplay=1" frameborder="0" allowFullScreen></iframe>';
		});
	};

})();
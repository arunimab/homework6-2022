var video = document.querySelector('#player1');

window.addEventListener("load", function() {
	console.log('video loaded');
	video = document.querySelector('#player1');
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log('video played');
 	video.play();
	document.querySelector('#volume').innerHTML = `${video.volume * 100}%`;
});

document.querySelector('#pause').addEventListener("click", function() {
	console.log('video paused');
 	video.pause();
});

document.querySelector('#slower').addEventListener("click", function() {
	video.playbackRate *= 0.95;
	console.log(video.playbackRate);
});

document.querySelector('#faster').addEventListener("click", function() {
	video.playbackRate *= 1.05;
	console.log(video.playbackRate);
});

document.querySelector('#skip').addEventListener("click", function() {
	if (video.currentTime < (video.duration-15)) {
		video.currentTime += 15;
	}
	else {
		video.currentTime = 0;
	}
	console.log(`skipped to: ${video.currentTime}`);
});

document.querySelector('#mute').addEventListener("click", function() {
	if (video.muted == true) {
		video.muted = false;
		document.querySelector('#mute').innerHTML = "Mute";
	}
	else {
		video.muted = true;
		document.querySelector('#mute').innerHTML = "Unmute";
	}
	
});

document.querySelector('#slider').addEventListener("click", function() {
	video.volume = this.value / 100;
	document.querySelector('#volume').innerHTML = `${video.volume * 100}%`;
});

document.querySelector('#vintage').addEventListener("click", function() {
	video.classList.add('oldSchool');
});

document.querySelector('#orig').addEventListener("click", function() {
	video.classList.remove('oldSchool');
});


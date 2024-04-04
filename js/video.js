var video;




window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("video").play();
	var volume_value = slider.value;
	document.querySelector("#volume").textContent=volume_value+"%";
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video");
	var video=document.querySelector("video");
	video.playbackRate=video.playbackRate*0.9;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Fast Video");
	var video=document.querySelector("video");
	video.playbackRate=video.playbackRate*(1/0.9);
	console.log(video.playbackRate);
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	document.querySelector("video").pause();
});

document.querySelector("#skip").addEventListener("click",function(){
	console.log("Skip Video");
	var vid = document.querySelector("video");
	if((vid.currentTime+10)>=vid.duration){
		vid.currentTime=0;
		console.log(vid.currentTime);
	}
	else{
		vid.currentTime+=10;
		console.log(vid.currentTime);
	}
});
var slider = document.getElementById("slider");

slider.addEventListener("input", function() {
    var value = slider.value;
    console.log("Current value:", value);
	document.querySelector("video").volume=value/100;
	document.querySelector("#volume").textContent=value+"%";
});

document.querySelector("#mute").addEventListener("click", function() {
	let name=document.querySelector("#mute");
	if(name.textContent==="Mute"){
		document.querySelector("video").volume=0;
		name.textContent="Unmute";
	}
	else{
		var value=slider.value;
		document.querySelector("video").volume=value/100;
		name.textContent="Mute";
	}
});

document.querySelector("#vintage").addEventListener("click",function(){
	var vid=document.querySelector('video');
	console.log("to Original");
	vid.classList.remove("video");
	vid.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click",function(){
	var vid=document.querySelector('video');
	console.log("Back to Normal");
	vid.classList.remove("oldSchool");
	vid.classList.add("video");
});

(function() {
	var preload = document.getElementById("load");
	var loading = 0;
	var id = setInterval(frame, 64);
	
	function frame() {
		if(loading == 100) {
			clearInterval(id) 
			window.open('home', "_self");
		} else {
			loading = loading + 1;
			if(loading == 90) {
				console.log(90);
			}
		}
	}
})();
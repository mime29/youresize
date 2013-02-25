window.onload = function() {
	// Find all YouTube videos
	var $allVideos = $("iframe[src^='http://www.youtube.com']");

	// Figure out and save aspect ratio for each video
	$allVideos.each(function() {
		console.log("Video has been made resizable");
		$(this).parent().prepend("<div id='youresize' style='width:" + this.width  + "px; height:" + this.height + "px;'></div>");
		$aDiv = $("#youresize");
		$aDiv.append($(this));
		$aDiv.resizable({
		  resize: function( event, ui ) {
		  	$('body').fitVids();
		  }
		});
	});

	
}
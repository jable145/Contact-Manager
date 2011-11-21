var currentTracks = new Array();
var currentAlbums = new Array();
	
$j(document).ready(function() {
	if(window.location.href.indexOf('#') > 0) {
			window.location.href = window.location.href.split("#")[0];
		}
	addPageListeners();
	
});


function addPageListeners() {
	$j('#addalbum').live('pagebeforeshow', function () { 
					$j("#albumNameTxt").val('');
				});
	
	$j('#addtrack').live('pagebeforeshow', function () { 
					$j("#trackNameTxt").val('');
					$j("#trackPriceTxt").val(0.00);
				});
}


function getAlbums(callback) {
//    $j('#albumlist').empty();
//    client.query("SELECT Id, Name, Price__c FROM Album__c ORDER BY Name LIMIT 20", function(response) { showAlbums(response.records,callback) }); 
}

/*
function showAlbums(records, callback) {
	currentAlbums.length = 0;
	for(var i = 0; i < records.length; i++) { currentAlbums[records[i].Id] = records[i]; }
	var x = 0;
	$j.each(records,
		function() {
	    $j('<li></li>')
	    .attr('id',this.Id)
		.hide()
	    .append('<h2>' + this.Name + '</h2>')
	    .click(function(e) {
	        e.preventDefault();
	        $j.mobile.pageLoading();
	        $j('#AlbumName').html(currentAlbums[this.id].Name);
	        $j('#AlbumPrice').html('$'+currentAlbums[this.id].Price__c);
			if($j('#AlbumPrice').html().indexOf(".") > 0 && $j('#AlbumPrice').html().split(".")[1].length == 1) {
				        		$j('#AlbumPrice').html($j('#AlbumPrice').html()+"0"); //add trailing zero
				        	}
	        $j('#AlbumId').val(currentAlbums[this.id].Id);
	        $j.mobile.pageLoading(true);
	        $j.mobile.changePage('#detailpage', "slide", false, true);
			getTracks(currentAlbums[this.id].Id);
	        })
	    .appendTo('#albumlist')
	    .show();
		 x++;
		});
	
	$j('#albumlist').listview('refresh');
	if(callback != null) { callback(); }
}
*/


function getTracks(albumid, callback) {
//	 $j('#tracklist').empty();
//	 client.query("SELECT Id, Name, Price__c, Album__c, Album__r.Name FROM Track__c WHERE Album__c = '"+albumid+"' ORDER BY CREATEDDATE LIMIT 200",
//	    	function(response) { showTracks(response.records,callback) } );
//	 return true;
}


/*
function showTracks(records, callback) {
		currentTracks.length = 0;
		for(var i = 0; i < records.length; i++) { currentTracks[records[i].Id] = records[i]; }
		var x = 0;
        $j.each(records, function() {
			$j('<li></li>')
            .hide()
			.attr('id',this.Id)
            .append(this.Name)
            .appendTo('#tracklist')
			.click(function(e) {
                e.preventDefault();
                $j.mobile.pageLoading();
				$j('#TrackName').html(currentTracks[this.id].Name);
				$j('#TrackAlbum').html(currentTracks[this.id].Album__r.Name);
                $j('#TrackPrice').html('$'+currentTracks[this.id].Price__c);
				if($j('#TrackPrice').html().indexOf(".") > 0 && $j('#TrackPrice').html().split(".")[1].length == 1) {
					        		$j('#TrackPrice').html($j('#TrackPrice').html()+"0"); //add trailing zero
					        	}
                $j.mobile.pageLoading(true);
                $j.mobile.changePage('#trackpage', "slide", false, true);
			})
            .show();
			x++;
	  	});
			console.log('Done ');
        $j('#tracklist').listview('refresh');
		if(callback != null) { console.log('Callback '); callback(); }
	}
*/




var currentTracks = new Array();
var currentContacts = new Array();
	
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


function getContacts(callback) {
    $j('#contactlist').empty();
    client.query("SELECT Id, Name, Phone FROM Contact ORDER BY Name LIMIT 20", function(response) { showContacts(response.records,callback) }); 
}


function showContacts(records, callback) {
	currentContacts.length = 0;
	for(var i = 0; i < records.length; i++) { currentContacts[records[i].Id] = records[i]; }
	var x = 0;
	$j.each(records,
		function() {
	    $j('<li></li>')
	    .attr('id',this.Id)
		.hide()
	    .append('<h2>' + this.Name + '</h2>')
	    .appendTo('#contactList')
	    .show();
		 x++;
		});
	
	$j('#contactList').listview('refresh');
	if(callback != null) { callback(); }
}



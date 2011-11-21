	// OAuth Configuration
	var loginUrl    = 'https://login.salesforce.com/';
	var clientId    = 'CONSUMER_KEY';
	var redirectUri = 'http://localhost/~admin/oauthcallback.html';
	var proxyUrl    = 'http://localhost/~admin/proxy.php?mode=native';

	// We'll get an instance of the REST API client in a callback after we do 
	// OAuth
	var client = new forcetk.Client(clientId, loginUrl, proxyUrl);;
	var $j = jQuery.noConflict(); 
	
	function onBodyLoad() {
		$j('#login').click(function() {
			url =  getAuthorizeUrl(loginUrl, clientId, redirectUri);
			var left = (screen.width/2)-(320/2);
			var top = (screen.height/2)-(480/2);
			oauthWin = window.open (url, 'Connect', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=320, height=480, top='+top+', left='+left);
		});
	
	
		$j('#logout').click(function(e) {
	        e.preventDefault();
	        client.setSessionToken(null, null, null);
			
			$j.mobile.changePage('#loginpage', "slide", false, true);
	    });
	    
	}
	
	function errorCallback(jqXHR){
	    alert(jqXHR.statusText + ": " + jqXHR.responseText);
	}

	function getAuthorizeUrl(loginUrl, clientId, redirectUri){

		return loginUrl+'services/oauth2/authorize?display=touch'
	        +'&response_type=token&client_id='+escape(clientId)
	        +'&redirect_uri='+escape(redirectUri);
	}

	function sessionCallback(oauthResponse) {
	    if (typeof oauthResponse === 'undefined'
	        || typeof oauthResponse['access_token'] === 'undefined') {
	        //$j('#prompt').html('Error - unauthorized!');
	        errorCallback({
	            status: 0, 
	            statusText: 'Unauthorized', 
	            responseText: 'No OAuth response'
	        });
	    } else {
	        client.setSessionToken(oauthResponse.access_token, null,
	            oauthResponse.instance_url);
			$j.mobile.changePage('#mainpage',"slide",false,true);
		    $j.mobile.pageLoading();
		    getAlbums(function(){
		        $j.mobile.pageLoading(true);
		    }); 
	    }
	}

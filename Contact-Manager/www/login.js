function onBodyLoad() {
    document.addEventListener("salesforce_oauth_login", onSalesforceOAuthLogin,false);
    document.addEventListener("deviceready", onDeviceReady,false);
}

function onDeviceReady() {
    try {
        $j.mobile.changePage('#mainpage', "slide", false, true);
        $j.mobile.pageLoading();
        getContacts(function() {
        $j.mobile.pageLoading(true);
        });
    } catch(e) {
    alert(e);
    }
}

function onSalesforceOAuthLogin(event) {
    client = new forcetk.Client(event.data.clientId, event.data.loginUrl);
    client.setSessionToken(event.data.accessToken, event.data.apiVersion, event.data.instanceUrl);
    client.setRefreshToken(event.data.refreshToken);
}

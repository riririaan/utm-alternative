(function(){

    function getURLParameter(){
        var pageUrl = window.location.search.substring(1); 
	//get the query string parameters without the "?"
        var urlVariables = pageUrl.split('&'); 
	//break the parameters and values attached togethe
	var urlParams = {};
	for (var i = 0; i < urlVariables.length; i++) {
	    var parts = urlVariables[i].split('=');
	    urlParams[parts[0]] = parts[1];
	}
	return urlParams
    }
    
    function setCookie(cookie, value){
	var expires = new Date();
	expires.setTime(expires.getTime() + (1000 * 60 * 60 * 24 * 30 * 24))
	document.cookie = cookie + "=" + value + "; expires=" + 
	    expires.toGMTString() + "; domain=.YOURDOMAIN.com; path=/"
	}

    function removeProtocol(href) {
	var parser = document.createElement('a');
	parser.href = href
	return parser.hostname.replace(/^www\./,'')
    }

    function getReferralInfo(){
	altParams = {}
	if(document.referrer != ""){
	    var referrerHostName = removeProtocol(document.referrer)
	    var GOOGLE = /google/; 
            var YAHOO = /search.yahoo/; 
            var BING = /bing/; 
	    if(GOOGLE.test(referrerHostName)){
		altParams['utm_source'] = 'google'
		altParams['utm_medium'] = 'organic'
	    } else if(BING.test(referrerHostName)){
		altParams['utm_source'] = 'bing'
		altParams['utm_medium'] = 'organic'
	    } else if(YAHOO.test(referrerHostName)){
		altParams['utm_source'] = 'yahoo'
		altParams['utm_medium'] = 'organic'
	    } else {
		altParams['utm_medium'] = 'referral'
		altParams['utm_source'] = referrerHostName
	    }
	}
	return altParams
    }

    function setFinalParams() {
	urlParams = getURLParameter()
	altParams = getReferralInfo()
	if(urlParams['utm_medium']==null){
	    finalParams = altParams
	} else {
	    finalParams = urlParams
	}
	
	if(altParams['utm_medium']==null && urlParams['utm_medium']==null) {
	    finalParams = {}
	    finalParams['utm_medium'] = '(none)'
	    finalParams['utm_source'] = 'direct'
	}

	return finalParams
    }

    setCookie("traffic_source", JSON.stringify(setFinalParams()));
})();

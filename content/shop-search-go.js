var runSearch = function(params) {
	
	for (var i = 0; i < shopSearchConfig.sites.length; i++) {
		var url = 
			shopSearchConfig.sites[i].url.replace(/({query})/gi,encodeURIComponent(params));
		
		chrome.runtime.sendMessage({ "url": url }, function() {
			console.log("Issued a search.");
		});
	}
};

chrome.extension.onMessage.addListener(function(message, sender, callback) {
	if (message.functiontoInvoke === "runSearch") {
		var selectedText = message.selection;
		runSearch(selectedText);
	}
});
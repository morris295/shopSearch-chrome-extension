var runSearch = function(params) {
	var url = 
		"http://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=" 
		+ encodeURIComponent(params);
	
	chrome.runtime.sendMessage({ "url": url }, function() {
		console.log("Issued a search.");
	});
};

chrome.extension.onMessage.addListener(function(message, sender, callback) {
	if (message.functiontoInvoke === "runSearch") {
		var selectedText = message.selection;
		runSearch(selectedText);
	}
});
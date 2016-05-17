//
chrome.tabs.onUpdated.addListener(function(id, info, tab) {
	if (url !== undefined && changeinfo.status == "complete") {
		chrome.pageAction.show(tab.id);
		chrome.tabs.executeScript(null, { "file": "content/shop-search-go.js" });
	}
});

//
var contexts = [ "page", "selection", "link", "editable", "image", "video", "audio" ];

//
for (var i = 0; i < contexts.length; i++) {
	var id = chrome.contextMenus.create({
		"title": "ShopSearch",
		"id": i.toString(),
		"contexts": [ contexts[i] ]
	});
	console.log("Context menu created: ", id);
}

//
chrome.contextMenus.onClicked.addListener(handleOnClick);

//
function handleOnClick(info, tab) {

	console.log("item " + info.menuItemId + " was clicked");
    console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab));

	chrome.tabs.query(
	{
		"active": true,
		"currentWindow": true
	},
	function() {
		chrome.tabs.sendMessage(
		tab.id, 
		{
			"functiontoInvoke": "runSearch",
			"selection": info.selectionText
		});
	});
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	chrome.tabs.create({ "url": message.url });
});
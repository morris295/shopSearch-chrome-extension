var shopSearchDefaultConfig = {
	placeholder: "{query}",
	"sites": [
        {
        	name: "amazon",
			url: "http://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords={query}",
			selected: true
		},
		{
			name: "google",
			url: "https://www.google.com/search?q={query}&tbm=shop",
			selected: true
		}
	]
};
function getFinnishBooks(){
	/*
fetch("https://finna.fi/AJAX/JSON?filter%5B%5D=%7Eformat_ext_str_mv%3A%220%2FBook%2F%22&filter%5B%5D=%7Elanguage%3A%22fin%22&join=AND&bool0%5B%5D=AND&lookfor0%5B%5D=&type0%5B%5D=AllFields&method=getSideFacets&searchClassId=Solr&location=side&configIndex=0&query=filter%255B%255D%3D%257Eformat_ext_str_mv%253A%25220%252FBook%252F%2522%26filter%255B%255D%3D%257Elanguage%253A%2522fin%2522%26join%3DAND%26bool0%255B%255D%3DAND%26lookfor0%255B%255D%3D%26type0%255B%255D%3DAllFields&querySuppressed=0&extraFields=handler%2Climit%2CselectedShards%2Csort%2Cview&enabledFacets%5B%5D=free_online_boolean%3A1&enabledFacets%5B%5D=format_ext_str_mv&enabledFacets%5B%5D=language", {
  "headers": {
    "accept": "application/json, text/javascript, ; q=0.01",
    "accept-language": "fi-FI,fi;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrer": "https://finna.fi/Search/Results?limit=0&filter%5B%5D=%7Eformat_ext_str_mv%3A%220%2FBook%2F%22&filter%5B%5D=%7Elanguage%3A%22fin%22&join=AND&bool0%5B%5D=AND&lookfor0%5B%5D=&type0%5B%5D=AllFields",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
}); */
	$("#button").click(function () { 
    $("#frame").attr("src", "https://finna.fi/Search/Results?sort=relevance&bool0%5B%5D=AND&lookfor0%5B%5D=&type0%5B%5D=AllFields&lookfor0%5B%5D=&type0%5B%5D=AllFields&join=AND&filter%5B%5D=%7Elanguage%3A%22fin%22&filter%5B%5D=%7Eformat%3A%220%2FBook%2F%22&limit=20");
});
}

function setSearchParameters(){
	materiaali = document.getElementById("materiaali").value;
	/*const choice = select.value;*/
	
	if(materiaali == 'suomkirjat'){
  getFinnishBooks();
	
}
    else if(materiaali == 'kirjat' && kielet=='englanti'){
		getEnglishBooks();
	}
	
	    else if(materiaali == 'kirjat' && kielet=='ruotsi'){
		getEnglishBooks();
	}
	
	    else if(materiaali == 'aanitteet' && kielet=='suomi'){
		getFinnishRecordings();
	}
	
		    else if(materiaali == 'aanitteet' && kielet=='englanti'){
		getFinnishRecordings();
		
				    else if(materiaali == 'aanitteet' && kielet=='ruotsi'){
		getFinnishRecordings();
	}
}

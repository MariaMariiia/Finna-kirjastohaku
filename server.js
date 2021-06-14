function getFinnishBooks(){
	
	$("#button").click(function () { 
    $("#frame").attr("src", "https://finna.fi/cache/ee6ade86faf34bb81b781594f0dbed69.min.js");
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

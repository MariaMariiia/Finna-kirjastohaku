function getFinnishBooks(){
	
	$("#button").click(function () { 
    $("#frame").attr("src", "https://api.finna.fi/v1/search?lookfor=language%3A%22fin%22&filter%5B%5D=%7Eformat%3A%220%2FBook%2F%22&join=AND&bool0%5B%5D=AND&lookfor0%5B%5D=&type0%5B%5D=AllFields");
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

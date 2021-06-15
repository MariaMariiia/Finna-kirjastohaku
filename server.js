
function getFinnishBooks(){
	
	$("#button").click(function () { 
    $("#frame").attr("src", "https://api.finna.fi/v1/search?lookfor=language%3A%22fin%22");
	
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

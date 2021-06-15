
function getFinnishBooks(){
	
	$("#button").click(function () { 
    $("#frame").attr("src", "https://api.finna.fi/v1/search?lookfor=filter[]=~format:"0/Book/"&filter[]=~&lng=fi");
		      	
}

function setSearchParameters(){
      const material = $("#materiaali").val()
      const language = $("#kielet").val()


      if (materiaali == 'kirjat' && kieli == 'suomi') {
        getFinnishBooks();

      } else if (material == 'books' && language == 'english') {
        getEnglishBooks();
      } else if (material == 'books' && language == 'swedish') {
        getEnglishBooks();
      } else if (material == 'recordings' && language == 'finnish') {
        getFinnishRecordings();
      } else if (material == 'recordings' && language == 'english') {
        getFinnishRecordings();
      } else if (material == 'recordings' && language == 'swedish') {
        getFinnishRecordings();
      }
    }
	
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

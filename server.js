/*

function getFinnishBooks(){
	
	$("#button").click(function () { 
    $("#frame").attr("src", "https://api.finna.fi/v1/search?sort=relevance&bool0%5B%5D=AND&lookfor0%5B%5D=sibelius&type0%5B%5D=AllFields&lookfor0%5B%5D=festival&type0%5B%5D=AllFields&lookfor0%5B%5D=&type0%5B%5D=AllFields&join=AND&filter%5B%5D=~language%3A"fin"&limit=20");
		   <!-- https://api.finna.fi/v1/search?lookfor=kekkonen&filter[]=~format:"0/Book/"&filter[]=~format:"1/Sound/CD/" -->
		<!-- https://api.finna.fi/v1/search?lookfor=&facet[]=building&lng=sv   -->
		      	
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
*/

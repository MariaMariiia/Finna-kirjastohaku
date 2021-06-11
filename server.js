// server.js

//Mieti tarvitaanko Axiosta
/*
const axios = require('axios');

const select = document.querySelector('select');

const para = document.querySelector('p');

select.addEventListener('change', setSearch);
*/

function setSearchParameters(){
      const material = $("#materiaali").val()
      const language = $("#kieli").val()


      if (materiaali == 'kirjat' && kielet == 'suomi') {
        getFinnishBooks();

      } 
    else if(materiaali == 'kirjat' && kielet=='englanti'){
		getEnglishBooks();
	}
	
	    else if(materiaali == 'kirjat' && kielet=='ruotsi'){
		getSwedishBooks();
	}
	
	    else if(materiaali == 'aanitteet' && kielet=='suomi'){
		getFinnishRecordings();
	}
	
		    else if(materiaali == 'aanitteet' && kielet=='englanti'){
		getEnglishRecordings();
		
				    else if(materiaali == 'aanitteet' && kielet=='ruotsi'){
		getFinnishRecordings();
	}
}
/*
$('#form').on('submit',function(e){
  $.post('google.com'.$(this).serialize(),function(data){
    //#do what you want here,in your url after handle a data redirect to your page,with this inputs.
  })
});
*/

//Jos kieli on suomi ja aineistotyyppi on kirja:
function getFinnishBooks() {
 
   fetch('https://finna.fi/AJAX/JSON?filter%5B%5D=%7Eformat_ext_str_mv%3A%220%2FBook%2F%22&filter%5B%5D=%7Elanguage%3A%22fin%22&join=AND&bool0%5B%5D=AND&lookfor0%5B%5D=&type0%5B%5D=AllFields&method=getSideFacets&searchClassId=Solr&location=side&configIndex=0&query=filter%255B%255D%3D%257Eformat_ext_str_mv%253A%25220%252FBook%252F%2522%26filter%255B%255D%3D%257Elanguage%253A%2522fin%2522%26join%3DAND%26bool0%255B%255D%3DAND%26lookfor0%255B%255D%3D%26type0%255B%255D%3DAllFields&querySuppressed=0&extraFields=handler%2Climit%2CselectedShards%2Csort%2Cview&enabledFacets%5B%5D=free_online_boolean%3A1&enabledFacets%5B%5D=format_ext_str_mv&enabledFacets%5B%5D=language')
  .then(response => response.json())
  .then(data => console.log(data));
}

//Jos kieli on englanti ja aineistotyyppi on kirja:
function getEnglishBooks() {
fetch('https://finna.fi/AJAX/JSON?filter%5B%5D=%7Eformat_ext_str_mv%3A%220%2FBook%2F%22&filter%5B%5D=%7Elanguage%3A%22eng%22&join=AND&bool0%5B%5D=AND&lookfor0%5B%5D=&type0%5B%5D=AllFields&method=getSideFacets&searchClassId=Solr&location=side&configIndex=0&query=filter%255B%255D%3D%257Eformat_ext_str_mv%253A%25220%252FBook%252F%2522%26filter%255B%255D%3D%257Elanguage%253A%2522eng%2522%26join%3DAND%26bool0%255B%255D%3DAND%26lookfor0%255B%255D%3D%26type0%255B%255D%3DAllFields&querySuppressed=0&extraFields=handler%2Climit%2CselectedShards%2Csort%2Cview&enabledFacets%5B%5D=free_online_boolean%3A1&enabledFacets%5B%5D=format_ext_str_mv&enabledFacets%5B%5D=language')
  .then(response => response.json())
  .then(data => console.log(data));
}

function getFinnishRecordings() {

}

function getEnglishRecordings() {
  axios.get('https://finna.fi/Search/Results?sort=relevance&bool0%5B%5D=AND&lookfor0%5B%5D=&type0%5B%5D=AllFields&lookfor0%5B%5D=&type0%5B%5D=AllFields&join=AND&filter%5B%5D=%7Elanguage%3A%22eng%22&filter%5B%5D=%7Eformat%3A%220%2FSound%2F%22&limit=20');
      console.log(res.data.login);
    });
	
	    .catch(err => {
      console.log(err);
    });
}
//Mieti missä näitä kutsutaan!!!!!!!!!!!!!!!!!!!
//getFinnishBooks();
//getEnglishBooks();

// server.js

//Mieti tarvitaanko Axiosta
const axios = require('axios');

const select = document.querySelector('select');

const para = document.querySelector('p');

select.addEventListener('change', setSearch);

function setSearchParameters(){
	const choice = select.value;
	
	if(choice == 'kirja' && choice=='suomi'){
		getFinnishBooks();
	
}
    else if(choice == 'kirja' && choice=='englanti'){
		getEnglishBooks();
	}
	
	    else if(choice == 'aanite' && choice=='suomi'){
		getFinnishRecordings();
	}
}

//Jos kieli on suomi ja aineistotyyppi on kirja:
function getFinnishBooks() {
  axios.get('https://finna.fi/Search/Results?limit=0&filter%5B%5D=%7Eformat%3A%220%2FBook%2F%22&filter%5B%5D=%7Elanguage%3A%22fin%22&type=AllFields')
    .then(res => {
      console.log(res.data.login);
    });
	
	    .catch(err => {
      console.log(err);
    });
}

//Jos kieli on englanti ja aineistotyyppi on kirja:
function getEnglishBooks() {
  axios.get('https://finna.fi/Search/Results?limit=0&filter%5B%5D=%7Eformat%3A%220%2FBook%2F%22&filter%5B%5D=%7Elanguage%3A%22fin%22&filter%5B%5D=%7Elanguage%3A%22eng%22&type=AllFields')
    .then(res => {
      console.log(res.data.login);
    });
	
	    .catch(err => {
      console.log(err);
    });
}

function getFinnishRecordings() {
  axios.get('https://finna.fi/Search/Results?sort=relevance&bool0%5B%5D=AND&lookfor0%5B%5D=&type0%5B%5D=AllFields&lookfor0%5B%5D=&type0%5B%5D=AllFields&join=AND&filter%5B%5D=%7Elanguage%3A%22fin%22&filter%5B%5D=%7Eformat%3A%220%2FSound%2F%22&limit=20')
    .then(res => {
      console.log(res.data.login);
    });
	
	    .catch(err => {
      console.log(err);
    });
}

//Mieti missä näitä kutsutaan!!!!!!!!!!!!!!!!!!!
//getFinnishBooks();
//getEnglishBooks();

var myJSON = '{ "teos": { "display_name":"EMPLOYEE NAME:", "format":"string", "type":"textbox", "dflt":"null", "isMandatory":"true" } }';

 var employee = $.parseJSON(myJSON).employee; //get employee object
 if (employee.type == "textbox") {
   $('<label>').attr({for: 'employee_name'}).text(employee.display_name).appendTo($('body'));
   $('<input>').attr({type: 'text', id:'nonPresenterAuthors'}).appendTo($('body'));
 }
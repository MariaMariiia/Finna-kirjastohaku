$(function(){
  $('#demo').multiselect();
});

$('#demo').multiselect({

  // allows HTML content
  enableHTML: false,

  // CSS class of the multiselect button
  buttonClass: 'custom-select',

  // inherits the class of the button from the original select
  inheritClass: false,

  // width of the multiselect button
  buttonWidth: 'auto',

  // container that holds both the button as well as the dropdown
  buttonContainer: '<div class="btn-group" />',

  // places the dropdown on the right side
  dropRight: false,

  // places the dropdown on the top
  dropUp: false,

  // CSS class of the selected option
  selectedClass: 'active',

  // maximum height of the dropdown menu
  // if maximum height is exceeded a scrollbar will be displayed
  maxHeight: false,

  // includes Select All Option
  includeSelectAllOption: false,

  // shows the Select All Option if options are more than ...
  includeSelectAllIfMoreThan: 0,

  // Lable of Select All
  selectAllText: ' Select all',

  // the select all option is added as additional option within the select
  // o distinguish this option from the original options the value used for the select all option can be configured using the selectAllValue option.
  selectAllValue: 'multiselect-all',

  // control the name given to the select all option
  selectAllName: false,

  // if true, the number of selected options will be shown in parantheses when all options are seleted. 
  selectAllNumber: true,

  // setting both includeSelectAllOption and enableFiltering to true, the select all option does always select only the visible option
  // with setting selectAllJustVisible to false this behavior is changed such that always all options (irrespective of whether they are visible) are selected
  selectAllJustVisible: true,

  // enables filtering
  enableFiltering: false,

  // determines if is case sensitive when filtering
  enableCaseInsensitiveFiltering: false,

  // enables full value filtering
  enableFullValueFiltering: false,

  // if true, optgroup's will be clickable, allowing to easily select multiple options belonging to the same group
  enableClickableOptGroups: false,

  // enables collapsible OptGroups
  enableCollapsibleOptGroups: false,

  // collapses all OptGroups on init
  collapseOptGroupsByDefault: false,

  // placeholder of filter filed
  filterPlaceholder: 'Search',

  // possible options: 'text', 'value', 'both'
  filterBehavior: 'text',

  // includes clear button inside the filter filed
  includeFilterClearBtn: true,

  // prevents input change event
  preventInputChangeEvent: false,

  // message to display when no option is selected
  nonSelectedText: 'None selected',

  // message to display if more than numberDisplayed options are selected
  nSelectedText: 'selected',

  // message to display if all options are selected
  allSelectedText: 'All selected',

  // determines if too many options would be displayed
  numberDisplayed: 3,

  // disables the multiselect if empty
  disableIfEmpty: false,

  // message to display if the multiselect is disabled
  disabledText: '',

  // the separator for the list of selected items for mouse-over
  delimiterText: ', ',

  // includes Reset Option
  includeResetOption: false,

  // includes Rest Divider
  includeResetDivider: false,

  // lable of Reset  Option
  resetText: 'Reset',

  // custom templates
  templates: {
    button: '<button type="button" class="multiselect dropdown-toggle" data-toggle="dropdown"><span class="multiselect-selected-text"></span></button>',
    <a href="https://www.jqueryscript.net/tags.php?/popup/">popup</a>Container: '<div class="multiselect-container dropdown-menu"></div>',
    filter: '<div class="multiselect-filter"><div class="input-group input-group-sm p-1"><div class="input-group-prepend"><i class="input-group-text fas fa-search"></i></div><input class="form-control multiselect-search" type="text" /></div></div>',
    filterClearBtn: '<div class="input-group-append"><button class="multiselect-clear-filter input-group-text" type="button"><i class="fas fa-times"></i></button></div>',
    option: '<button class="multiselect-option dropdown-item"></button>',
    divider: '<div class="dropdown-divider"></div>',
    optionGroup: '<button class="multiselect-group dropdown-item"></button>',
    resetButton: '<div class="multiselect-reset text-center p-2"><button class="btn btn-sm btn-block btn-outline-secondary"></button></div>'
  }
  
});

/**
 * Default text function will either print 'None selected' in case no
 * option is selected or a list of the selected options up to a length
 * of 3 selected options.
 *
 * @param {jQuery} options
 * @param {jQuery} select
 * @returns {String}
 */
buttonText: function (options, select) {
    if (this.disabledText.length > 0
        && (select.prop('disabled') || (options.length == 0 && this.disableIfEmpty))) {

        return this.disabledText;
    }
    else if (options.length === 0) {
        return this.nonSelectedText;
    }
    else if (this.allSelectedText
        && options.length === $('option', $(select)).length
        && $('option', $(select)).length !== 1
        && this.multiple) {

        if (this.selectAllNumber) {
            return this.allSelectedText + ' (' + options.length + ')';
        }
        else {
            return this.allSelectedText;
        }
    }
    else if (this.numberDisplayed != 0 && options.length > this.numberDisplayed) {
        return options.length + ' ' + this.nSelectedText;
    }
    else {
        var selected = '';
        var delimiter = this.delimiterText;

        options.each(function () {
            var label = ($(this).attr('label') !== undefined) ? $(this).attr('label') : $(this).text();
            selected += label + delimiter;
        });

        return selected.substr(0, selected.length - this.delimiterText.length);
    }
},
/**
 * Up<a href="https://www.jqueryscript.net/time-clock/">date</a>s the title of the button similar to the buttonText function.
 *
 * @param {jQuery} options
 * @param {jQuery} select
 * @returns {@exp;selected@call;substr}
 */
buttonTitle: function (options, select) {
    if (options.length === 0) {
        return this.nonSelectedText;
    }
    else {
        var selected = '';
        var delimiter = this.delimiterText;

        options.each(function () {
            var label = ($(this).attr('label') !== undefined) ? $(this).attr('label') : $(this).text();
            selected += label + delimiter;
        });
        return selected.substr(0, selected.length - this.delimiterText.length);
    }
},
checkboxName: function (option) {
    return false; // no checkbox name
},
/**
 * Create a label.
 *
 * @param {jQuery} element
 * @returns {String}
 */
optionLabel: function (element) {
    return $(element).attr('label') || $(element).text();
},
/**
 * Create a class.
 *
 * @param {jQuery} element
 * @returns {String}
 */
optionClass: function (element) {
    return $(element).attr('class') || '';
},
/**
 * Triggered on change of the multiselect.
 *
 * Not triggered when selecting/deselecting options manually.
 *
 * @param {jQuery} option
 * @param {Boolean} checked
 */
onChange: function (option, checked) {

},
/**
 * Triggered when the dropdown is shown.
 *
 * @param {jQuery} event
 */
onDropdownShow: function (event) {

},
/**
 * Triggered when the dropdown is hidden.
 *
 * @param {jQuery} event
 */
onDropdownHide: function (event) {

},
/**
 * Triggered after the dropdown is shown.
 *
 * @param {jQuery} event
 */
onDropdownShown: function (event) {

},
/**
 * Triggered after the dropdown is hidden.
 *
 * @param {jQuery} event
 */
onDropdownHidden: function (event) {

},
/**
 * Triggered on select all.
 */
onSelectAll: function () {

},
/**
 * Triggered on deselect all.
 */
onDeselectAll: function () {

},
/**
 * Triggered after initializing.
 *
 * @param {jQuery} $select
 * @param {jQuery} $container
 */
onInitialized: function ($select, $container) {

},
/**
 * Triggered on filtering.
 *
 * @param {jQuery} $filter
 */
onFiltering: function ($filter) {

},

// destroy the instance
$('#demo').multiselect('destroy');

// refresh the checked checkboxes based on the currently selected options
$('#demo').multiselect('refresh');

// rebuild the instance
$('#demo').multiselect('rebuild');

// select an option
$('#demo').multiselect('select', value);

// deselect an option
$('#demo').multiselect('deselect', value);

// select all options
$('#demo').multiselect('selectAll', justVisible);

// deselect all options
$('#demo').multiselect('deselectAll', justVisible);

// update the text and title of the button
$('#demo').multiselect('updateButtonText');

// update options
$('#demo').multiselect('setOptions', options);

// enable/disable the multiselect
$('#demo').multiselect('disable');
$('#demo').multiselect('enable');

/* provide options programmatically
  var data = [
      {label: 'Option 1', title: 'Option 1', value: '1', selected: true},
      {label: 'Option 2', title: 'Option 2', value: '2'},
      {label: 'Option 3', title: 'Option 3', value: '3', selected: true}
  ];
*/
$('#demo').multiselect('dataprovider', data);

// programmatically provide a new text to display in the button when all options are selected, at runtime
$('#demo').multiselect('setAllSelectedText', value);

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

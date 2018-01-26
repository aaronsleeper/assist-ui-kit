// Focus the select institution input field
// $('#discipline-search').focus();

// Filter the list of institutions
function filterInstitutions() {
    // Declare variables
    var input, inputValue, filterOn, institutionsList, institution;
    input = document.getElementById('discipline-search');
    inputValue = input.value;
    filterOn = inputValue.toUpperCase();
    institutionsList = document.getElementById('discipline-list');
    institution = institutionsList.getElementsByTagName('li');

    // Unmark previously marked items
    $(institutionsList).unmark(inputValue);

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < institution.length; i++) {
        a = institution[i];
        if (a.innerHTML.toUpperCase().indexOf(filterOn) > -1) {
            institution[i].style.display = '';
        } else {
            institution[i].style.display = "none";
        }
    }

    // Mark filtered items
    $(institutionsList).mark(inputValue);
}
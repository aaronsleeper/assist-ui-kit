/* -- -- -- -- -- -- -- -- -- --
Dropdown as Select Control
-- -- -- -- -- -- -- -- -- -- */
$('select').extendSelect({
    // Search input placeholder:
    search: 'Find',
    // Title if option not selected:
    notSelectedTitle: 'Pls select',
    // Message if select list empty:
    empty: 'Empty',
    // Class to active element
    activeClass: 'active',
    // Class to disabled element
    disabledClass: 'disabled',
    // Custom error message for all selects (use placeholder %items)
    maxOptionMessage: 'Max %items elements',
    // Delay to hide message
    maxOptionMessageDelay: 2000,
    // Popover logic (resize or save height)
    popoverResize: true,
    // Auto resize dropdown by button width
    dropdownResize: true
});

// When the dropdown is clicked
/* $('.dropdown').click(function (event) {
    var value = $(this).find('.value');
    value.html('');
}); */

// Change the value of the dropdown button on select
/* $('.dropdown-item').click(function (event) {
    var thisValue = $(this).text();
    var dropdownValue = $(this).parents('.dropdown').find('.dropdown-toggle .value');
    // if this isn't the selected list item
    if (!$(this).hasClass('selected')) {
        // remove .selected from the currently selected list item
        $(this).siblings('.selected').removeClass('selected');
        $(this).toggleClass('selected');
    }
    dropdownValue.text(thisValue);
    event.preventDefault();
}) */

// Focus the first matching item on keypress
/* if (event.keyCode >= 48 && event.keyCode <= 57) {
    // Number
} else if (event.keyCode >= 65 && event.keyCode <= 90) {
    // Alphabet upper case
} else if (event.keyCode >= 97 && event.keyCode <= 122) {
    // Alphabet lower case
} */

/* potentially useful example code for filtering on keystroke
https: //codepen.io/asleepy/pen/YENOxK?editors=0010 */

/*
- When the button is focused, clear the default value
    - replace the default value if it loses focus and the value is empty
- When the value changes (user types) modify the dropdown menu
    - hide elements not containing the current value string
    - if all a heading's children are hidden, hide the heading
    - selected element should remain visible even if it is not matching
        - if a new selection is made, it will hide
*/
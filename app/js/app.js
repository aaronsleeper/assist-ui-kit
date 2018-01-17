/* -- -- -- -- -- -- -- -- -- --
Lottie Animations
-- -- -- -- -- -- -- -- -- -- */

// Loader
var animation = bodymovin.loadAnimation({
    container: document.getElementById('loader'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animations/loader.json'
})



/* -- -- -- -- -- -- -- -- -- --
Input Interactions test
-- -- -- -- -- -- -- -- -- -- */

// Link List Group
// Radio Icon Toggle
$('.link-list-group li').click(function() {
    // if this isn't the selected list item
    if(!$(this).hasClass('selected')) {
        // remove .selected from the currently selected list item
        $('li.selected svg.icon-radio use').attr('xlink:href', '#icon-radio-empty')
        $('li.selected').removeClass('selected');
        $(this).toggleClass('selected');
    }
    $(this).find('svg.icon-radio use').attr('xlink:href', '#icon-radio');
    event.preventDefault();
});

// Tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

// Dropdown as Select / Option control
// Change the value of the dropdown button on select
$('.dropdown-item').click(function(event) {
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
})

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
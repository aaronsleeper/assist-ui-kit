/* -- -- -- -- -- -- -- -- -- --
Dropdown as Select Control
-- -- -- -- -- -- -- -- -- -- */
$(".chosen-select").chosen({ width: "100%" });

/* -- -- -- -- -- -- -- -- -- --
Tooltips
-- -- -- -- -- -- -- -- -- -- */

// Init
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
/* -- -- -- -- -- -- -- -- -- --
Loader Animation
-- -- -- -- -- -- -- -- -- -- */

// Init
var animation = bodymovin.loadAnimation({
    container: document.getElementById('loader'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animations/loader.json'
})
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
/* -- -- -- -- -- -- -- -- -- --
Radio Icon Toggle
-- -- -- -- -- -- -- -- -- -- */

// store the discipline text element for later
var selectionHiddenBtn = $('.selection-hidden');
var selectionHiddenTxt = selectionHiddenBtn.find('a strong');

// store link list group position vars for later
var listContainerTop = $('.list-container').offset().top;
var listContainerBottom = listContainerTop + $('.list-container').outerHeight();

var selectedListItem;
var selectedListItemPos;
var selectedListItemTop;

// Check if the selected list item is in view
function isSelectedInView() {
    // is a discipline is selected?
    if ($('.link-list-group li.selected').length > 0) {
        selectedListItemTop = $('.link-list-group li.selected').offset().top;
        if (selectedListItemTop < listContainerTop) {
            selectionHiddenBtn.attr('class', 'selection-hidden above');
        } else if (selectedListItemTop > listContainerBottom) {
            selectionHiddenBtn.attr('class', 'selection-hidden below');
        } else {
            selectionHiddenBtn.attr('class', 'selection-hidden');
        }
    }
}
$('.panel-disciplines .scrollbar-hider').scroll(function () {
    isSelectedInView();
});

selectionHiddenBtn.click(function() {
    scrollToSelectedElement($('.link-list-group li.selected'));
});

// Link List Group
$('.link-list-group li').click(function () {
    // if this isn't the selected list item
    if (!$(this).hasClass('selected')) {
        // remove .selected from the currently selected list item
        $('li.selected svg.icon-radio use').attr('xlink:href', '#icon-radio-empty')
        $('li.selected').removeClass('selected');
        $(this).toggleClass('selected');
    }
    $(this).find('svg.icon-radio use').attr('xlink:href', '#icon-radio');
    // store the discipline text
    var newText = $(this).find('a:first-child').text();
    // set the text on the selection hidden button
    selectionHiddenTxt.text(newText);
    isSelectedInView();
    event.preventDefault();
});

// Scroll to selected list element
function scrollToSelectedElement(element) {
    var elementOffset = element.offset().top;
    var middle = $('.list-container').outerHeight() / 2;

    if (element.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('.panel-disciplines .scrollbar-hider').animate({
            scrollTop: elementOffset - middle
        }, 1000, function () {
            // Callback after animation
            // Must change focus!
            var $element = $(element);
            $element.focus();
            if ($element.is(":focus")) { // Checking if the element was focused
                return false;
            } else {
                $element.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $element.focus(); // Set focus again
            };
        });
    }
}

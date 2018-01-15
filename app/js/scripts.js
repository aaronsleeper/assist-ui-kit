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
Input Interactions
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
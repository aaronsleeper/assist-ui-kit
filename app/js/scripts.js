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
        $('.link-list-group li.selected').removeClass('selected');
    }
    // toggle .selected on the clicked list item
    $(this).toggleClass('selected');
});

// Tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
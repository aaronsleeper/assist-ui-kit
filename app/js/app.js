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
/* -- -- -- -- -- -- -- -- -- --
Radio Icon Toggle
-- -- -- -- -- -- -- -- -- -- */

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
    event.preventDefault();
});

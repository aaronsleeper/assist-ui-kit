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
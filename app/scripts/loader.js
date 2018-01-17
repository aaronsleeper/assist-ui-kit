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
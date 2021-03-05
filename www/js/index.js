document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}
$('.flex-child').slick({
    fade: true,
    speed: 300,
});

$('.flex-child:first-child').slick({
    fade: true,
    speed: 300,
});




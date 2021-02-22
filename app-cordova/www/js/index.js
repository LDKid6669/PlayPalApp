document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}
$('.bloco-1').slick({
    fade: true,
    speed: 300,
});

$('.bloco-2').slick({
    fade: true,
    speed: 300,
});

$('.bloco-3').slick({
    fade: true,
    speed: 300,
});


//on load
window.onload = function() {
    document.body.style.position = 'static';
    document.body.style.overflow = 'visible';
    if (chrome.extension.inIncognitoContext) {
        var modal = document.getElementsByClassName('gip__modal');
        modal[0].parentNode.removeChild(modal[0]);
    }
    else {
        var paywall = document.getElementsByClassName('meter-paywall');
        paywall[0].parentNode.removeChild(paywall[0]);
    }
}
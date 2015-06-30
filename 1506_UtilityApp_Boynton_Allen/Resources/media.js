// Media file to support video playback

exports.createYouTubePlayer = function(e) {
 
    if (e.src == undefined) e.src = '';
    if (e.fullscreen == undefined) e.fullscreen = true;
    if (e.backButtonTitle == undefined) e.backButtonTitle = 'Back';
 
    navWindow.orientationModes= [Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT];
    navWindow.backButtonTitle=e.backButtonTitle;
 
    var webview = Ti.UI.createWebView({fullscreen:e.fullscreen});
    webview.url = e.src;
 
    return(webview);
};
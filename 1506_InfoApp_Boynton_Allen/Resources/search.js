// This file holds the code to display my Search window

var win = Ti.UI.currentWindow;

var search = Titanium.UI.createSearchBar({
    barColor:'#000', 
    showCancel:true,
    height:43,
    top:20,
});

win.add(search);

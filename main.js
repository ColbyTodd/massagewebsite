function goToNewPage(location) {
    var text = location; // The text you want to pass to the new page
    var url = "booking.html?text=" + encodeURIComponent(text);
    window.location.href = url;
  }

window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    var text = urlParams.get('text');
    switch(text){
        case 'Barrhaven':
            document.getElementById("inputLocation").selectedIndex = 0;
            break;
        case 'Kanata':
            document.getElementById("inputLocation").selectedIndex = 1;
            break;
        case 'Merivale':
            document.getElementById("inputLocation").selectedIndex = 2;
            break;
    }
    
}
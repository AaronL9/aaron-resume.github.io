function button(sw) {
    var newHeight;
    var titlebar;
    if (sw == 1) {
        newHeight = "900px";
        titlebar = "Home - Profile"
    }
    
    else if (sw == 2) {
        newHeight = "1600px";
        titlebar = "My Resume"
    }
    
    else if (sw == 3) {
        newHeight = "1230px";
        titlebar = "My Projects"
    }
    else {
        newHeight = "780px";
        titlebar = "My Contact"

    }
    document.getElementById("head-title").textContent = titlebar; 
    document.getElementById("frame").style.height = newHeight;
  }
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function openListTab(evnt, listTabName) {
    var i, listtabcontent, listtablinks;
    listtabcontent = document.getElementsByClassName("listcontent");
    for (i = 0; i < listtabcontent.length; i++) {
        listtabcontent[i].style.display = "none";
    }
    listtablinks = document.getElementsByClassName("listtabs");
    for (i = 0; i < listtablinks.length; i++) {
        listtablinks[i].className = listtablinks[i].className.replace(" activeList", "");
    }
    document.getElementById(listTabName).style.display = "block";
    evnt.currentTarget.className += " activeList";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultListOpen").click();

//link

var header = document.getElementById("nav");
var btns = header.getElementsByClassName("nav__item");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("activeLink");
        current[0].className = current[0].className.replace(" activeLink", "");
        this.className += " activeLink";
    });
}
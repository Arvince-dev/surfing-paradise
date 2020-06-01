window.ready = function() {
    console.log('pasok');
    
    document.getElementById("header").style.backgroundColor = "transparent";
}

function menuBtn() {
    document.getElementById("header").style.backgroundColor = "#055d5a";
}

var mybutton = document.getElementById("gbtopbtn");

window.onscroll = function() {
    var html = document.documentElement;
    var x = html.scrollTop;

    if (x > 157) {
        document.getElementById("header").style.backgroundColor = "#055d5a";
    } else {
        document.getElementById("header").style.backgroundColor = "transparent";
    }

    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
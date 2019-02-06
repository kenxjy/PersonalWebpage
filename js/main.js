// ready
$(function() {
    console.log("DOMs are ready!");
    initialize();
    
    
});

function clearMain() {
    $("#main-container").empty();
}

function initialize() {
    // this ensures that the menu closes after click a menu item
    $(".main-menu").on("click", function(){
        $(".navbar-collapse").collapse('hide');
    });

    // set up "on click" handlers for the menu
    $("#home-menu").on("click", function(event) {
        event.preventDefault();
        home();
    });

    $("#about-menu").on("click", function(event) {
        event.preventDefault();
        about();
    });

    $("#resume-menu").on("click", function(event) {
        event.preventDefault();
        resume();
    });

    // not sure why i did this here instead of just putting it in the html
    $("#github-menu").attr({"href" : "http://github.com/kenxjy", "target" : "_blank"});
    $("#linkedin-menu").attr({"href" : "https://www.linkedin.com/in/kyue/", "target" : "_blank"});
    $("#contact-menu").attr("href", "mailto:kyue3@myseneca.ca");

    home(); // load home page
}

// home page
function home() {
    clearMain();

    let $rowDiv = $("<div></div>", {class : "row", height : "100%"})
    $rowDiv.css({ "display" : "flex", "font-size" : "xx-large", "align-items" : "center"});
    
    let $innerDiv = $("<div></div>", {class : "col-md-12", width : "100%"});
    $innerDiv.css({ "text-align" : "center", "font-family" : "Verdana", "font-weight" : "bold"})
    
    $innerDiv.append("<p>JUNIOR DEVELOPER.</p><br>");
    $rowDiv.append($innerDiv);
    $("#main-container").append($rowDiv);
}

// about page
function about() {
    clearMain();

    let $rowDiv = $("<div></div>", {class : "row"});
    $rowDiv.css({ "padding-top" : "50px"});
    
    let $innerDiv = $("<div></div>", {class : "col-md-12"});
    $innerDiv.css({ "text-align" : "center" });
    
    $innerDiv.append("<h3>Coming Soon</h3>");
    $rowDiv.append($innerDiv);
    $("#main-container").append($rowDiv);
}

// resume
function resume() {
    clearMain();

    let $rowDiv = $("<div></div>", {class : "row"});
    $rowDiv.css({ "padding-top" : "50px"});
    
    let $innerDiv = $("<div></div>", {class : "col-md-12"});
    $innerDiv.css({ "text-align" : "center" });
    
    $innerDiv.append("<h3>Coming Soon</h3>");
    $rowDiv.append($innerDiv);
    $("#main-container").append($rowDiv);
}

/* API calls in the future maybe?
$.ajax({
    url: "",
    type: "GET",
    contentType: "application/json"
})
.done(function(data) {
    
})
.fail(function(err) {
   
}) */

// generic modal function, probably will use in the future?
/* function showGenericModal(title, message) {
    $("#genericModal .modal-title").empty();
    $("#genericModal .modal-body").empty();

    $("#genericModal .modal-title").append(title);
    $("#genericModal .modal-body").append(message);

    $("#genericModal").modal('show');
} */
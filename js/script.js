'use strict'

$( document ).ready(function() {

    var $navItems = $(".nav-item");
    var $navTargs = $(".nav-target");

    $navItems.on("click", function(){
        $navItems.removeClass("active");
        $(this).addClass("active");
    });

    $( document ).scroll( function(){
        isInView()
    } );
});

function isInView(elem){
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
}

var $modal = $("#modal");
var $img = $("#img-for-modal");
var $imgClick = $("#img-click");
var $modalImg = $("#img01");
var $captionText = $("#modal-caption")

$imgClick.on("click", function(){
    $modal.css("display", "block")
    $modalImg.attr("src", $img.attr("src"));
    $captionText.html($img.attr("alt"));
});

// Get the <span> element that closes the modal
var $closeBtn = $(".close")[0];

// When the user clicks on <span> (x), close the modal
$closeBtn.onclick = function() {
    $modal.css("display", "none");
}
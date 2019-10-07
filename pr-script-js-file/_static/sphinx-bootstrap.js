// TOC sidebar - add "active" class to parent list
// 
// Bootstrap's scrollspy adds the active class to the <a> link,
// but for the automatic collapsing we need this on the parent list item.
// 
// The event is triggered on "window" (and not the nav item as documented),
// see https://github.com/twbs/bootstrap/issues/20086
$(window).on("activate.bs.scrollspy", function(){
var navLinks = document.querySelectorAll('#bd-toc-nav a');
for (var i = 0; i < navLinks.length; i++) {
    var navLink = navLinks[i];
    navLink.parentElement.classList.remove('active');
}
var navLinks = document.querySelectorAll('#bd-toc-nav a.active');
for (var i = 0; i < navLinks.length; i++) {
    var navLink = navLinks[i];
    navLink.parentElement.classList.add('active');
}
});
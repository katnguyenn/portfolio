// takes user to top of page when they hit refresh button
window.location.hash = "";
//removes # sign in URL
history.pushState("", document.title, window.location.pathname);


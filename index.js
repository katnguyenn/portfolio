// removes # in URL
$(window).on('hashchange', function(e){
    history.replaceState ("", document.title, window.location.pathname);
});
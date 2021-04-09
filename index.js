// removes # in URL
$(window).on('hashchange', function(e){
    history.replaceState ("", document.title, window.location.pathname);
});

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
function myFunction() {
  var body = document.getElementById("parent");
  //   var print_area = window.open();
  // print_area.document.write(body.innerHTML);
  //document.getElementById("demo").innerHTML = body.innerHTML;
  var mailTo = "mailto:?body=" + encodeURIComponent(body.innerHTML);
  window.location.href = mailTo;
}

function additem( data ) {
    console.log("data: " + data );
    document.getElementById("targetTable").innerHTML=data;
}

document.addEventListener("DOMContentLoaded", function() {
  var buttons = document.querySelectorAll(".Data");

  for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function() {
    var contentId = this.getAttribute("data-id");
    var req = new Request('ajax.php', 
    { method: 'post', 
      type: 'basic', 
      headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
      body: 'action='+ contentId
    });

    fetch( req )
        .then( response => {return response.text();})
        .then( additem ); 
       });
  };
});


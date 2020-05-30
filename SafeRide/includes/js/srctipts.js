(function () {
  init_map = function () {
    var serial_number = ['G8998', 'K9980', 'V4456', 'R2121', 'D4321', 'B3232'];
    var city = ['Tel-Aviv', 'Tel-Aviv', 'Tel-Aviv', 'Tel-Aviv', 'Tel-Aviv', 'Tel-Aviv'];
    var helmet = ['Yes', 'No', 'Yes', 'No', 'Yes', 'No'];
    var status = ['New', 'Used', 'Repair required', 'New', 'Used', 'Repair required'];
    
    var cards = document.getElementById('cards_container');
    var cards_length = serial_number.length;

    if (cards_length  <= 0)
      return;

    for (i = 0; i < 6; i++) {
      $(cards).append(" <div class='col-lg-4 col-md-3 col-sm-6'><div class='bodycard'><div id='bird'><button onclick='myFunction()' class='dropbtn'><i class='fas fa-ellipsis-v'></i></button><div id='myDropdown' class='dropdown-content'><a href='#'>Edit</a><a href='#'>Delete</a></div></div></div><ul class='list-group list-group-flush'>");
      $(cards).append("</ul></div></div>");

      var body_card = document.getElementsByClassName('bodycard');


      $(body_card[i]).append(" <li class='list-group-item'>Serial number - " + serial_number[i] + "</li>");
      $(body_card[i]).append("<li class='list-group-item'>City - " + city[i] + "</li>");
      $(body_card[i]).append("<li class='list-group-item'>Helmet - " + helmet[i] + "</li>");
      $(body_card[i]).append("<li class='list-group-item'>Status - " + status[i] + "</li>");

    }


  };

  init_map();

}())


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

$("#all_button").on("click",function(){
  if (($("input[name*='status']:checked").length)<=0 || ($("input[name*='helmet']:checked").length)<=0) {
      alert("You must check at least 1 box");
  }
  return true;
});

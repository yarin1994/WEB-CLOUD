(function () {
    $('input[type="color"]').change(function () {
      $('body').css('background', $(this).val());
    });
  
    var nameInput = $('input[name="fullName"]');
    var isValid=false;
    var error = $('<span class="error">FullName must incluse at least one space</span>')
      .insertAfter(nameInput)
      .hide();
  
    nameInput.blur(function () {
   
      if(($(this).val()).split(" ").length-1 >=1){
          isValid=true;
      } 
      if (!isValid)
        error.show();
      else
        error.hide('slow');
    });

    var my_interst = $('#interests');
    var checkbox = $('input[name="interests[]"]');
    var checkedBox = checkbox.length;
    var interest_error = $('<span class="error"  >you must check at least one box</span>')
    .insertAfter(my_interst)
    .hide();
    console.log($('input[name="interests[]"]:checked').length);
    checkbox.blur(function(){
      if( $('input[name="interests[]"]:checked').length < 1 ){
        interest_error.show();
      }
        else
        interest_error.hide();
    });


     function last_check() {
      if($('input[name="interests[]"]:checked').length==0)
      {
        alert(interest_error);
        return

      }
    }
    
}());



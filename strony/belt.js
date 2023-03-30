function showSecondaryOption() {
    var primarySelect = document.getElementById("primary-option");
    var secondaryDiv = document.getElementById("secondary-option");
  
//#####################Capotia############################


        if (primarySelect.value === "option2") {
        // show the secondary option
        secondaryDiv.style.display = "block";
        var select = document.getElementById("secondary-select");
    var image = document.getElementById("my-image");

select.addEventListener("change", function() {
var selectedValue = select.value;
image.src = selectedValue;
});
    } else {
      // hide the secondary option
      secondaryDiv.style.display = "none";
    }


//######################### Basilisk ##############################


    var secondaryDiv = document.getElementById("secondary-option1");
  
    if (primarySelect.value === "option4") {
      // show the secondary option
      secondaryDiv.style.display = "block";

        var select = document.getElementById("secondary-select1");
    var image = document.getElementById("my-image");

    select.addEventListener("change", function() {
    var selectedValue = select.value;
    image.src = selectedValue;
});
    } else {
      // hide the secondary option
      secondaryDiv.style.display = "none";
    }
  }



  //################################# Tuvala###############################
  


  
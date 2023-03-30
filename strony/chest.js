
    function showSecondaryOption() {
      var primarySelect = document.getElementById("primary-option");
      var secondaryDiv = document.getElementById("secondary-option");
    
      if (primarySelect.value === "option3") {
        // show the secondary option
        secondaryDiv.style.display = "block";
      } else {
        // hide the secondary option
        secondaryDiv.style.display = "none";
      }
    }

    var select = document.getElementById("secondary-select");
var image = document.getElementById("my-image");

select.addEventListener("change", function() {
  var selectedValue = select.value;
  image.src = selectedValue;
});
    
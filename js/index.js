var input = document.getElementById("search");

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      val = input.value;
      input.value = "";
      var inputElement = document.createElement('input');
      inputElement.type = 'url';
      inputElement.value = val;

      if (!inputElement.checkValidity()) {
        window.location.href = "https://www.google.com/search?q="+val;
      } else {
        window.location.href = val;
      }   
    }
});
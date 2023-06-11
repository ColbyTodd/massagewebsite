function goToNewPage(location) {
    var text = location; // The text you want to pass to the new page
    var url = "booking.html?text=" + encodeURIComponent(text);
    window.location.href = url;
  }

window.onload = function() {
    document.getElementById('submitButton').disabled = true;

    var urlParams = new URLSearchParams(window.location.search);
    var text = urlParams.get('text');
    switch(text){
        case 'Barrhaven':
            document.getElementById("inputLocation").selectedIndex = 0;
            break;
        case 'Kanata':
            document.getElementById("inputLocation").selectedIndex = 1;
            break;
        case 'Merivale':
            document.getElementById("inputLocation").selectedIndex = 2;
            break;
    }
    
}

var sourceField = document.getElementById('inputLocation');
var targetSelect = document.getElementById('inputExpert');

    // Add event listener to the source field
    sourceField.addEventListener('input', updateSelectOptions);

    // Function to update the options of the target select
    function updateSelectOptions() {
      var inputValue = sourceField.value; // Get the value of the source field

      // Clear existing options
      targetSelect.innerHTML = '';

      // Add new options based on the source field value
      if (inputValue === 'Barrhaven') {
        addOption('Karen', 'option1');
        addOption('Henry', 'option2');
        addOption('Kathy', 'option3');
      } else if (inputValue === 'Kanata') {
        addOption('John', 'option1');
        addOption('Jane', 'option2');
        addOption('Lola', 'option3');
      } else if (inputValue === 'Merivale') {
        addOption('Isabella', 'option1');
        addOption('Brad', 'option2');
        addOption('Miles', 'option3');
      } else {
            addOption('Choose a location first', 'option1');
      }
      // Add more conditionals as needed for different values

      // Function to add an option to the select element
      function addOption(text, value) {
        var option = document.createElement('option');
        option.text = text;
        option.value = value;
        targetSelect.add(option);
      }
    }

// Get references to the form fields and the submit button
var nameInput = document.getElementById('inputName');
var emailInput = document.getElementById('inputEmail');
var serviceInput = document.getElementById('inputService');
var locationInput = document.getElementById('inputLocation');
var expertInput = document.getElementById('inputExpert');
var dateInput = document.getElementById('datetimepicker1');
var submitButton = document.getElementById('submitButton');

// Add event listeners to the form fields
nameInput.addEventListener('input', checkFormFields);
emailInput.addEventListener('input', checkFormFields);
serviceInput.addEventListener('input', checkFormFields);
locationInput.addEventListener('input', checkFormFields);
expertInput.addEventListener('input', checkFormFields);
dateInput.addEventListener('input', checkFormFields);

// Function to check if all form fields are filled
function checkFormFields() {
  if (nameInput.value !== '' && emailInput.value !== '' && serviceInput.value !== '' && locationInput.value !== '' && expertInput.value !== 'Choose a location first') {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}
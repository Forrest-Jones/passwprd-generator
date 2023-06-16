var uppercaseCheckbox = document.getElementById('uppercase');
var lowercaseCheckbox = document.getElementById('lowercase');
var numbersCheckbox = document.getElementById('numbers');
var specialCheckbox = document.getElementById('special');
var resultElement = document.getElementById('result');

function generatePassword() {
  var length = parseInt(document.getElementById('length').value);
  var characterOptions = '';

  if (uppercaseCheckbox.checked) {
    characterOptions += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (lowercaseCheckbox.checked) {
    characterOptions += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (numbersCheckbox.checked) {
    characterOptions += '0123456789';
  }
  if (specialCheckbox.checked) {
    characterOptions += '!@#$%^&*()';
  }

  if (length > 0 && characterOptions !== '') {
    var password = '';

    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * characterOptions.length);
      password += characterOptions.charAt(randomIndex);
    }

    resultElement.textContent = 'Password: ' + password;
  } else {
    resultElement.textContent = 'Invalid length or character options';
  }
}

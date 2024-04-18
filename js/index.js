document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculate button')
    calculateButton.addEventListener('click', calculateAkanName)
})

function calculateAkanName() {
const dobInput = document.getElementById('dob').value
const genderInput = document.getElementById('gender').value
}

if (!dobInput || !genderInput) {
    alert("Please enter your date of birth and select your gender.");
    return;
  }


if (dob && gender) {
    const dateOfBirth = new Date(dobInput);
    const dayOfWeek = dateOfBirth.getDay();
}

const akanNamesMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
const akanNamesFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

let akanName;
    
    if (gender === 'male') {
      akanName = akanNamesMale[dayOfWeek];
    } else {
      akanName = akanNamesFemale[dayOfWeek];
    }

    const resultElement = document.getElementById('result');
    resultElement.innerText = "You were born on " + getDayName(dayOfWeek) + ", your Akan name is " + akanName + ".";

    function getDayName(dayIndex) {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return daysOfWeek[dayIndex];
      }


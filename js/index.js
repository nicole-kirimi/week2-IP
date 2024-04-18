document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculate button')
    calculateButton.addEventListener('click', calculateAkanName)
})

function calculateAkanName() {
const dob = document.getElementById('dob').value
const gender = document.getElementById('gender').value
}

if (dob && gender) {
    const dateOfBirth = new Date(dobInput);
    const dayOfWeek = dateOfBirth.getDay();
}

const akanNamesMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
const akanNamesFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

let akanName;
    
    if (genderInput === 'male') {
      akanName = akanNamesMale[dayOfWeek];
    } else {
      akanName = akanNamesFemale[dayOfWeek];
    }

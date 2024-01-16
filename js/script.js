






document.getElementById('fullYear').addEventListener('change', function () {
    setDateInputValues();
});


function setDateInputValues() {
    
    var dateInput = document.getElementById('fullYear');
    var birthMonthInput = document.getElementById('month');
    var birthDayInput = document.getElementById('day');
    var birthYearInput = document.getElementById('year');


    document.getElementById('error-month').textContent = "";
    document.getElementById('error-day').textContent = "";
    document.getElementById('error-year').textContent = "";

   
    if (dateInput.value !== "") {
        var date = new Date(dateInput.value);

      
        if (date > new Date()) {
            document.getElementById('error-year').textContent = "Birthday date should not be greater than the current date.";
            return;
        }

        
        birthMonthInput.value = (date.getMonth() + 1).toString(); 
        birthDayInput.value = date.getDate().toString();
        birthYearInput.value = date.getFullYear().toString();
    }
}


function resetForm() {
    
    document.getElementById('month').value = "";
    document.getElementById('day').value = "";
    document.getElementById('year').value = "";
    document.getElementById('fullYear').value = "";

}


function calculateAge() {

   
    document.getElementById('result').textContent = "";
   
    var birthMonth = document.getElementById('month').value;
    var birthDay = document.getElementById('day').value;
    var birthYear = document.getElementById('year').value;


    var isError = false;

    if (!isValidMonth(birthMonth)) {
        document.getElementById('error-month').textContent = "Please select a valid month.";
        isError = true;
    }

    if (!isValidDay(birthDay)) {
        document.getElementById('error-day').textContent = "Please enter a valid day ";
        isError = true;
    }

    if (!isValidYear(birthYear)) {
        document.getElementById('error-year').textContent = "Please enter a valid 4-digit year.";
        isError = true;
    }

    if (!isYearNotGreaterThanCurrent(birthYear)) {
        document.getElementById('error-year').textContent = "Please enter a year not greater than the current year.";
        isError = true;
    }

    if (isError) {
        return;
    }


    document.getElementById('error-month').textContent = "";
    document.getElementById('error-day').textContent = "";
    document.getElementById('error-year').textContent = "";

    var birthDate = new Date(birthYear, birthMonth - 1, birthDay);

    var currentDate = new Date();

    var age = currentDate.getFullYear() - birthDate.getFullYear();

    if (
        currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    var resultElement = document.getElementById('result');
    resultElement.textContent = "Your age is: " + age + " years.";
}

function isValidMonth(month) {
    return /^\d{1,2}$/.test(month) && parseInt(month, 10) >= 1 && parseInt(month, 10) <= 12;
}

function isValidDay(day) {
    return /^\d{1,2}$/.test(day) && parseInt(day, 10) >= 1 && parseInt(day, 10) <= 31;
}

function isValidYear(year) {
    return /^\d{4}$/.test(year);
}

function isYearNotGreaterThanCurrent(year) {
    var currentYear = new Date().getFullYear();
    return parseInt(year, 10) <= currentYear;
}


document.getElementById('button').addEventListener('click', function () {
    calculateAge();
    resetForm();
});


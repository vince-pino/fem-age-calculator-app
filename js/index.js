function calculateAge(birthDate) {
    let currentDate = new Date();
    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    // Adjust for negative months
    if (months < 0 || (months === 0 && currentDate.getDate() < birthDate.getDate())) {
        years--;
        months += 12;
    }

    // Adjust for negative days
    if (days < 0) {
        months--;
        let lastMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        days += lastMonthDate.getDate();
    }

    return {
        years: years,
        months: months,
        days: days
    };
}

const btnEl = document.getElementById('calculateBtn');
btnEl.addEventListener('click', () => {
    const present = new Date();
    const presentYear = present.getFullYear();

    const day = document.getElementById('dayInput').value;
    const month = document.getElementById('monthInput').value;
    const year = document.getElementById('yearInput').value;

    if (day === '') {
        document.querySelector('.day.error-message').textContent = "This field is required";
        document.querySelector('label[for="day"]').classList.add('invalid');
        document.getElementById('dayInput').classList.add('error-input');
    }
    else if (day < 1 || day > 31) {
        document.querySelector('.day.error-message').textContent = "Must be a valid day";
        document.querySelector('label[for="day"]').classList.add('invalid');
        document.getElementById('dayInput').classList.add('error-input');
    }
    else {
        document.querySelector('.day.error-message').textContent = "";
        document.querySelector('label[for="day"]').classList.remove('invalid');
        document.getElementById('dayInput').classList.remove('error-input');
    }

    if (month === '') {
        document.querySelector('.month.error-message').textContent = "This field is required";
        document.querySelector('label[for="month"]').classList.add('invalid');
        document.getElementById('monthInput').classList.add('error-input');
    }
    else if (month < 1 || month > 12) {
        document.querySelector('.month.error-message').textContent = "Must be a valid month";
        document.querySelector('label[for="month"]').classList.add('invalid');
        document.getElementById('monthInput').classList.add('error-input');
    }
    else {
        document.querySelector('.month.error-message').textContent = "";
        document.querySelector('label[for="month"]').classList.remove('invalid');
        document.getElementById('monthInput').classList.remove('error-input');
    }

    if (year === '') {
        document.querySelector('.year.error-message').textContent = "This field is required";
        document.querySelector('label[for="year"]').classList.add('invalid');
        document.getElementById('yearInput').classList.add('error-input');
    }
    else if (year < 1) {
        document.querySelector('.year.error-message').textContent = "Must be a valid year";
        document.querySelector('label[for="year"]').classList.add('invalid');
        document.getElementById('yearInput').classList.add('error-input');
    }
    else if (year > presentYear) {
        document.querySelector('.year.error-message').textContent = "Must be in the past";
        document.querySelector('label[for="year"]').classList.add('invalid');
        document.getElementById('yearInput').classList.add('error-input');
    }
    else {
        document.querySelector('.year.error-message').textContent = "";
        document.querySelector('label[for="year"]').classList.remove('invalid');
        document.getElementById('yearInput').classList.remove('error-input');
    }
    
   

    let birthDate = new Date(`${year}-${month}-${day}`);
    var age = calculateAge(birthDate);

    
    
    document.getElementById('years').textContent = age.years;
    document.getElementById('months').textContent = age.months;
    document.getElementById('days').textContent = age.days;
});



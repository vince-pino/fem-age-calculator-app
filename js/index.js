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

document.getElementById('calculateBtn').addEventListener('click', () => {
    const presentYear = new Date().getFullYear();
    
    const day = document.getElementById('dayInput').value;
    const month = document.getElementById('monthInput').value;
    const year = document.getElementById('yearInput').value;

    const inputs = [
        { id: 'dayInput', value: day, label: 'day', max: 31, errorMessage: 'Must be a valid day' },
        { id: 'monthInput', value: month, label: 'month', max: 12, errorMessage: 'Must be a valid month' },
        { id: 'yearInput', value: year, label: 'year', max: presentYear, errorMessage: 'Must be a valid year', additionalCheck: year => year > presentYear ? 'Must be in the past' : '' }
    ];

    let isValid = true;

    inputs.forEach(input => {
        const { id, value, label, max, errorMessage, additionalCheck } = input;
        const errorElement = document.querySelector(`.${label}.error-message`);
        const labelElement = document.querySelector(`label[for="${label}"]`);
        const inputElement = document.getElementById(id);

        let message = '';

        if (value === '') {
            message = 'This field is required';
        } 
        if (id === 'yearInput') {
            if (value < 1 ) {
                message = errorMessage;
            } else if (value > max) {
                message = additionalCheck(value);
            }
        }
        else if (value < 1 || value > max) {
            message = errorMessage;
        }

        if (message) {
            errorElement.textContent = message;
            labelElement.classList.add('invalid');
            inputElement.classList.add('error-input');
            isValid = false;
        } else {
            errorElement.textContent = '';
            labelElement.classList.remove('invalid');
            inputElement.classList.remove('error-input');
        }
    });

    if (!isValid) return;

    const birthDate = new Date(`${year}-${month}-${day}`);
    const age = calculateAge(birthDate);

    document.getElementById('years').textContent = age.years;
    document.getElementById('months').textContent = age.months;
    document.getElementById('days').textContent = age.days;
});



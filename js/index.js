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
    const day = document.getElementById('dayInput').value;
    const month = document.getElementById('monthInput').value;
    const year = document.getElementById('yearInput').value;

    let birthDate = new Date(`${year}-${month}-${day}`);
    var age = calculateAge(birthDate);
    console.log(age.years + " years, " + age.months + " months, and " + age.days + " days");
});


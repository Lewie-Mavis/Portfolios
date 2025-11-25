const numbersCounters = document.querySelectorAll('#numbers .count');
const numbersSectionObserverTarget = document.querySelector('#numbers');

// Function to animate all counters in the numbers section
function animateNumbersCounters() {
    numbersCounters.forEach(numbersCounter => {
        numbersCounter.innerText = '0'; // Reset on each view
        const numbersTarget = +numbersCounter.getAttribute('data-target');
        let numbersCurrent = 0;
        const numbersIncrement = numbersTarget / 100;

        const updateNumbersCount = () => {
            if (numbersCurrent < numbersTarget) {
                numbersCurrent += numbersIncrement;
                numbersCounter.innerText = Math.ceil(numbersCurrent);
                setTimeout(updateNumbersCount, 20);
            } else {
                numbersCounter.innerText = numbersTarget;
            }
        };

        updateNumbersCount();
    });
}

// Observer for #numbers section visibility
const numbersSectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateNumbersCounters();
        }
    });
}, { threshold: 0.5 });

numbersSectionObserver.observe(numbersSectionObserverTarget);
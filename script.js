document.addEventListener('DOMContentLoaded', () => {
    // Elements for Profit Calculator
    const initialDepositInput = document.getElementById('initialDeposit');
    const targetRoiSlider = document.getElementById('targetRoi');
    const roiValueText = document.getElementById('roiValue');
    const durationSelect = document.getElementById('duration');
    const finalBalanceText = document.getElementById('finalBalance');
    const netProfitText = document.getElementById('netProfit');

    // Function to calculate projected profits
    function calculateProfit() {
        const deposit = parseFloat(initialDepositInput.value) || 0;
        const roiPercent = parseFloat(targetRoiSlider.value) / 100;
        const months = parseInt(durationSelect.value);

        // Update Slider Text Display
        roiValueText.textContent = `${targetRoiSlider.value}%`;

        // Compound Interest Calculation: Final = Principal * (1 + rate)^months
        const finalBalance = deposit * Math.pow((1 + roiPercent), months);
        const netProfit = finalBalance - deposit;

        // Formatting currency output
        finalBalanceText.textContent = `$${Math.round(finalBalance).toLocaleString('en-US')} USD`;
        netProfitText.textContent = `+$${Math.round(netProfit).toLocaleString('en-US')} USD`;
    }

    // Attach Event Listeners
    if (initialDepositInput && targetRoiSlider && durationSelect) {
        initialDepositInput.addEventListener('input', calculateProfit);
        targetRoiSlider.addEventListener('input', calculateProfit);
        durationSelect.addEventListener('change', calculateProfit);

        // Initial Calculation Run
        calculateProfit();
    }

    // Smooth Scroll Offset for Sticky Navbar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
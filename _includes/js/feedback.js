// Feedback form functionality
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedback-form');
    const goBackButton = document.querySelector('.go-back-button');
    
    // Go back functionality
    if (goBackButton) {
        goBackButton.addEventListener('click', function() {
            window.history.back();
        });
    }
    
    // Form submission
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Basic validation
            const requiredFields = ['filing-date', 'contact-name', 'contact-lastname', 'company-name', 'complaint-description'];
            const missingFields = requiredFields.filter(field => !data[field] || data[field].trim() === '');
            
            if (missingFields.length > 0) {
                alert('Please fill in all required fields: ' + missingFields.join(', '));
                return;
            }
            
            // Simulate form submission
            const submitButton = form.querySelector('.submit-button');
            const originalText = submitButton.querySelector('span').textContent;
            
            // Show loading state
            submitButton.querySelector('span').textContent = 'Submitting...';
            submitButton.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                alert('Thank you for your feedback! We will review your complaint and get back to you soon.');
                form.reset();
                
                // Reset button
                submitButton.querySelector('span').textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }
    
    // Date input formatting
    const dateInputs = document.querySelectorAll('.date-input');
    dateInputs.forEach(input => {
        input.addEventListener('change', function() {
            if (this.value) {
                // Format date to DD/MM/YYYY if needed
                const date = new Date(this.value);
                if (!isNaN(date.getTime())) {
                    const day = String(date.getDate()).padStart(2, '0');
                    const month = String(date.getMonth() + 1).padStart(2, '0');
                    const year = date.getFullYear();
                    // Note: HTML date inputs automatically handle formatting
                }
            }
        });
    });
    
    // Number input validation
    const numberInputs = document.querySelectorAll('input[type="number"]');
    numberInputs.forEach(input => {
        input.addEventListener('input', function() {
            // Ensure positive numbers only
            if (this.value < 0) {
                this.value = 0;
            }
        });
    });
});

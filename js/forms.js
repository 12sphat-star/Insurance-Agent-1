/* forms.js - Form Validation & Submission */

document.addEventListener('DOMContentLoaded', () => {
    const leadForm = document.getElementById('lead-form');

    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleFormSubmission(leadForm);
        });
    }
});

/**
 * Handle Lead Form Submission
 */
async function handleFormSubmission(form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerText;

    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.innerText = 'Sending...';

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Add additional metadata for tracking
    data.source = window.location.pathname;
    data.timestamp = new Date().toISOString();
    data.visitor_id = localStorage.getItem('visitor_id') || 'anonymous';

    // Simulate API Call (e.g., to GoHighLevel or custom API)
    try {
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log('Lead Data Captured:', data);

        // Show Success Message
        showFormSuccess(form);

        // Tagging logic for CRM
        if (data.full_name) {
            localStorage.setItem('lead_captured', 'true');
            localStorage.setItem('lead_name', data.full_name);
        }

    } catch (error) {
        console.error('Submission Error:', error);
        submitBtn.disabled = false;
        submitBtn.innerText = 'Error! Try Again';
    }
}

/**
 * Show Success Message inside the form
 */
function showFormSuccess(form) {
    const parent = form.parentElement;
    parent.innerHTML = `
        <div class="success-message text-center animate-fade-up">
            <div class="success-icon mb-2" style="font-size: 3rem; color: var(--trust-green);">&check;</div>
            <h2 class="mb-2">Thank You, ${localStorage.getItem('lead_name') || 'Friend'}!</h2>
            <p>Your request has been received. Keith or someone from his personal team will be in touch shortly to confirm your strategy session.</p>
            <a href="index.html" class="btn btn-primary mt-4">Back to Home</a>
        </div>
    `;
}

/**
 * Basic Validation Helper
 */
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

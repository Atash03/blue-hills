// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('certifications-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalClose = document.getElementById('modal-close');
    const certificationButton = document.querySelector('.certification-button');
    
    if (!modal || !certificationButton) {
        return;
    }
    
    // Open modal
    function openModal() {
        modal.classList.add('active');
        document.body.classList.add('modal-open');
        
        // Trap focus in modal
        modal.focus();
    }
    
    // Close modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
        
        // Return focus to the button that opened the modal
        certificationButton.focus();
    }
    
    // Event listeners
    certificationButton.addEventListener('click', function(e) {
        e.preventDefault();
        openModal();
    });
    
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    
    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Handle keyboard navigation in modal
    modal.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                }
            } else {
                if (document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        }
    });
});

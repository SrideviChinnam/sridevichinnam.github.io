// ================== Authentication JavaScript ==================

$(document).ready(function() {
    // Initialize authentication functionality
    initAuth();
});

function initAuth() {
    // User type selection
    initUserTypeSelection();
    
    // Password visibility toggle
    initPasswordToggle();
    
    // Password strength checker
    initPasswordStrength();
    
    // Form validation
    initFormValidation();
    
    // Form submission
    initFormSubmission();
}

// ================== User Type Selection ==================

function initUserTypeSelection() {
    $('.user-type-option').on('click', function() {
        // Remove selected class from all options
        $('.user-type-option').removeClass('selected');
        
        // Add selected class to clicked option
        $(this).addClass('selected');
        
        // Store selected user type
        const userType = $(this).data('type');
        $('input[name="userType"]').remove(); // Remove existing hidden input
        $('<input>').attr({
            type: 'hidden',
            name: 'userType',
            value: userType
        }).appendTo('form');
        
        // Update form action or behavior based on user type
        updateFormForUserType(userType);
    });
}

function updateFormForUserType(userType) {
    // Update form behavior based on selected user type
    const form = $('form');
    
    switch(userType) {
        case 'user':
            // Standard user form behavior
            break;
        case 'agent':
            // Agent-specific form behavior
            break;
        case 'admin':
            // Admin-specific form behavior
            break;
        case 'superadmin':
            // Super admin-specific form behavior
            break;
    }
}

// ================== Password Visibility Toggle ==================

function initPasswordToggle() {
    // Password toggle for login form
    $('#togglePassword').on('click', function() {
        togglePasswordVisibility('#password', '#togglePassword');
    });
    
    // Password toggle for registration forms
    $('#toggleConfirmPassword').on('click', function() {
        togglePasswordVisibility('#confirmPassword', '#toggleConfirmPassword');
    });
}

function togglePasswordVisibility(inputId, buttonId) {
    const input = $(inputId);
    const button = $(buttonId);
    const icon = button.find('i');
    
    if (input.attr('type') === 'password') {
        input.attr('type', 'text');
        icon.removeClass('fa-eye').addClass('fa-eye-slash');
    } else {
        input.attr('type', 'password');
        icon.removeClass('fa-eye-slash').addClass('fa-eye');
    }
}

// ================== Password Strength Checker ==================

function initPasswordStrength() {
    $('#password').on('input', function() {
        const password = $(this).val();
        const strength = calculatePasswordStrength(password);
        updatePasswordStrengthUI(strength);
    });
}

function calculatePasswordStrength(password) {
    let score = 0;
    let feedback = [];
    
    // Length check
    if (password.length >= 8) score += 1;
    else feedback.push('At least 8 characters');
    
    // Lowercase check
    if (/[a-z]/.test(password)) score += 1;
    else feedback.push('Lowercase letters');
    
    // Uppercase check
    if (/[A-Z]/.test(password)) score += 1;
    else feedback.push('Uppercase letters');
    
    // Number check
    if (/\d/.test(password)) score += 1;
    else feedback.push('Numbers');
    
    // Special character check
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 1;
    else feedback.push('Special characters');
    
    // Determine strength level
    if (score < 2) return { level: 'weak', score: score, feedback: feedback };
    if (score < 3) return { level: 'fair', score: score, feedback: feedback };
    if (score < 4) return { level: 'good', score: score, feedback: feedback };
    return { level: 'strong', score: score, feedback: feedback };
}

function updatePasswordStrengthUI(strength) {
    const strengthFill = $('#strengthFill');
    const strengthText = $('#strengthText');
    
    // Remove existing classes
    strengthFill.removeClass('weak fair good strong');
    
    // Add new class and update width
    strengthFill.addClass(strength.level);
    
    // Update text
    const levelText = strength.level.charAt(0).toUpperCase() + strength.level.slice(1);
    strengthText.text(`${levelText} password`);
    
    // Update color
    strengthText.removeClass('text-danger text-warning text-info text-success');
    switch(strength.level) {
        case 'weak':
            strengthText.addClass('text-danger');
            break;
        case 'fair':
            strengthText.addClass('text-warning');
            break;
        case 'good':
            strengthText.addClass('text-info');
            break;
        case 'strong':
            strengthText.addClass('text-success');
            break;
    }
}

// ================== Form Validation ==================

function initFormValidation() {
    // Real-time validation
    $('input[required]').on('blur', function() {
        validateField($(this));
    });
    
    // Email validation
    $('input[type="email"]').on('blur', function() {
        validateEmail($(this));
    });
    
    // Password confirmation validation
    $('#confirmPassword').on('blur', function() {
        validatePasswordConfirmation();
    });
    
    // Phone number validation
    $('input[type="tel"]').on('blur', function() {
        validatePhone($(this));
    });
}

function validateField(field) {
    const value = field.val().trim();
    const isValid = value !== '';
    
    updateFieldValidation(field, isValid, isValid ? '' : 'This field is required');
    return isValid;
}

function validateEmail(field) {
    const email = field.val().trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    
    updateFieldValidation(field, isValid, isValid ? '' : 'Please enter a valid email address');
    return isValid;
}

function validatePasswordConfirmation() {
    const password = $('#password').val();
    const confirmPassword = $('#confirmPassword').val();
    const isValid = password === confirmPassword && password !== '';
    
    updateFieldValidation($('#confirmPassword'), isValid, isValid ? '' : 'Passwords do not match');
    return isValid;
}

function validatePhone(field) {
    const phone = field.val().trim();
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const isValid = phone === '' || phoneRegex.test(phone);
    
    updateFieldValidation(field, isValid, isValid ? '' : 'Please enter a valid phone number');
    return isValid;
}

function updateFieldValidation(field, isValid, message) {
    // Remove existing validation classes
    field.removeClass('is-valid is-invalid');
    
    // Remove existing feedback
    field.siblings('.invalid-feedback').remove();
    
    if (isValid) {
        field.addClass('is-valid');
    } else {
        field.addClass('is-invalid');
        if (message) {
            field.after(`<div class="invalid-feedback">${message}</div>`);
        }
    }
}

// ================== Form Submission ==================

function initFormSubmission() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        
        if (validateForm($(this))) {
            submitForm($(this));
        }
    });
}

function validateForm(form) {
    let isValid = true;
    
    // Validate all required fields
    form.find('input[required], select[required], textarea[required]').each(function() {
        const field = $(this);
        let fieldValid = true;
        
        if (field.attr('type') === 'email') {
            fieldValid = validateEmail(field);
        } else if (field.attr('type') === 'tel') {
            fieldValid = validatePhone(field);
        } else {
            fieldValid = validateField(field);
        }
        
        if (!fieldValid) isValid = false;
    });
    
    // Validate password confirmation if password field exists
    if (form.find('#password').length && form.find('#confirmPassword').length) {
        if (!validatePasswordConfirmation()) isValid = false;
    }
    
    // Validate checkboxes
    form.find('input[type="checkbox"][required]').each(function() {
        if (!$(this).is(':checked')) {
            isValid = false;
            updateFieldValidation($(this), false, 'This field is required');
        }
    });
    
    return isValid;
}

function submitForm(form) {
    const formData = new FormData(form[0]);
    const userType = formData.get('userType') || 'user';
    
    // Show loading state
    const submitBtn = form.find('button[type="submit"]');
    const originalText = submitBtn.html();
    submitBtn.html('<i class="fas fa-spinner fa-spin"></i> Processing...').prop('disabled', true);
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Reset button state
        submitBtn.html(originalText).prop('disabled', false);
        
        // Show success message
        showNotification('Registration successful! Please check your email for verification.', 'success');
        
        // Redirect based on user type
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
        
    }, 2000);
}

// ================== Utility Functions ==================

function showNotification(message, type = 'info') {
    // Remove existing notifications
    $('.notification').remove();
    
    // Create notification element
    const notification = $(`
        <div class="notification alert alert-${type} alert-dismissible fade show" role="alert">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `);
    
    // Add to page
    $('body').prepend(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.alert('close');
    }, 5000);
}

function getNotificationIcon(type) {
    switch(type) {
        case 'success': return 'check-circle';
        case 'error': return 'exclamation-circle';
        case 'warning': return 'exclamation-triangle';
        default: return 'info-circle';
    }
}

// ================== Additional Features ==================

// Format phone number input
function formatPhoneNumber(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length >= 6) {
        value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    } else if (value.length >= 3) {
        value = value.replace(/(\d{3})(\d{0,3})/, '($1) $2');
    }
    input.value = value;
}

// Format SSN input
function formatSSN(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length >= 9) {
        value = value.replace(/(\d{3})(\d{2})(\d{4})/, '$1-$2-$3');
    } else if (value.length >= 5) {
        value = value.replace(/(\d{3})(\d{2})/, '$1-$2');
    }
    input.value = value;
}

// Initialize formatting on page load
$(document).ready(function() {
    // Phone number formatting
    $('input[type="tel"]').on('input', function() {
        formatPhoneNumber(this);
    });
    
    // SSN formatting
    $('#ssn').on('input', function() {
        formatSSN(this);
    });
});

// ================== Export for use in other scripts ==================

window.AuthUtils = {
    validateEmail,
    validatePhone,
    validatePasswordConfirmation,
    calculatePasswordStrength,
    showNotification,
    formatPhoneNumber,
    formatSSN
};

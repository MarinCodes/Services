// Contact information
const contactInfo = {
    Email: "cicakmarin5@gmail.com",
    Hours: "Monday - Sunday: 9:00 AM - 9:00 PM",
    
};

// Function to display contact information
function displayContactInfo() {
    return `
        <div class="contact-section">
            <h2>Contact Us</h2>
            <p><strong>Email:</strong> ${contactInfo.email}</p>
            <p><strong>Phone:</strong> ${contactInfo.phone}</p>
            <p><strong>Business Hours:</strong> ${contactInfo.hours}</p>
            <p><strong>Address:</strong> ${contactInfo.address}</p>
        </div>
    `;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { contactInfo, displayContactInfo };
}
// Theme switching functionality
let isDarkTheme = true;

function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    const body = document.body;
    const container = document.querySelector('.container');
    const inputs = document.querySelectorAll('input, textarea, select');
    const labels = document.querySelectorAll('label');
    const heading = document.querySelector('h1');

    if (isDarkTheme) {
        // Dark theme
        body.style.background = 'linear-gradient(135deg, #000000, #1a1a1a)';
        container.style.background = 'rgba(255, 255, 255, 0.05)';
        container.style.backdropFilter = 'blur(10px)';
        container.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        
        inputs.forEach(input => {
            input.style.backgroundColor = '#2a2a2a';
            input.style.color = '#ffffff';
            input.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        });

        labels.forEach(label => {
            label.style.color = '#ffffff';
            label.style.textShadow = '0 1px 2px rgba(0, 0, 0, 0.2)';
        });

        heading.style.color = '#ffffff';
        heading.style.textShadow = '0 2px 4px rgba(0, 0, 0, 0.3)';
    } else {
        // Light theme
        body.style.background = '#f0f2f5';
        container.style.background = 'white';
        container.style.backdropFilter = 'none';
        container.style.borderColor = 'transparent';
        
        inputs.forEach(input => {
            input.style.backgroundColor = 'white';
            input.style.color = '#000000';
            input.style.borderColor = '#e0e6ed';
        });

        labels.forEach(label => {
            label.style.color = '#34495e';
            label.style.textShadow = 'none';
        });

        heading.style.color = '#2c3e50';
        heading.style.textShadow = 'none';
    }
}

// Add theme toggle button to the page
document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.createElement('button');
    themeButton.textContent = 'Toggle Theme';
    themeButton.style.position = 'fixed';
    themeButton.style.top = '20px';
    themeButton.style.right = '20px';
    themeButton.style.zIndex = '1000';
    themeButton.addEventListener('click', toggleTheme);
    document.body.appendChild(themeButton);
});

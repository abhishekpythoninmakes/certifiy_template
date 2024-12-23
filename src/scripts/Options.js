// Option content for each selection in the who can benefit section
const optionContent = {
    companies: {
        title: 'Streamline Credential Management and Verification',
        imageSrc: '/images/companyMeeting.png',
        details: `
            <div class="flex items-center space-x-4">
                <img src="/images/checkbox.png" alt="Option 1" class="w-6 h-6 cursor-pointer" loading="lazy">
                <label for="option1" class="text-lg">Custom certificate designs</label>
            </div>
            <div class="flex items-center space-x-4">
                <img src="/images/checkbox.png" alt="Option 2" class="w-6 h-6 cursor-pointer" loading="lazy">
                <label for="option2" class="text-lg">Bulk issuance capabilities</label>
            </div>
            <div class="flex items-center space-x-4">
                <img src="/images/checkbox.png" alt="Option 3" class="w-6 h-6 cursor-pointer" loading="lazy">
                <label for="option3" class="text-lg">Comprehensive analytics</label>
            </div>`
    },
    partners: {
        title: 'Expand your revenue and service offerings',
        imageSrc: '/images/partnerImg.png',
        details: `
            <div class="flex items-center space-x-4">
                <img src="/images/checkbox.png" alt="Option 1" class="w-6 h-6 cursor-pointer">
                <label for="option1" class="text-lg">Integrated partnership program</label>
            </div>
            <div class="flex items-center space-x-4">
                <img src="/images/checkbox.png" alt="Option 2" class="w-6 h-6 cursor-pointer">
                <label for="option2" class="text-lg">Revenue sharing model</label>
            </div>
            <div class="flex items-center space-x-4">
                <img src="/images/checkbox.png" alt="Option 3" class="w-6 h-6 cursor-pointer">
                <label for="option3" class="text-lg">Dedicated partner support</label>
            </div>`
    },
    educational: {
        title: 'Empower your institutions recognition programs with digital credentials',
        imageSrc: '/images/educationImg.jpg',
        details: `
            <div class="flex items-center space-x-4">
                <img src="/images/checkbox.png" alt="Option 1" class="w-6 h-6 cursor-pointer">
                <label for="option1" class="text-lg">Easy template creation</label>
            </div>
            <div class="flex items-center space-x-4">
                <img src="/images/checkbox.png" alt="Option 2" class="w-6 h-6 cursor-pointer">
                <label for="option2" class="text-lg">Automated certificate generation</label>
            </div>
            <div class="flex items-center space-x-4">
                <img src="/images/checkbox.png" alt="Option 3" class="w-6 h-6 cursor-pointer">
                <label for="option3" class="text-lg">Enhanced student credential management</label>
            </div>`
    },
    brands: {
        title: 'Enhance Credibility and trust',
        imageSrc: '/images/brandsImg.png',
        details: `
            <div class="flex items-center space-x-4">
                <img src="/images/checkbox.png" alt="Option 1" class="w-6 h-6 cursor-pointer">
                <label for="option1" class="text-lg">Branded certificate templates</label>
            </div>
            <div class="flex items-center space-x-4">
                <img src="/images/checkbox.png" alt="Option 2" class="w-6 h-6 cursor-pointer">
                <label for="option2" class="text-lg">Advanced verification tools</label>
            </div>
            <div class="flex items-center space-x-4">
                <img src="/images/checkbox.png" alt="Option 3" class="w-6 h-6 cursor-pointer">
                <label for="option3" class="text-lg">Reputation management</label>
            </div>`
    }
};

// Function to check WebP support
function isWebPSupported() {
    const canvas = document.createElement('canvas');
    if (canvas.toDataURL) {
        return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }
    return false;
}

// Function to show content for a selected option
function showOptionContent(optionKey) {
    const content = optionContent[optionKey];
    const contentDiv = document.getElementById('optionContent');
    const optionImage = document.getElementById('optionImage');
    const optionTitle = document.getElementById('optionTitle');
    const optionDetails = document.getElementById('optionDetails');
    
    // Check if WebP is supported and adjust image source accordingly
    const imageFormat = isWebPSupported() ? '.webp' : '.png'; // Default to PNG if WebP is not supported
    const imageSrc = content.imageSrc.replace('.png', imageFormat); // Change file extension

    // Update the content
    optionImage.src = imageSrc; // Use the correct image format
    optionTitle.textContent = content.title;
    optionDetails.innerHTML = content.details;

    // Show the content section
    contentDiv.classList.remove('hidden');
}

// Event listener for option selection
document.querySelectorAll('.select-option').forEach(button => {
    button.addEventListener('click', () => {
        // Remove selected class from all buttons
        document.querySelectorAll('.select-option').forEach(btn => btn.classList.remove('text-[#e5c200]', 'underline', 'font-bold'));

        // Add selected class to the clicked button
        button.classList.add('text-[#e5c200]', 'underline', 'font-bold');
        
        // Get option data from data-option attribute
        const optionKey = button.getAttribute('data-option');
        showOptionContent(optionKey);
    });
});

// Automatically show content for the first option on page load
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.select-option').classList.add('text-[#e5c200]', 'underline', 'font-bold'); // Highlight first button
    showOptionContent('companies'); // Show content for "Companies" by default
});
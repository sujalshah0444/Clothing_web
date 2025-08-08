// Profabrics Website JavaScript

// Fabric-to-Garment Data Structure
const fabricData = {
    // Fabric types with detailed information
    fabrics: {
        'cotton-syncer': {
            name: 'Cotton Syncer',
            description: 'Premium cotton blend with enhanced durability and comfort',
            category: 'cotton',
            texture: '🧵',
            garmentTypes: ['normal-shirt', 'sporty-shirt'],
            properties: ['Breathable', 'Durable', 'Easy Care']
        },
        'cotton-roma': {
            name: 'Cotton Roma',
            description: 'Luxurious cotton with smooth finish and professional appeal',
            category: 'cotton',
            texture: '🏛️',
            garmentTypes: ['normal-shirt', 'formal-trousers'],
            properties: ['Smooth Finish', 'Professional', 'Wrinkle Resistant']
        },
        'fine-raw-cotton': {
            name: 'Fine Raw Cotton',
            description: 'Pure, unprocessed cotton with natural texture and breathability',
            category: 'cotton',
            texture: '🌿',
            garmentTypes: ['normal-shirt'],
            properties: ['Natural', 'Breathable', 'Soft Touch']
        },
        'nylon-sporty': {
            name: 'Nylon Sporty',
            description: 'High-performance nylon designed for athletic and active wear',
            category: 'nylon',
            texture: '⚡',
            garmentTypes: ['sporty-shirt'],
            properties: ['Moisture-Wicking', 'Quick-Dry', 'Stretch']
        },
        'nylon-lycra': {
            name: 'Nylon Lycra',
            description: 'Flexible nylon blend with excellent stretch and recovery',
            category: 'nylon',
            texture: '🤸',
            garmentTypes: ['sporty-shirt'],
            properties: ['4-Way Stretch', 'Recovery', 'Comfortable']
        },
        'lycra-cotton': {
            name: 'Lycra Cotton',
            description: 'Cotton-lycra blend offering comfort with flexible movement',
            category: 'lycra',
            texture: '🔄',
            garmentTypes: ['sporty-shirt'],
            properties: ['Stretch Comfort', 'Shape Retention', 'Soft Feel']
        },
        'nylon-roma': {
            name: 'Nylon Roma',
            description: 'Premium nylon with sophisticated finish for formal wear',
            category: 'nylon',
            texture: '💼',
            garmentTypes: ['formal-trousers', 'winter-jacket'],
            properties: ['Formal Look', 'Durable', 'Stain Resistant']
        },
        'cotton-velvet': {
            name: 'Cotton Velvet',
            description: 'Luxurious cotton velvet with rich texture and elegant drape',
            category: 'velvet',
            texture: '✨',
            garmentTypes: ['formal-trousers', 'winter-jacket'],
            properties: ['Luxury Feel', 'Rich Texture', 'Elegant Drape']
        },
        'cotton-terry': {
            name: 'Cotton Terry',
            description: 'Absorbent cotton terry ideal for comfort and warmth',
            category: 'terry',
            texture: '🏠',
            garmentTypes: ['winter-jacket'],
            properties: ['Warm', 'Absorbent', 'Cozy Comfort']
        }
    },
    
    // Garment to fabric mapping
    garmentFabrics: {
        'normal-shirt': ['cotton-syncer', 'cotton-roma', 'fine-raw-cotton'],
        'sporty-shirt': ['nylon-sporty', 'nylon-lycra', 'lycra-cotton'],
        'formal-trousers': ['cotton-roma', 'nylon-roma', 'cotton-velvet'],
        'winter-jacket': ['cotton-terry', 'cotton-velvet', 'nylon-roma']
    },
    
    // Fabric categories for filtering
    categories: {
        'cotton': 'Cotton Fabrics',
        'nylon': 'Nylon Fabrics',
        'lycra': 'Lycra Blends',
        'velvet': 'Velvet Fabrics',
        'terry': 'Terry Fabrics'
    }
};

// Cloth cutting animation functions
function initClothCuttingAnimation() {
    // Show the scissors cutting animation for every visitor
    showClothCuttingAnimation();
}

function showClothCuttingAnimation() {
        const overlay = document.getElementById('cloth-overlay');
        const scissors = document.getElementById('scissors');
        const cutLine = document.getElementById('cut-line');
        const clothLeft = document.getElementById('cloth-left');
        const clothRight = document.getElementById('cloth-right');
        const clothTop = document.getElementById('cloth-top');
        const clothBottom = document.getElementById('cloth-bottom');
        const websiteContent = document.getElementById('websiteContent');
        
        if (!overlay) return;
        
        // Show the overlay and hide website content
        overlay.classList.remove('hidden');
        if (websiteContent) {
            websiteContent.classList.remove('revealed');
        }
        
        // Determine if we're on mobile for responsive animation
        const isMobile = window.innerWidth < 768;
        
        // Add tearing effect classes
        overlay.classList.add('cloth-tearing');
        
        // Set up responsive cutting direction
        if (isMobile) {
            // Vertical cut for mobile
            cutLine.className = 'cut-line cut-line-vertical';
            scissors.classList.add('scissors-vertical');
            overlay.classList.add('vertical');
            
            // Show top/bottom halves, hide left/right
            clothTop.classList.remove('hidden');
            clothBottom.classList.remove('hidden');
            clothLeft.classList.add('hidden');
            clothRight.classList.add('hidden');
            
            // Position scissors at top center
            scissors.style.top = '-3rem';
            scissors.style.left = '50%';
            scissors.style.transform = 'translateX(-50%) rotate(45deg)';
        } else {
            // Horizontal cut for desktop
            cutLine.className = 'cut-line cut-line-horizontal';
            scissors.classList.remove('scissors-vertical');
            overlay.classList.add('horizontal');
            
            // Show left/right halves, hide top/bottom
            clothLeft.classList.remove('hidden');
            clothRight.classList.remove('hidden');
            clothTop.classList.add('hidden');
            clothBottom.classList.add('hidden');
            
            // Position scissors at left center
            scissors.style.top = '50%';
            scissors.style.left = '-3rem';
            scissors.style.transform = 'translateY(-50%) rotate(-45deg)';
        }
        
        // Enhanced animation sequence
        setTimeout(() => {
            // Start scissors cutting animation
            scissors.classList.add('scissors-cutting');
            
            // Start scissors movement
            if (isMobile) {
                scissors.style.top = 'calc(50% - 1.5rem)';
            } else {
                scissors.style.left = 'calc(50% - 1.5rem)';
            }
            
        }, 300);
        
        // Show cut line and tearing effect as scissors reach middle
        setTimeout(() => {
            cutLine.classList.add('active');
            overlay.classList.add('active');
        }, 1200);
        
        // Continue scissors movement to complete the cut
        setTimeout(() => {
            if (isMobile) {
                scissors.style.top = 'calc(100% + 3rem)';
            } else {
                scissors.style.left = 'calc(100% + 3rem)';
            }
        }, 1500);
        
        // Start cloth splitting with dramatic effect
        setTimeout(() => {
            scissors.classList.remove('scissors-cutting');
            
            if (isMobile) {
                clothTop.style.transform = 'translateY(-100%) rotate(-2deg)';
                clothBottom.style.transform = 'translateY(100%) rotate(2deg)';
            } else {
                clothLeft.style.transform = 'translateX(-100%) rotate(-1deg)';
                clothRight.style.transform = 'translateX(100%) rotate(1deg)';
            }
        }, 2200);
        
        // Reveal website content with scaling effect
        setTimeout(() => {
            if (websiteContent) {
                websiteContent.classList.add('revealed');
            }
        }, 2800);
        
        // Fade out the entire overlay
        setTimeout(() => {
            overlay.classList.add('animate-fade-out');
            
            // Remove overlay completely
            setTimeout(() => {
                overlay.remove();
            }, 500);
        }, 3800);
    }

// Fabric Modal System
function openFabricModal(garmentType) {
    const modal = document.getElementById('fabricModal');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalContent = document.getElementById('modalContent');
    const modalTitle = document.getElementById('modalTitle');
    const fabricGrid = document.getElementById('fabricGrid');
    
    if (!modal) return;
    
    // Get garment name for display
    const garmentNames = {
        'normal-shirt': 'Normal Shirt',
        'sporty-shirt': 'Sporty Shirt',
        'formal-trousers': 'Formal Trousers',
        'winter-jacket': 'Winter Jacket'
    };
    
    // Update modal title
    modalTitle.textContent = `Select Fabric for ${garmentNames[garmentType] || 'Garment'}`;
    
    // Get relevant fabrics
    const relevantFabrics = fabricData.garmentFabrics[garmentType] || [];
    
    // Clear and populate fabric grid
    fabricGrid.innerHTML = '';
    
    relevantFabrics.forEach(fabricId => {
        const fabric = fabricData.fabrics[fabricId];
        if (fabric) {
            const fabricCard = createFabricCard(fabric, fabricId, true);
            fabricGrid.appendChild(fabricCard);
        }
    });
    
    // Show modal with animation
    modal.classList.remove('hidden');
    requestAnimationFrame(() => {
        modalOverlay.classList.remove('opacity-0');
        modalOverlay.classList.add('opacity-100');
        modalContent.classList.remove('scale-95');
        modalContent.classList.add('scale-100');
    });
}

function closeFabricModal() {
    const modal = document.getElementById('fabricModal');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalContent = document.getElementById('modalContent');
    
    if (!modal) return;
    
    // Animate out
    modalOverlay.classList.remove('opacity-100');
    modalOverlay.classList.add('opacity-0');
    modalContent.classList.remove('scale-100');
    modalContent.classList.add('scale-95');
    
    // Hide modal after animation
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

function createFabricCard(fabric, fabricId, isModal = false) {
    const card = document.createElement('div');
    card.className = `bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 ring-1 ring-gray-200 overflow-hidden group cursor-pointer ${isModal ? 'fabric-modal-card' : 'fabric-collection-card'}`;
    card.dataset.fabricId = fabricId;
    card.dataset.category = fabric.category;
    
    // Add garment types as data attributes for filtering
    fabric.garmentTypes.forEach(garmentType => {
        card.dataset[garmentType.replace('-', '')] = 'true';
    });
    
    card.innerHTML = `
        <div class="p-6">
            <div class="flex items-center justify-between mb-3">
                <div class="text-3xl">${fabric.texture}</div>
                <span class="text-xs font-sans font-medium px-2 py-1 bg-neutral-100 text-gray-600 rounded-full">
                    ${fabricData.categories[fabric.category]}
                </span>
            </div>
            <h3 class="text-lg font-serif font-semibold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-200">
                ${fabric.name}
            </h3>
            <p class="text-sm text-gray-600 font-sans mb-4">
                ${fabric.description}
            </p>
            <div class="flex flex-wrap gap-1 mb-4">
                ${fabric.properties.map(prop => `
                    <span class="text-xs font-sans px-2 py-1 bg-gray-100 text-gray-700 rounded">
                        ${prop}
                    </span>
                `).join('')}
            </div>
            ${isModal ? `
                <button class="w-full bg-brand-navy hover:bg-brand-gold text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                    Select This Fabric
                </button>
            ` : `
                <div class="text-xs font-sans text-gray-500">
                    Used in: ${fabric.garmentTypes.map(type => type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())).join(', ')}
                </div>
            `}
        </div>
    `;
    
    // Add click handler for modal cards
    if (isModal) {
        const selectButton = card.querySelector('button');
        selectButton.addEventListener('click', (e) => {
            e.stopPropagation();
            handleFabricSelection(fabric, fabricId);
        });
    }
    
    return card;
}

function handleFabricSelection(fabric, fabricId) {
    closeFabricModal();
    showNotification(`Selected ${fabric.name} for your garment. Contact us to proceed with your order.`, 'success');
    
    // Scroll to contact section after brief delay
    setTimeout(() => {
        document.getElementById('contact').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }, 1000);
}

// Fabric Collection and Filtering System
function initializeFabricCollection() {
    const fabricCollection = document.getElementById('fabricCollection');
    const fabricFilters = document.getElementById('fabricFilters');
    
    if (!fabricCollection || !fabricFilters) return;
    
    // Populate fabric collection
    populateFabricCollection();
    
    // Setup filters
    setupFabricFilters();
    
    // Setup mobile filter toggle
    setupMobileFilterToggle();
}

function populateFabricCollection() {
    const fabricCollection = document.getElementById('fabricCollection');
    fabricCollection.innerHTML = '';
    
    Object.entries(fabricData.fabrics).forEach(([fabricId, fabric]) => {
        const fabricCard = createFabricCard(fabric, fabricId, false);
        fabricCollection.appendChild(fabricCard);
    });
}

function setupFabricFilters() {
    const fabricFilters = document.getElementById('fabricFilters');
    
    // Add category filters
    Object.entries(fabricData.categories).forEach(([categoryId, categoryName]) => {
        const filterButton = document.createElement('button');
        filterButton.className = 'filter-btn w-full text-left p-3 rounded-lg transition-all duration-200 hover:bg-neutral-100 font-sans text-gray-700 hover:text-gray-900 border border-transparent hover:border-gray-200';
        filterButton.dataset.fabric = categoryId;
        filterButton.textContent = categoryName;
        fabricFilters.appendChild(filterButton);
    });
    
    // Add event listeners to filter buttons
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', () => {
            filterFabrics(button.dataset.fabric);
            updateActiveFilter(button, '.filter-btn');
        });
    });
    
    // Add event listeners to garment filter buttons
    document.querySelectorAll('.garment-filter-btn').forEach(button => {
        button.addEventListener('click', () => {
            filterByGarmentType(button.dataset.garment);
            updateActiveFilter(button, '.garment-filter-btn');
        });
    });
}

function filterFabrics(category) {
    const fabricCards = document.querySelectorAll('.fabric-collection-card');
    const noResults = document.getElementById('noResults');
    let visibleCount = 0;
    
    fabricCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
            card.classList.add('animate-fade-in');
            visibleCount++;
        } else {
            card.style.display = 'none';
            card.classList.remove('animate-fade-in');
        }
    });
    
    // Show/hide no results message
    if (visibleCount === 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
    }
}

function filterByGarmentType(garmentType) {
    const fabricCards = document.querySelectorAll('.fabric-collection-card');
    const noResults = document.getElementById('noResults');
    let visibleCount = 0;
    
    fabricCards.forEach(card => {
        const garmentKey = garmentType === 'shirt' ? 'normalshirt' : 
                          garmentType === 'trouser' ? 'formaltrousers' : 
                          garmentType === 'outerwear' ? 'winterjacket' : garmentType;
        
        if (card.dataset[garmentKey] || card.dataset.sportyshirt) {
            card.style.display = 'block';
            card.classList.add('animate-fade-in');
            visibleCount++;
        } else {
            card.style.display = 'none';
            card.classList.remove('animate-fade-in');
        }
    });
    
    // Show/hide no results message
    if (visibleCount === 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
    }
}

function updateActiveFilter(activeButton, selector) {
    // Remove active state from all buttons of this type
    document.querySelectorAll(selector).forEach(btn => {
        btn.classList.remove('bg-brand-navy', 'text-white');
        btn.classList.add('text-gray-700', 'hover:text-gray-900');
    });
    
    // Add active state to clicked button
    activeButton.classList.add('bg-brand-navy', 'text-white');
    activeButton.classList.remove('text-gray-700', 'hover:text-gray-900');
}

function setupMobileFilterToggle() {
    const mobileToggle = document.getElementById('mobileFilterToggle');
    const filterSidebar = document.getElementById('filterSidebar');
    const filterIcon = document.getElementById('filterIcon');
    
    if (!mobileToggle || !filterSidebar) return;
    
    mobileToggle.addEventListener('click', () => {
        filterSidebar.classList.toggle('hidden');
        filterIcon.classList.toggle('rotate-180');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize cloth cutting animation
    initClothCuttingAnimation();
    
    // Initialize fabric collection and filtering
    initializeFabricCollection();
    
    // Mobile menu functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Toggle hamburger icon
            const icon = mobileMenuButton.querySelector('svg path');
            if (mobileMenu.classList.contains('hidden')) {
                icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
            } else {
                icon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
            }
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Close mobile menu if open
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    // Reset hamburger icon
                    const icon = mobileMenuButton.querySelector('svg path');
                    icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
                }
                
                // Smooth scroll to target section
                const offsetTop = targetSection.offsetTop - 64; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Update active navigation state
                updateActiveNavigation(this);
            }
        });
    });
    
    // Update active navigation based on scroll position
    function updateActiveNavigation(activeLink = null) {
        const sections = ['home', 'products', 'fabrics', 'contact'];
        const scrollPosition = window.scrollY + 100; // Offset for navbar
        
        if (!activeLink) {
            // Determine active section based on scroll position
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && scrollPosition >= section.offsetTop) {
                    const currentActiveLink = document.querySelector(`a[href="#${sections[i]}"]`);
                    if (currentActiveLink) {
                        activeLink = currentActiveLink;
                        break;
                    }
                }
            }
        }
        
        // Remove active state from all nav links
        navLinks.forEach(link => {
            link.classList.remove('text-white');
            link.classList.add('text-gray-300');
        });
        
        // Add active state to current link and its mobile counterpart
        if (activeLink) {
            const href = activeLink.getAttribute('href');
            const allMatchingLinks = document.querySelectorAll(`a[href="${href}"]`);
            allMatchingLinks.forEach(link => {
                link.classList.remove('text-gray-300');
                link.classList.add('text-white');
            });
        }
    }
    
    // Update navigation on scroll
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                updateActiveNavigation();
                handleNavbarBackground();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Handle navbar background on scroll
    function handleNavbarBackground() {
        const navbar = document.querySelector('nav');
        if (window.scrollY > 50) {
            navbar.classList.add('bg-opacity-95', 'backdrop-blur-sm');
        } else {
            navbar.classList.remove('bg-opacity-95', 'backdrop-blur-sm');
        }
    }
    
    // Enhanced Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Clear previous errors
            clearFormErrors();
            
            // Get form elements
            const nameField = document.getElementById('contactName');
            const emailField = document.getElementById('contactEmail');
            const messageField = document.getElementById('contactMessage');
            const consentField = document.getElementById('contactConsent');
            const submitBtn = document.getElementById('submitBtn');
            
            let isValid = true;
            
            // Validate name
            if (!nameField.value.trim()) {
                showFieldError(nameField, 'Please enter your name');
                isValid = false;
            }
            
            // Validate email
            if (!emailField.value.trim()) {
                showFieldError(emailField, 'Please enter your email address');
                isValid = false;
            } else if (!isValidEmail(emailField.value)) {
                showFieldError(emailField, 'Please enter a valid email address');
                isValid = false;
            }
            
            // Validate message
            if (!messageField.value.trim()) {
                showFieldError(messageField, 'Please enter your message');
                isValid = false;
            }
            
            // Validate consent
            if (!consentField.checked) {
                showNotification('Please agree to the Privacy Policy and Terms of Service.', 'error');
                isValid = false;
            }
            
            if (!isValid) return;
            
            // Show loading state
            setLoadingState(submitBtn, true);
            
            // Simulate form submission
            setTimeout(() => {
                setLoadingState(submitBtn, false);
                showNotification('Thank you for your message! We\'ll get back to you within 24 hours.', 'success');
                this.reset();
                
                // Scroll to top of contact section
                document.getElementById('contact').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 2000);
        });
        
        // Real-time validation
        const fields = ['contactName', 'contactEmail', 'contactMessage'];
        fields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (field) {
                field.addEventListener('blur', () => validateField(field));
                field.addEventListener('input', () => {
                    if (field.classList.contains('border-red-500')) {
                        validateField(field);
                    }
                });
            }
        });
    }
    
    // Form validation helper functions
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showFieldError(field, message) {
        field.classList.add('border-red-500');
        field.classList.remove('border-gray-300');
        const errorDiv = field.parentNode.querySelector('.error-message');
        if (errorDiv) {
            errorDiv.textContent = message;
            errorDiv.classList.remove('hidden');
        }
    }
    
    function clearFieldError(field) {
        field.classList.remove('border-red-500');
        field.classList.add('border-gray-300');
        const errorDiv = field.parentNode.querySelector('.error-message');
        if (errorDiv) {
            errorDiv.classList.add('hidden');
        }
    }
    
    function clearFormErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(error => error.classList.add('hidden'));
        
        const errorFields = document.querySelectorAll('.border-red-500');
        errorFields.forEach(field => {
            field.classList.remove('border-red-500');
            field.classList.add('border-gray-300');
        });
    }
    
    function validateField(field) {
        const value = field.value.trim();
        
        switch (field.id) {
            case 'contactName':
                if (!value) {
                    showFieldError(field, 'Please enter your name');
                    return false;
                }
                break;
            case 'contactEmail':
                if (!value) {
                    showFieldError(field, 'Please enter your email address');
                    return false;
                } else if (!isValidEmail(value)) {
                    showFieldError(field, 'Please enter a valid email address');
                    return false;
                }
                break;
            case 'contactMessage':
                if (!value) {
                    showFieldError(field, 'Please enter your message');
                    return false;
                }
                break;
        }
        
        clearFieldError(field);
        return true;
    }
    
    function setLoadingState(button, isLoading) {
        const submitText = button.querySelector('.submit-text');
        const loadingText = button.querySelector('.loading-text');
        
        if (isLoading) {
            button.disabled = true;
            submitText.classList.add('hidden');
            loadingText.classList.remove('hidden');
        } else {
            button.disabled = false;
            submitText.classList.remove('hidden');
            loadingText.classList.add('hidden');
        }
    }
    
    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification fixed top-20 right-4 z-50 p-4 rounded-lg shadow-lg transform translate-x-full transition-transform duration-300 max-w-sm`;
        
        // Set colors based on type
        if (type === 'success') {
            notification.classList.add('bg-green-500', 'text-white');
        } else if (type === 'error') {
            notification.classList.add('bg-red-500', 'text-white');
        } else {
            notification.classList.add('bg-blue-500', 'text-white');
        }
        
        notification.innerHTML = `
            <div class="flex items-center justify-between">
                <span>${message}</span>
                <button onclick="this.parentElement.parentElement.remove()" class="ml-2 text-white hover:text-gray-200">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
        `;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 300);
        }, 5000);
    }
    
    // Hero section button interactions
    const heroButtons = document.querySelectorAll('section#home button');
    heroButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent.includes('Explore Products')) {
                // Scroll to products section
                document.getElementById('products').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else if (this.textContent.includes('View Fabrics')) {
                // Scroll to fabrics section
                document.getElementById('fabrics').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Garment card "View Fabrics" button interactions
    const garmentFabricButtons = document.querySelectorAll('button');
    garmentFabricButtons.forEach(button => {
        if (button.textContent.includes('View Fabrics')) {
            button.addEventListener('click', function() {
                const garmentCard = this.closest('.group');
                const garmentName = garmentCard ? garmentCard.querySelector('h3').textContent : 'Unknown Garment';
                
                // Convert garment name to garment type for fabric mapping
                const garmentTypeMap = {
                    'Normal Shirt': 'normal-shirt',
                    'Sporty Shirt': 'sporty-shirt',
                    'Formal Trousers': 'formal-trousers',
                    'Winter Jacket': 'winter-jacket'
                };
                
                const garmentType = garmentTypeMap[garmentName];
                
                if (garmentType) {
                    // Open fabric modal
                    openFabricModal(garmentType);
                } else {
                    // Fallback: scroll to fabrics section
                    document.getElementById('fabrics').scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    setTimeout(() => {
                        showNotification(`Viewing fabrics suitable for ${garmentName}`, 'info');
                    }, 500);
                }
            });
        }
    });
    
    // Custom Design button interaction
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(button => {
        if (button.textContent.includes('Request Custom Design')) {
            button.addEventListener('click', function() {
                // Scroll to contact section
                document.getElementById('contact').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                setTimeout(() => {
                    showNotification('Ready to discuss your custom design requirements!', 'info');
                }, 500);
            });
        }
    });
    
    // Add hover effects to product and fabric cards
    const cards = document.querySelectorAll('.hover\\:shadow-lg');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Enhanced scroll-triggered animations using IntersectionObserver
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const scrollObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Add fade-in and slide-up animations
                if (element.classList.contains('scroll-animate')) {
                    element.classList.add('opacity-100', 'translate-y-0');
                    element.classList.remove('opacity-0', 'translate-y-8');
                }
                
                // Stagger animations for child elements
                const children = element.querySelectorAll('.stagger-animate');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('opacity-100', 'translate-y-0');
                        child.classList.remove('opacity-0', 'translate-y-4');
                    }, index * 100);
                });
                
                // Stop observing once animated
                scrollObserver.unobserve(element);
            }
        });
    }, observerOptions);
    
    // Setup scroll animations for sections and cards
    const animatedSections = document.querySelectorAll('section');
    animatedSections.forEach(section => {
        section.classList.add('scroll-animate', 'opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
        scrollObserver.observe(section);
    });
    
    // Setup stagger animations for cards
    const cardContainers = document.querySelectorAll('.grid');
    cardContainers.forEach(container => {
        const cards = container.querySelectorAll('.group, .fabric-collection-card');
        cards.forEach(card => {
            card.classList.add('stagger-animate', 'opacity-0', 'translate-y-4', 'transition-all', 'duration-500');
        });
    });
    
    // Initialize active navigation on page load
    updateActiveNavigation();
    
    // Add fade-in animation class to CSS if not already present
    if (!document.querySelector('style[data-animations]')) {
        const style = document.createElement('style');
        style.setAttribute('data-animations', 'true');
        style.textContent = `
            .animate-fade-in {
                animation: fadeIn 0.6s ease-out forwards;
            }
            
            @keyframes fadeIn {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            /* Enhanced hover effects */
            .hover\\:shadow-lg {
                transition: all 0.3s ease;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Modal close functionality
    const closeModalButton = document.getElementById('closeModal');
    const modalOverlay = document.getElementById('modalOverlay');
    
    if (closeModalButton) {
        closeModalButton.addEventListener('click', closeFabricModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeFabricModal);
    }
    
    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeFabricModal();
        }
    });
    
    console.log('Profabrics website initialized successfully!');
});

// Utility function to handle resize events
window.addEventListener('resize', function() {
    // Close mobile menu on desktop resize
    if (window.innerWidth >= 768) {
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            
            // Reset hamburger icon
            if (mobileMenuButton) {
                const icon = mobileMenuButton.querySelector('svg path');
                if (icon) {
                    icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
                }
            }
        }
    }
});

// Debug function to manually trigger cloth cutting animation (for testing)
window.triggerClothAnimation = function() {
    // Hide website content for the animation
    const websiteContent = document.getElementById('websiteContent');
    if (websiteContent) {
        websiteContent.classList.remove('revealed');
    }
    
    // Create a new overlay if it doesn't exist
    if (!document.getElementById('cloth-overlay')) {
        const overlay = document.createElement('div');
        overlay.id = 'cloth-overlay';
        overlay.className = 'cloth-overlay hidden';
        overlay.innerHTML = `
            <div id="cut-line" class="cut-line cut-line-horizontal"></div>
            <div id="scissors" class="scissors">✂️</div>
            <div id="cloth-left" class="cloth-half cloth-left"></div>
            <div id="cloth-right" class="cloth-half cloth-right"></div>
            <div id="cloth-top" class="cloth-half cloth-top hidden"></div>
            <div id="cloth-bottom" class="cloth-half cloth-bottom hidden"></div>
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center text-white">
                    <div class="text-4xl font-serif mb-4">
                        Pro<span class="text-brand-gold">fabrics</span>
                    </div>
                    <div class="flex justify-center space-x-2">
                        <div class="w-2 h-2 bg-brand-gold rounded-full animate-bounce"></div>
                        <div class="w-2 h-2 bg-brand-gold rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                        <div class="w-2 h-2 bg-brand-gold rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
    }
    
    // Trigger the animation
    initClothCuttingAnimation();
    console.log('Cloth cutting animation triggered manually.');
};

// Debug function to reset and show content immediately
window.showWebsiteContent = function() {
    const websiteContent = document.getElementById('websiteContent');
    const overlay = document.getElementById('cloth-overlay');
    
    if (websiteContent) {
        websiteContent.classList.add('revealed');
    }
    if (overlay) {
        overlay.classList.add('hidden');
    }
    
    console.log('Website content revealed immediately.');
};

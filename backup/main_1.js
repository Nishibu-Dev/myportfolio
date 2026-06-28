// Photo Data Base
const photoData = {
    forest: [
        {
            id: 'f-top',
            src: 'images/forest_top.jpg',
            title: 'Arteries of Late Season',
            desc: 'warm russet leaves still clinging to the intricate tangle of bare branches.'
        },
        {
            id: 'f-1',
            src: 'images/forest_1.jpg',
            title: 'Illuminated Silence',
            desc: 'Ethereal white birches stand shrouded in dense autumn mist, surrounded by the warm, quiet colors of falling foliage.'
        },
        {
            id: 'f-2',
            src: 'images/forest_2.jpg',
            title: 'Where Autumn Meets Winter',
            desc: 'Bare birch trees stand in quiet contrast.'
        },
        {
            id: 'f-3',
            src: 'images/forest_3.jpg',
            title: 'Awaking Tree',
            desc: 'Ancient green trees emerge from a soft blanket of low-lying fog in a quiet, sun-kissed meadow at dawn.'
        },
        {
            id: 'f-4',
            src: 'images/forest_4.jpg',
            title: 'Whispers of Light',
            desc: 'illuminating the gnarled ancient trunk at the heart of the forest and the deep green moss-carpeted floor below.'
        },
        {
            id: 'f-5',
            src: 'images/forest_5.jpg',
            title: 'The Meadow Guardian',
            desc: 'A striking dual-trunk birch tree stands sentinel on a grassy green hillside as morning fog rolls through the valley behind.'
        },
        {
            id: 'f-6',
            src: 'images/forest_6.jpg',
            title: 'Silent Glow',
            desc: 'A powerful morning sunbeam cuts through the shadowy trunks of an ancient, moss-covered subalpine woodland.'
        }
    ],
    winter: [
        {
            id: 'w-top',
            src: 'images/winter_top.jpg',
            title: 'Kindness in Cold',
            desc: "Against a cold steel-blue pre-dawn sky, with the faint warm glow of early morning light touching the horizon"
        },
        {
            id: 'w-1',
            src: 'images/winter_1.jpg',
            title: 'Contours of Silence',
            desc: 'Sparse, delicate trees dot a snow-capped mountain ridge, partially veiled by shifting high-altitude winter fog.'
        },
        {
            id: 'w-2',
            src: 'images/winter_2.jpg',
            title: 'Paths in the Snow',
            desc: 'Elegant ski tracks curve gracefully across a vast snow field, leading the eye toward a single iconic bare tree standing quietly at the lower edge of the frame.'
        }
    ],
    water: [
        {
            id: 'wa-top',
            src: 'images/water_top.jpg',
            title: "Spring's Submerged Reflection",
            desc: "An ancient gnarled tree standing in the flooded spring waters casts a haunting reflection on the misty, mirror-still surface below."
        },
        {
            id: 'wa-1',
            src: 'images/water_1.jpg',
            title: 'Ancient Trees',
            desc: 'A quiet forest brook winds through a lush moss-covered floor, framed by the towering mottled trunks of ancient birch trees disappearing into the mist.'
        },
        {
            id: 'wa-2',
            src: 'images/water_2.jpg',
            title: 'Blooming at the Falls',
            desc: 'A silky waterfall pours down a moss-draped rock face, its cool mist contrasting with the vivid crimson blooms of Rhododendron azalea clinging to the cliff edge beside it.'
        }
    ],
    flora: [
        {
            id: 'fl-top',
            src: 'images/flora_top.jpg',
            title: 'Evening Glow Behind the Veil',
            desc: 'Soft evening light filters through a sweeping curtain of pale pink weeping cherry blossoms, their delicate petals glowing warmly against the cool blue-grey of the mountain slope behind.'
        },
        {
            id: 'fl-1',
            src: 'images/flora_1.jpg',
            title: "Dappled in Bloom",
            desc: 'A gnarled, moss-covered ancient cherry tree anchors the frame, its twisted branches radiating outward in a sweeping curtain of soft pink blossoms.'
        }
    ],
    abstract: [
        {
            id: 'ab-top',
            src: 'images/abstract_top.jpg',
            title: 'Chromatic Stillness',
            desc: 'Freshly formed ice crystals reveal a spectacular iridescent spectrum, their delicate facets diffracting light into a rare, shimmering rainbow across the frozen surface.'
        },
        {
            id: 'ab-1',
            src: 'images/abstract_1.jpg',
            title: 'Frozen Flames',
            desc: 'The crimson alpenglow of a mountain at dawn is captured in perfect reflection across the sharp, crystalline surface of a frozen pond.'
        },
        {
            id: 'ab-2',
            src: 'images/abstract_2.jpg',
            title: 'Crystal Blades',
            desc: 'A frozen pond reveals an abstract sculptural world of razor-sharp ice shards, their bold geometric forms rendered in deep, moody blue tones.'
        },
        {
            id: 'ab-3',
            src: 'images/abstract_3.jpg',
            title: 'A Quiet Universe',
            desc: 'Countless air bubbles, trapped and suspended within a thick layer of ice, form an otherworldly microscopic cosmos floating above the dark lakebed below.'
        },
        {
            id: 'ab-4',
            src: 'images/abstract_4.jpg',
            title: 'Last Trace',
            desc: 'A sinuous white vein of cracked ice traces an enigmatic path across a dark lake surface, while a handful of fallen autumn leaves lie quietly nearby, lending a note of melancholy.'
        },
        {
            id: 'ab-5',
            src: 'images/abstract_5.jpg',
            title: 'Trinity in Texture',
            desc: "A bold diagonal composition unites three textures: vivid green moss, raw grey rock face, and the soft blur of a waterfall's flow dissolving into white mist."
        },
        {
            id: 'ab-6',
            src: 'images/abstract_6.jpg',
            title: 'Sunlit Ripples',
            desc: 'The luminous fresh greens of new spring foliage dissolve into liquid abstraction, rippling and shimmering across the surface of a clear stream.'
        }
    ]
};

// Global Variables
let currentGenre = '';
let currentPhotos = [];
let currentPhotoIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initial Transitions (Fade-in on scroll)
    initScrollAnimations();

    // 2. Load Gallery if in gallery.html
    const galleryGrid = document.getElementById('gallery-grid');
    if (galleryGrid) {
        initGallery(galleryGrid);
    }
});

// Initialize Scroll-driven Fade-in Animations
function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        observer.observe(el);
    });

    // Handle immediate load for elements above the fold
    setTimeout(() => {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add('appear');
            }
        });
    }, 100);
}

// Initialize Gallery Page Content and Interactive Elements
function initGallery(gridElement) {
    // Parse URL Parameter
    const urlParams = new URLSearchParams(window.location.search);
    let genre = urlParams.get('genre');
    
    // Default to forest if invalid parameter
    if (!genre || !photoData[genre]) {
        genre = 'forest';
    }

    currentGenre = genre;
    currentPhotos = photoData[genre];

    // Style Active Navigation link
    const activeNavLink = document.getElementById(`nav-${genre}`);
    if (activeNavLink) {
        // Remove class from others
        document.querySelectorAll('.main-nav a').forEach(a => a.classList.remove('active'));
        activeNavLink.classList.add('active');
    }

    // Set Page Titles
    const titleEl = document.getElementById('gallery-title');
    const subtitleEl = document.getElementById('gallery-subtitle');
    
    if (titleEl && subtitleEl) {
        titleEl.textContent = genre === 'abstract' ? 'ABSTRACT & PATTERNS' : genre.toUpperCase();
        if (genre === 'forest') {
            subtitleEl.textContent = 'Forests & The Mystic Woodlands';
        } else if (genre === 'winter') {
            subtitleEl.textContent = 'Snow & Winter Landscapes';
        } else if (genre === 'water') {
            subtitleEl.textContent = 'Waterscapes & Streams';
        } else if (genre === 'flora') {
            subtitleEl.textContent = 'Flora & Blossoms';
        } else if (genre === 'abstract') {
            subtitleEl.textContent = 'Nature Abstract & Patterns';
        }
    }

    // Render Gallery Grid
    gridElement.innerHTML = '';
    currentPhotos.forEach((photo, index) => {
        const item = document.createElement('div');
        item.classList.add('gallery-item');
        item.innerHTML = `
            <img src="${photo.src}" alt="${photo.title}">
            <div class="gallery-item-info">
                <h3 class="gallery-item-title">${photo.title}</h3>
                <p class="gallery-item-desc">${photo.desc}</p>
            </div>
        `;
        
        // Add click listener for lightbox
        item.addEventListener('click', () => {
            openLightbox(index);
        });

        gridElement.appendChild(item);
    });

    // Initialize Lightbox Controls
    initLightbox();
}

// Lightbox Logic
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    
    // Close on click close button
    closeBtn.addEventListener('click', closeLightbox);

    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Navigation click
    prevBtn.addEventListener('click', showPrevPhoto);
    nextBtn.addEventListener('click', showNextPhoto);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showNextPhoto();
        if (e.key === 'ArrowLeft') showPrevPhoto();
    });
}

function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    currentPhotoIndex = index;
    updateLightboxContent();

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock scroll
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // Unlock scroll
}

function updateLightboxContent() {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const title = document.getElementById('lightbox-title');
    const desc = document.getElementById('lightbox-desc');
    
    if (!lightbox || !img) return;

    const photo = currentPhotos[currentPhotoIndex];
    
    // Reset image transform/opacity for transition
    img.style.opacity = '0';
    img.style.transform = 'scale(0.97)';
    
    setTimeout(() => {
        img.src = photo.src;
        img.alt = photo.title;
        if (title) title.textContent = photo.title;
        if (desc) desc.textContent = photo.desc;
        
        img.onload = () => {
            img.style.opacity = '1';
            img.style.transform = 'scale(1)';
        };
    }, 200); // Smooth image swap delay
}

function showNextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % currentPhotos.length;
    updateLightboxContent();
}

function showPrevPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + currentPhotos.length) % currentPhotos.length;
    updateLightboxContent();
}

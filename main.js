// Photo Data Base
const photoData = {
    forest: [
        {
            id: 'f-top',
            src: 'images/forest_top.jpg',
            midSrc: 'images/forest_top_mid.jpg',
            highSrc: 'images/forest_top_high.jpg',
            title: 'Arteries of Late Season',
            desc: 'warm russet leaves still clinging to the intricate tangle of bare branches.'
        },
        {
            id: 'f-7',
            src: 'images/forest_7.jpg',
            midSrc: 'images/forest_7_mid.jpg',
            highSrc: 'images/forest_7_high.jpg',
            title: 'Fading Echo',
            desc: 'An immense ancient tree spreads its gnarled arms wide, standing at the heart of a forest ablaze with the deep amber and rust tones of late autumn, its great trunk anchored in the quiet morning mist.'
        },
        {
            id: 'f-3',
            src: 'images/forest_3.jpg',
            midSrc: 'images/forest_3_mid.jpg',
            highSrc: 'images/forest_3_high.jpg',
            title: 'Awaking Tree',
            desc: 'Tall trees emerge from a soft blanket of low-lying fog in a quiet, sun-kissed meadow at dawn.'
        },
        {
            id: 'f-5',
            src: 'images/forest_5.jpg',
            midSrc: 'images/forest_5_mid.jpg',
            highSrc: 'images/forest_5_high.jpg',
            title: 'The Meadow Guardian',
            desc: 'A striking dual-trunk birch tree stands sentinel on a grassy green hillside as morning fog drifts across the slope beside it.'
        },
        {
            id: 'f-2',
            src: 'images/forest_2.jpg',
            midSrc: 'images/forest_2_mid.jpg',
            highSrc: 'images/forest_2_high.jpg',
            title: 'Where Autumn Meets Winter',
            desc: 'Golden larch trees blaze with the last color of autumn while frost silently whitens the ground below — warmth and cold meeting at the edge of the season.'
        },
        {
            id: 'f-1',
            src: 'images/forest_1.jpg',
            midSrc: 'images/forest_1_mid.jpg',
            highSrc: 'images/forest_1_high.jpg',
            title: 'Illuminated Silence',
            desc: 'On a misty, rain-soft morning, a single beam of light breaks through for just a moment — illuminating ethereal white birches against the dark forms of surrounding trees, while the autumn foliage ignites briefly in warm color before the light fades away.'
        },
        {
            id: 'f-6',
            src: 'images/forest_6.jpg',
            midSrc: 'images/forest_6_mid.jpg',
            highSrc: 'images/forest_6_high.jpg',
            title: 'Silent Glow',
            desc: 'A powerful morning sunbeam cuts through the shadowy trunks of a moss-covered subalpine woodland.'
        },
        {
            id: 'f-4',
            src: 'images/forest_4.jpg',
            midSrc: 'images/forest_4_mid.jpg',
            highSrc: 'images/forest_4_high.jpg',
            title: 'Whispers of Light',
            desc: 'illuminating the gnarled ancient trunk at the heart of the forest and the deep green moss-carpeted floor below.'
        }
    ],
    winter: [
        {
            id: 'w-top',
            src: 'images/winter_top.jpg',
            midSrc: 'images/winter_top_mid.jpg',
            highSrc: 'images/winter_top_high.jpg',
            title: 'Kindness in Cold',
            desc: "Against a cold steel-blue pre-dawn sky, with the faint warm glow of early morning light touching the horizon"
        },
        {
            id: 'w-2',
            src: 'images/winter_2.jpg',
            midSrc: 'images/winter_2_mid.jpg',
            highSrc: 'images/winter_2_high.jpg',
            title: 'Paths in the Snow',
            desc: 'Elegant ski tracks curve gracefully across a vast snow field, leading the eye toward a single iconic bare tree standing quietly at the lower edge of the frame.'
        },
        {
            id: 'w-1',
            src: 'images/winter_1.jpg',
            midSrc: 'images/winter_1_mid.jpg',
            highSrc: 'images/winter_1_high.jpg',
            title: 'Contours of Silence',
            desc: 'Sparse, delicate trees dot a snow-capped mountain ridge, partially veiled by shifting high-altitude winter fog.'
        },
        {
            id: 'w-3',
            src: 'images/winter_3.jpg',
            midSrc: 'images/winter_3_mid.jpg',
            highSrc: 'images/winter_3_high.jpg',
            title: 'Drawn by Light',
            desc: 'Bare birch trees cast long, wandering shadows across a vast snow field, their dark lines written by the low winter sun onto the white surface — a fleeting composition drawn anew with each shift of the light.'
        },
        {
            id: 'w-5',
            src: 'images/winter_5.jpg',
            midSrc: 'images/winter_5_mid.jpg',
            highSrc: 'images/winter_5_high.jpg',
            title: 'The Last Warmth',
            desc: 'A hillside forest stands transformed by rime ice, every branch encased in white — yet between the frozen boughs, the faint amber of lingering larch needles glows softly, a last trace of autumn holding quietly within the grip of winter.'
        },
        {
            id: 'w-6',
            src: 'images/winter_6.jpg',
            midSrc: 'images/winter_6_mid.jpg',
            highSrc: 'images/winter_6_high.jpg',
            title: 'Frozen Filigree',
            desc: 'A dense tangle of birch trees, every branch and twig transformed into intricate white lacework by a heavy coat of rime ice, glows against the deep blue shadow of a winter forest — a frozen world rendered in delicate filigree.'
        }
    ],
    water: [
        {
            id: 'wa-top',
            src: 'images/water_top.jpg',
            midSrc: 'images/water_top_mid.jpg',
            highSrc: 'images/water_top_high.jpg',
            title: "Spring's Submerged Reflection",
            desc: "An ancient gnarled tree standing in the flooded spring waters casts a haunting reflection on the misty, mirror-still surface below."
        },
        {
            id: 'wa-1',
            src: 'images/water_1.jpg',
            midSrc: 'images/water_1_mid.jpg',
            highSrc: 'images/water_1_high.jpg',
            title: 'Rhythm and Flow',
            desc: 'Towering trunks rise in quiet rhythm from a lush moss-covered floor, while a still forest brook winds slowly between them — two kinds of stillness, one rooted, one moving.'
        },
        {
            id: 'wa-2',
            src: 'images/water_2.jpg',
            midSrc: 'images/water_2_mid.jpg',
            highSrc: 'images/water_2_high.jpg',
            title: 'Blooming at the Falls',
            desc: 'A silky waterfall pours down a moss-draped rock face, its cool mist contrasting with the vivid crimson blooms of Rhododendron azalea clinging to the cliff edge beside it.'
        },
        {
            id: 'wa-3',
            src: 'images/water_3.jpg',
            midSrc: 'images/water_3_mid.jpg',
            highSrc: 'images/water_3_high.jpg',
            title: 'Emerald Mist',
            desc: 'The first vivid greens of spring ignite the canopy of a primeval woodland, their luminous reflection shimmering in the still, dark waters below as morning mist weaves silently between the gnarled trunks.'
        },
        {
            id: 'wa-4',
            src: 'images/water_4.jpg',
            midSrc: 'images/water_4_mid.jpg',
            highSrc: 'images/water_4_high.jpg',
            title: 'Autumn Veil',
            desc: 'A tall, silken waterfall descends in a soft white column, its cool presence set against a blaze of golden autumn foliage that glows warmly in the foreground.'
        }
    ],
    flora: [
        {
            id: 'fl-top',
            src: 'images/flora_top.jpg',
            midSrc: 'images/flora_top_mid.jpg',
            highSrc: 'images/flora_top_high.jpg',
            title: 'Evening Glow Behind the Veil',
            desc: 'Soft evening light filters through a sweeping curtain of pale pink weeping cherry blossoms, their delicate petals glowing warmly against the cool blue-grey of the mountain slope behind.'
        },
        {
            id: 'fl-1',
            src: 'images/flora_1.jpg',
            midSrc: 'images/flora_1_mid.jpg',
            highSrc: 'images/flora_1_high.jpg',
            title: "Dappled in Bloom",
            desc: 'A gnarled, moss-covered ancient cherry tree anchors the frame, its twisted branches radiating outward in a sweeping curtain of soft pink blossoms.'
        },
        {
            id: 'fl-2',
            src: 'images/flora_2.jpg',
            midSrc: 'images/flora_2_mid.jpg',
            highSrc: 'images/flora_2_high.jpg',
            title: 'Dawn of Light',
            desc: 'Before the world fully wakes, a gentle pre-dawn light filters softly through a cascading veil of weeping cherry blossoms — each pale cluster suspended in stillness, luminous and fragile, holding the quiet breath between darkness and day.'
        }
    ],
    abstract: [
        {
            id: 'ab-top',
            src: 'images/abstract_top.jpg',
            midSrc: 'images/abstract_top_mid.jpg',
            highSrc: 'images/abstract_top_high.jpg',
            title: 'Chromatic Stillness',
            desc: 'Freshly formed ice crystals reveal a spectacular iridescent spectrum, their delicate facets diffracting light into a rare, shimmering rainbow across the frozen surface.'
        },
        {
            id: 'ab-9',
            src: 'images/abstract_9.jpg',
            midSrc: 'images/abstract_9_mid.jpg',
            highSrc: 'images/abstract_9_high.jpg',
            title: 'Lines of Silence',
            desc: 'The frozen surface of a lake fractures into slow, wandering lines — each crack a quiet drawing made by the ice itself, tracing an abstract map of tension and release across the pale, crystalline plain.'
        },
        {
            id: 'ab-3',
            src: 'images/abstract_3.jpg',
            midSrc: 'images/abstract_3_mid.jpg',
            highSrc: 'images/abstract_3_high.jpg',
            title: 'A Quiet Universe',
            desc: 'Countless air bubbles, trapped and suspended within a thick layer of ice, form an otherworldly microscopic cosmos floating above the dark lakebed below.'
        },
        {
            id: 'ab-2',
            src: 'images/abstract_2.jpg',
            midSrc: 'images/abstract_2_mid.jpg',
            highSrc: 'images/abstract_2_high.jpg',
            title: 'Crystal Blades',
            desc: 'A frozen pond reveals an abstract sculptural world of razor-sharp ice shards, their bold geometric forms rendered in deep, moody blue tones.'
        },
        {
            id: 'ab-4',
            src: 'images/abstract_4.jpg',
            midSrc: 'images/abstract_4_mid.jpg',
            highSrc: 'images/abstract_4_high.jpg',
            title: 'Last Trace',
            desc: 'A sinuous silken pattern drifts across the dark surface of a still pond — its origin unknown, carried quietly by an unseen current — while a handful of fallen autumn leaves lie nearby, lending a note of melancholy.'
        },
        {
            id: 'ab-8',
            src: 'images/abstract_8.jpg',
            midSrc: 'images/abstract_8_mid.jpg',
            highSrc: 'images/abstract_8_high.jpg',
            title: 'The Last Leaf',
            desc: 'Golden autumn leaves lie scattered across the dark, glassy surface of a frozen pond — nearly all of them sealed within the ice, their shapes preserved like pressed specimens. Only one rests quietly on top, as if granted a final moment of freedom before the season closes.'
        },
        {
            id: 'ab-7',
            src: 'images/abstract_7.jpg',
            midSrc: 'images/abstract_7_mid.jpg',
            highSrc: 'images/abstract_7_high.jpg',
            title: "Earth's Architecture",
            desc: 'Carved by millennia of erosion into sweeping layers of pale grey and burnt sienna, the quiet geometry of the mountainside suggests both immense geological time and a painterly abstraction — a handful of solitary trees standing small at their base.'
        },
        {
            id: 'ab-5',
            src: 'images/abstract_5.jpg',
            midSrc: 'images/abstract_5_mid.jpg',
            highSrc: 'images/abstract_5_high.jpg',
            title: 'Trinity in Texture',
            desc: 'A bold diagonal composition unites three textures: vivid green moss, raw grey rock face, and the silken flow of a waterfall rendered in soft white by a long exposure.'
        },
        {
            id: 'ab-6',
            src: 'images/abstract_6.jpg',
            midSrc: 'images/abstract_6_mid.jpg',
            highSrc: 'images/abstract_6_high.jpg',
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
    initScrollAnimations();

    const galleryGrid = document.getElementById('gallery-grid');
    if (galleryGrid) {
        initGallery(galleryGrid);
    }
});

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

    setTimeout(() => {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add('appear');
            }
        });
    }, 100);
}

function initGallery(gridElement) {
    const urlParams = new URLSearchParams(window.location.search);
    let genre = urlParams.get('genre');
    
    if (!genre || !photoData[genre]) {
        genre = 'forest';
    }

    currentGenre = genre;
    currentPhotos = photoData[genre];

    const activeNavLink = document.getElementById(`nav-${genre}`);
    if (activeNavLink) {
        document.querySelectorAll('.main-nav a').forEach(a => a.classList.remove('active'));
        activeNavLink.classList.add('active');
    }

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

    gridElement.innerHTML = '';
    currentPhotos.forEach((photo, index) => {
        const item = document.createElement('div');
        item.classList.add('gallery-item');
        item.innerHTML = `
            <img src="${photo.src}" alt="${photo.title}" loading="lazy">
            <div class="gallery-item-info">
                <h3 class="gallery-item-title">${photo.title}</h3>
                <p class="gallery-item-desc">${photo.desc}</p>
            </div>
        `;
        
        item.addEventListener('click', () => {
            openLightbox(index);
        });

        gridElement.appendChild(item);
    });

    initLightbox();
}

function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    
    closeBtn.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    prevBtn.addEventListener('click', showPrevPhoto);
    nextBtn.addEventListener('click', showNextPhoto);

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
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function updateLightboxContent() {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const title = document.getElementById('lightbox-title');
    const desc = document.getElementById('lightbox-desc');
    
    if (!lightbox || !img) return;

    const photo = currentPhotos[currentPhotoIndex];

    // テキストは即時更新
    if (title) title.textContent = photo.title;
    if (desc) desc.textContent = photo.desc;

    // まずフェードアウト
    img.style.opacity = '0';
    img.style.transform = 'scale(0.97)';

    // 新しい画像をプリロードしてから差し替え（前画像が残って見える問題を防ぐ）
    const midSrc = photo.midSrc || photo.src;
    const preload = new Image();
    preload.onload = () => {
        img.src = midSrc;
        img.alt = photo.title;

        // フェードイン
        img.style.opacity = '1';
        img.style.transform = 'scale(1)';

        // mid表示後にhigh版をバックグラウンドで読み込み→差し替え
        if (photo.highSrc && photo.highSrc !== midSrc) {
            const highImg = new Image();
            highImg.onload = () => {
                // まだ同じ写真を表示中のときだけ差し替え
                if (img.src.includes(midSrc.split('/').pop())) {
                    img.src = photo.highSrc;
                }
            };
            highImg.src = photo.highSrc;
        }
    };
    preload.src = midSrc;
}

function showNextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % currentPhotos.length;
    updateLightboxContent();
}

function showPrevPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + currentPhotos.length) % currentPhotos.length;
    updateLightboxContent();
}

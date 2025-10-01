// Gallery and Lightbox functionality
let currentImageIndex = 0;
let galleryItems = [];

document.addEventListener('DOMContentLoaded', function() {
    initGallery();
});

function initGallery() {
    galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
    
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            currentImageIndex = index;
            openLightbox(item);
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        const lightbox = document.getElementById('lightbox');
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                changeImage(-1);
            } else if (e.key === 'ArrowRight') {
                changeImage(1);
            }
        }
    });
    
    // Close lightbox when clicking outside content
    document.getElementById('lightbox').addEventListener('click', function(e) {
        if (e.target === this) {
            closeLightbox();
        }
    });
}

function openLightbox(item) {
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.getElementById('lightbox-content');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    const src = item.dataset.src;
    const caption = item.dataset.caption || '';
    const type = item.dataset.type || 'image';
    
    lightboxContent.innerHTML = '';
    
    if (type === 'video') {
        const video = document.createElement('video');
        video.src = src;
        video.controls = true;
        video.autoplay = true;
        lightboxContent.appendChild(video);
    } else {
        const img = document.createElement('img');
        img.src = src;
        img.alt = caption;
        lightboxContent.appendChild(img);
    }
    
    lightboxCaption.textContent = caption;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.getElementById('lightbox-content');
    
    // Stop any playing videos
    const video = lightboxContent.querySelector('video');
    if (video) {
        video.pause();
    }
    
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function changeImage(direction) {
    if (galleryItems.length === 0) return;
    
    currentImageIndex += direction;
    
    // Loop around
    if (currentImageIndex < 0) {
        currentImageIndex = galleryItems.length - 1;
    } else if (currentImageIndex >= galleryItems.length) {
        currentImageIndex = 0;
    }
    
    openLightbox(galleryItems[currentImageIndex]);
}

// Auto-load gallery items from a data file (optional enhancement)
// This function can be used to dynamically load gallery items from a JSON file
async function loadGalleryFromJSON(jsonPath) {
    try {
        const response = await fetch(jsonPath);
        const data = await response.json();
        const gallery = document.getElementById('gallery');
        
        // Clear placeholder
        gallery.innerHTML = '';
        
        data.items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'gallery-item';
            div.dataset.src = item.src;
            div.dataset.caption = item.caption;
            div.dataset.type = item.type || 'image';
            
            if (item.type === 'video') {
                const video = document.createElement('video');
                video.src = item.src;
                video.preload = 'metadata';
                div.appendChild(video);
                
                const playIcon = document.createElement('div');
                playIcon.className = 'play-icon';
                playIcon.textContent = '▶';
                div.appendChild(playIcon);
            } else {
                const img = document.createElement('img');
                img.src = item.thumbnail || item.src;
                img.alt = item.caption;
                div.appendChild(img);
            }
            
            gallery.appendChild(div);
        });
        
        // Reinitialize gallery after loading
        initGallery();
    } catch (error) {
        console.log('No gallery data file found. Add items manually to gallery.html');
    }
}

// Uncomment to load from JSON file
// loadGalleryFromJSON('gallery-data.json');

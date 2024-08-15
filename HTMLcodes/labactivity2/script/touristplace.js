let currentImageIndex = 0;

function showImage(imageId) {
    const images = document.querySelectorAll('.image-container img');
    
    images.forEach((img) => {
        img.style.display = 'none';
    });

    document.getElementById(imageId).style.display = 'block';
    currentImageIndex = Array.from(images).findIndex(img => img.id === imageId);
}

function zoomImage() {
    const images = document.querySelectorAll('.image-container img');
    const currentImage = images[currentImageIndex];

    if (currentImage.style.transform === 'scale(1.5)') {
        currentImage.style.transform = 'scale(1)';
    } else {
        currentImage.style.transform = 'scale(1.5)';
    }
}
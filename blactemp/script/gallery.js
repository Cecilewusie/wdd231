const mediaData = [
    {
        type: 'photo',
        src: 'images/photo1.jpg',
        title: 'Sunset Glory',
        description: 'A breathtaking sunset over the hills.'
    },
    {
        type: 'video',
        src: 'videos/video1.mp4',
        title: 'Waves in Motion',
        description: 'Capturing the essence of ocean waves.'
    },
    {
        type: 'photo',
        src: 'images/photo2.jpg',
        title: 'Urban Reflections',
        description: 'City lights reflecting on wet streets.'
    }
];

function createMediaItem(media) {
    const container = document.createElement('div');
    container.className = 'media-item';

    const title = document.createElement('h3');
    title.textContent = media.title;
    container.appendChild(title);

    const description = document.createElement('p');
    description.textContent = media.description;
    container.appendChild(description);

    if (media.type === 'photo') {
        const img = document.createElement('img');
        img.src = media.src;
        img.alt = media.title;
        img.loading = 'lazy';
        img.addEventListener('click', () => openModal(media));
        container.appendChild(img);
    } else if (media.type === 'video') {
        const video = document.createElement('video');
        video.src = media.src;
        video.controls = true;
        video.addEventListener('click', () => openModal(media));
        container.appendChild(video);
    }

    return container;
}

function loadGallery() {
    const gallery = document.getElementById('media-gallery');
    mediaData.forEach(media => {
        const mediaItem = createMediaItem(media);
        gallery.appendChild(mediaItem);
    });
}

function openModal(media) {
    const modal = document.createElement('div');
    modal.className = 'modal';

    const content = document.createElement('div');
    content.className = 'modal-content';

    const closeBtn = document.createElement('span');
    closeBtn.className = 'close-btn';
    closeBtn.textContent = '×';
    closeBtn.addEventListener('click', () => modal.remove());

    content.appendChild(closeBtn);

    if (media.type === 'photo') {
        const img = document.createElement('img');
        img.src = media.src;
        img.alt = media.title;
        content.appendChild(img);
    } else if (media.type === 'video') {
        const video = document.createElement('video');
        video.src = media.src;
        video.controls = true;
        video.autoplay = true;
        content.appendChild(video);
    }

    modal.appendChild(content);
    document.body.appendChild(modal);
}

document.addEventListener('DOMContentLoaded', loadGallery);

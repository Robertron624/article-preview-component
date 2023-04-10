const shareButton = document.querySelector('.share');
if(window.screen.width < 768) {
    const author = document.querySelector('.author');
    
    const authorInfo = document.querySelector('.author-info');
    
    const shareLinks = document.querySelector('.share-links');
    
    shareButton.addEventListener('click', () => {
        authorInfo.classList.toggle('inactive');
        shareLinks.classList.toggle('inactive');
        shareLinks.classList.toggle('active');
        author.classList.toggle('active-links');
    });
}

if( window.screen.width >= 768) {

    const desktopLinks = document.querySelector('.desktop-links');

    shareButton.addEventListener('click', () => {
        desktopLinks.classList.toggle('inactive');
        desktopLinks.classList.toggle('active-desktop');
    });

}


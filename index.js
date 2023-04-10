const shareButton = document.querySelector('.share');

const author = document.querySelector('.author');

const authorInfo = document.querySelector('.author-info');

const shareLinks = document.querySelector('.share-links');

shareButton.addEventListener('click', () => {
    authorInfo.classList.toggle('inactive');
    shareLinks.classList.toggle('inactive');
    shareLinks.classList.toggle('active');
    author.classList.toggle('active-links');
});


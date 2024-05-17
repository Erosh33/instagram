let post = document.getElementById("post9");
let likq = document.getElementById("likq");

likq.innerText = 'No likes';
let counter = 0;

post.addEventListener('dblclick', () => {
    counter++;
    if (counter == 1) likq.innerText = counter + 'like';
    else likq.innerText = counter + 'likes';
});

let post1 = document.getElementById("post10");
let likq1 = document.getElementById("likq1");

likq1.innerText = 'No likes';
let counte = 0;

post1.addEventListener('dblclick', () => {
    counte++;
    if (counte == 1) likq1.innerText = counte + 'like';
    else likq1.innerText = counte + 'likes';
});

function addComment(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const commentText = formData.get('text');
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.textContent = commentText;
    const commentsSection1 = document.querySelector('.comments');
    commentsSection1.appendChild(newComment);
}

function addComment2(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const commentText = formData.get('text');
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.textContent = commentText;
    const commentsSection1 = document.querySelector('.comments');
    commentsSection1.appendChild(newComment);
}
const classes = document.querySelectorAll('.classButton');
const postings = document.querySelectorAll('.posting');

for (let i = 0; i < classes.length; i++){
    classes[i].addEventListener('click', showSelected);
}

function showSelected(e) {
    const className = e.target.textContent;

    for (let i = 0; i < postings.length; i++){
        if (postings[i].classList.contains(className)){
            postings[i].classList.remove('notvisible');
        }
        else {
            postings[i].classList.add('notvisible');
        }
    }
}
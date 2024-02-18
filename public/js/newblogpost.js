
const toggleCreate = document.querySelector('#toggle');
const createContainer = document.querySelector('#create-container');
const toggleCreateBlogpost =(event) => {
    const createContainer = document.querySelector('#create-container');
    createContainer.classList.replace('display-none', 'display');
}


toggleCreate.addEventListener('click',toggleCreateBlogpost)
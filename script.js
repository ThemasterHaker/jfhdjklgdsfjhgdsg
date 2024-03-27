// Mock data for forum categories and threads
const forumData = [
    { category: 'General', threads: ['Welcome to the forum!', 'Introduce yourself'] },
    { category: 'Programming', threads: ['JavaScript tips and tricks', 'Favorite programming languages'] }
];

// Function to display forum categories and threads
function displayForum() {
    const forumContainer = document.getElementById('forum');
    forumContainer.innerHTML = '';
    
    forumData.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.classList.add('category');
        categoryElement.innerHTML = `<h2>${category.category}</h2>`;
        
        const threadList = document.createElement('ul');
        category.threads.forEach(thread => {
            const threadItem = document.createElement('li');
            threadItem.textContent = thread;
            threadList.appendChild(threadItem);
        });
        
        categoryElement.appendChild(threadList);
        forumContainer.appendChild(categoryElement);
    });
}

// Function to handle search input
document.getElementById('searchInput').addEventListener('input', function(event) {
    const searchText = event.target.value.toLowerCase();
    const threads = document.querySelectorAll('.category li');
    
    threads.forEach(thread => {
        const threadText = thread.textContent.toLowerCase();
        if (threadText.includes(searchText)) {
            thread.style.display = 'block';
        } else {
            thread.style.display = 'none';
        }
    });
});

// Initial display of forum
displayForum();

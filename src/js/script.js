function searchFunction() {
    const input = document.getElementById('search').value.toLowerCase();
    const listItems = document.querySelectorAll('#resultList li');
    
    listItems.forEach(item => {
        if (item.textContent.toLowerCase().includes(input)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}
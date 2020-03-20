let users = ['Ola', 'Ania', 'Tomek', 'Bartek', 'Adam'];



users.forEach(function(elem) {
    
    let listItems = document.createElement('li');
    listItems.innerText = elem;
    listItems.classList.add('user');
    document.getElementsByClassName('users-list')[0].appendChild(listItems);
});
























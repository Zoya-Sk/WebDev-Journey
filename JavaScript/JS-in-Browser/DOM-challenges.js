// Example 1 - Accessing DOM Elements

document.getElementById('change-text-btn').addEventListener('click', function(){
    let para = document.getElementById('my-paragraph');
    para.textContent = "The paragraph is changed";
});


// Example 2 - Traversing the DOM
document.getElementById('highlight-first-city').addEventListener('click', function(){
    let citiesList = document.getElementById('cities-lists');
    citiesList.firstElementChild.classList.add("highlight");
});


// Example 3 - Manipulating DOM Elements
document.getElementById('example-3').querySelector('button').addEventListener('click', function(){
    let order = document.getElementById('example-3').querySelector('p');
    order.textContent = "Order: Espresso";
});


// Example 4 - Creating and Inserting Elements
document.getElementById('example-4').querySelector('button').addEventListener('click', function(){
    let newItem = document.createElement('li');
    newItem.textContent = "eggs"; // You can change this to any item
    document.getElementById('my-lists').appendChild(newItem);
});


// Example 5 - Removing DOM Elements
document.getElementById('example-5').querySelector('button').addEventListener('click', function(){
    let tasks = document.getElementById('example-5').querySelector('ul');
    if (tasks.lastElementChild) {
        tasks.removeChild(tasks.lastElementChild);
    }
});

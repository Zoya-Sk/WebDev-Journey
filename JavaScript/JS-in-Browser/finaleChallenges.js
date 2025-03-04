/*
 DOM Finale with 5 More Challenges
  
  This builds on previous challenges and introduces new concepts.

  Additional Challenges:
  1. Changing the background color of an element.
  2. Toggling visibility of an element.
  3. Counting button clicks.
  4. Updating input field values dynamically.
  5. Handling form submissions.
*/

// Challenge 6: Change Background Color
document.getElementById('change-bg-btn').addEventListener('click', function(){
    document.body.style.backgroundColor = "lightblue";
});

// Challenge 7: Toggle Visibility
document.getElementById('toggle-btn').addEventListener('click', function(){
    let element = document.getElementById('toggle-element');
    element.classList.toggle('hidden');
});

// Challenge 8: Count Button Clicks
let count = 0;
document.getElementById('count-btn').addEventListener('click', function(){
    count++;
    document.getElementById('count-display').textContent = `Button clicked ${count} times`;
});

// Challenge 9: Update Input Field Value
document.getElementById('update-btn').addEventListener('click', function(){
    let inputField = document.getElementById('input-field');
    inputField.value = "Updated Value";
});

// Challenge 10: Handle Form Submission
document.getElementById('my-form').addEventListener('submit', function(event){
    event.preventDefault(); // Prevent page reload
    let formData = document.getElementById('form-input').value;
    alert(`Form submitted with value: ${formData}`);
});
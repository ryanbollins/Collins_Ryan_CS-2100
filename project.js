document.querySelectorAll(".bookSum").forEach(function(element) {    
    element.addEventListener("click", function() {
        var sound = document.getElementById("turn");
        sound.play();
    });
});


document.querySelectorAll(".publish").forEach(function(element) {    
    element.addEventListener("click", function() {
        var sound = document.getElementById("error");
        sound.play();
    });
});

const formContainer = document.getElementById('form-container');
const displayContainer = document.getElementById('display-container');
const editableForm = document.getElementById('editable-form');
const displayName = document.getElementById('display-name');
const displayBio = document.getElementById('display-bio');
const submitBtn = document.getElementById('submit-btn');
const saveToLocalStorage = (name, bio) => {
  localStorage.setItem('formData', JSON.stringify({ name, bio }));
};
const loadFromLocalStorage = () => {
  const savedData = JSON.parse(localStorage.getItem('formData'));
  if (savedData) {
    const { name, bio } = savedData;
    displayName.textContent = `${name}`;
    displayBio.textContent = `${bio}`;
    document.getElementById('name-input').value = name;
    document.getElementById('bio-input').value = bio;
    formContainer.classList.add('hidden');
    displayContainer.classList.remove('hidden');
  }
};
submitBtn.addEventListener('click', () => {
  const name = document.getElementById('name-input').value;
  const bio = document.getElementById('bio-input').value;
  if (!name || !bio) {
    alert('Please fill out name and bio.');
    return;
  }
  displayName.textContent = `${name}`;
  displayBio.textContent = `${bio}`;
  saveToLocalStorage(name, bio);
  formContainer.classList.add('hidden');
  displayContainer.classList.remove('hidden');
});
window.addEventListener('DOMContentLoaded', loadFromLocalStorage);

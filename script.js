alert("hello")
function getNumberOrString(value) {
    // Convert a string value to a number if possible
    let number_value = Number(value);
    if (Number.isNaN(number_value)) {
      return value
    } else {
      return number_value
    }
  }
  
  
  
  document.getElementById('share').addEventListener('click', (event) => {
    let element_shared = document.getElementById('shared');
    let new_li = document.createElement('li');
    new_li.innerText = getNumberOrString(document.getElementById('input').value);
  
    element_shared.appendChild(new_li);
  
  });
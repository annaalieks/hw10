// Generate input emoticons
function generateEmoticon(element, array) {
  element.value = array[Math.floor((Math.random() * array.length))];
}

// Create array
function createArray(element, array) {
  element.innerHTML = array;
}

// Update array
function updateArray(array, input, element) {
  array.push(input.value);
  element.innerHTML = array;
}

// Update set
function updateSet(array, element) {
  const createdSet = [...new Set(array)];
  element.innerHTML = createdSet;
}

export { generateEmoticon, createArray, updateArray, updateSet };
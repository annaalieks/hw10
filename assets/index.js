import { input, btn, array, set, sourceArray, createdArray } from "./aggregator.js";
import { generateEmoticon, createArray, updateArray, updateSet } from "./aggregator.js";

// Generate input emoticons
generateEmoticon(input, sourceArray);

// Create array and add it to array element innerHTML
createArray(array, createdArray);

// Create event listener for btn
btn.addEventListener('click', (event) => {
  // Prevent default submit event
  event.preventDefault();

  // Do not add empty value to array and generate new emoticon
  if (input.value.trim() === '') {
    event.preventDefault();
    generateEmoticon(input, sourceArray);
    return null;
	}

  // Update array with an input value
  updateArray(createdArray, input, array);

  // Update set with the unic values from array
  updateSet(createdArray, set);

  // Generate new input emoticon
  generateEmoticon(input, sourceArray);
});
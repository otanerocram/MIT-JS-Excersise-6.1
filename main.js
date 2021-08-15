let words = ['Loops', 'are', 'a', 'great', 'way', 'to', 'find', 'elements', 'in', 'an', 'array'];

// TODO: implement this function to return a string containing all words in a paragraph.
function createParagraph(words) {
let paragraph = '';

words.forEach(element => {
  paragraph += element + " ";
});

return paragraph;
}

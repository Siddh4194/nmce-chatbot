const brain = require('brain.js');

// Define the training data
const trainingData = [
  { input: 'hello', output: 'greeting' },
  { input: 'hi', output: 'greeting' },
  { input: 'hey', output: 'greeting' },
  { input: 'bye', output: 'farewell' },
  { input: 'goodbye', output: 'farewell' },
  { input: 'see you later', output: 'farewell' }
];

// Define the Levenshtein distance function
function levenshteinDistance(str1, str2) {
// Create a matrix of size (str1.length + 1) x (str2.length + 1)
const matrix = [];
for (let i = 0; i <= str1.length; i++) {
    matrix[i] = [i];
    for (let j = 1; j <= str2.length; j++) {
    if (i === 0) {
        matrix[i][j] = j;
    } else {
        const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
        matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1, // Deletion
        matrix[i][j - 1] + 1, // Insertion
        matrix[i - 1][j - 1] + cost // Substitution
        );
    }
    }
}
return matrix[str1.length][str2.length];
}

// Define the neural network model
const net = new brain.NeuralNetwork({
  inputSize: 2, // Input size is 2 (input string length and Levenshtein distance)
  hiddenLayers: [3],
  outputSize: 2 // Output size is 2 (greeting or farewell)
});

// Train the neural network
net.train(trainingData.map(({input, output}) => ({
  input: [input.length, levenshteinDistance(input, 'hello')],
  output: {[output]: 1}
})));

// Test the neural network
const output = net.run([5, levenshteinDistance('heyy', 'hello')]);
console.log(output);

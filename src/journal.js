
export default function Entry(inputText) {
  this.inputText = inputText;
}

Entry.prototype.wordCount = function() {
  // Create array from inputText
  const inputTextArray = this.inputText.split(" ");
  // Return length of array
  return inputTextArray.length;
};

Entry.prototype.vowelCount = function() {
  let vowels = 0;
  const inputLettersArray = this.inputText.split('');
  const vowelList = /[aeiou]/
  inputLettersArray.forEach(element => {
    if (vowelList.test(element)) {
      vowels += 1;
      console.log("it has a vowel!")
    }
  });
  return vowels;
}

Entry.prototype.consonantCount = function() {
  /* eslint-disable */
  const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~aeiou]/;
  /* eslint-enable */
  let consonants = 0;
  const inputLettersArray = this.inputText.split('');
  inputLettersArray.forEach(element => {
    if (!specialChars.test(element)) {
      consonants += 1;
    }
  });
  return consonants;
}
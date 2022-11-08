import Entry from './journal.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


function handleJournalEntry() {
  event.preventDefault();
  document.querySelector('#response').innerText = null;
  const inputText = document.querySelector('#entry-text').value;
  const entry = new Entry(inputText);
  const response = entry.wordCount();
  const vowels = entry.vowelCount();
  const consonants = entry.consonantCount();
  const pTag = document.createElement("p");
  const pTagVowels = document.createElement('p');
  const pTagConsonants = document.createElement('p');
  pTag.append("Wordcount: " + response);
  pTagVowels.append("Vowelcount: " + vowels);
  pTagConsonants.append("Consonantscount: " + consonants);
  document.querySelector('#response').append(pTag);
  document.querySelector('#vowels').append(pTagVowels);
  document.querySelector('#consonants').append(pTagConsonants);
}


document.querySelector("#journal-entry-form").addEventListener("submit", handleJournalEntry);

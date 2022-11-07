import Entry from './journal.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


function handleJournalEntry() {
  event.preventDefault();
  document.querySelector('#response').innerText = null;
  const inputText = parseInt(document.querySelector('#entry-text').value);
  const entry = new Entry(inputText);
  const response = entry.wordCount();
  const pTag = document.createElement("p");
  pTag.append(response);
  document.querySelector('#response').append(pTag);
}


document.querySelector("#journal-entry-form").addEventListener("submit", handleJournalEntry);

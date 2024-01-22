import HttpClient from './http.js';
import { createCardStudent } from './dom.js';

const info = document.querySelector('#students-info');

async function initpage() {
  const students = await loadStudents();

  students.forEach((student) => {
    info.appendChild(createCardStudent(student));
  });
}

const loadStudents = async () => {
  const url = 'http://localhost:3000/students';

  const http = new HttpClient(url);
  const students = await http.get();
  return students;
};

document.addEventListener(`DOMContentLoaded`, initpage);

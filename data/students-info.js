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

const filterStudentsByCourseName = (courseName, students) => {
  return students.filter((student) =>
    student.courseName.toLowerCase().includes(courseName.toLowerCase())
  );
};

const searchButton = document.querySelector('#search-button');
searchButton.addEventListener('click', async () => {
  const searchInput = document.querySelector('#search-course');
  const searchTerm = searchInput.value.trim();

  if (searchTerm !== '') {
    const students = await loadStudents();
    const filteredStudents = filterStudentsByCourseName(searchTerm, students);
    displayFilteredStudents(filteredStudents);
  } else {
    initpage();
  }
});

const displayFilteredStudents = (students) => {
  const info = document.querySelector('#students-info');
  info.innerHTML = '';

  students.forEach((student) => {
    info.appendChild(createCardStudent(student));
  });
};

document.addEventListener(`DOMContentLoaded`, initpage);

import HttpClient from './http.js';
import { createCourseList } from './dom.js';

const initPage = async () => {
  const url = 'http://localhost:3000/courses';

  const http = new HttpClient(url);

  const courses = await http.get();
  createCourseList(courses, document.querySelector('#courses'));

  const cards = document.querySelectorAll('#courses div');

  cards.forEach((card) => {
    card.addEventListener('click', selectedCourse);
  });
  console.log(courses);
};

const selectedCourse = (e) => {
  let courseId = 0;
  if (e.target.location === 'div') {
    courseId = e.target.getAttribute('courseid');
  } else if (e.target.localName === 'span') {
    courseId = e.target.parentElement.getAttribute('courseid');
  }
  console.log('course', e.target);
};
document.addEventListener('DOMContentLoaded', initPage);

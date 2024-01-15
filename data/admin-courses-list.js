import HttpClient from './http.js';
import { createCourseList } from './dom.js';

const initPage = async () => {
  const url = 'http://localhost:3000/courses';

  const http = new HttpClient(url);

  const courses = await http.get();
  createCourseList(courses, document.querySelector(`#courses`));

  const cards = document.querySelectorAll('#courses div');

  cards.forEach((card) => {
    card.addEventListener('click', selectedCourse);
  });
};

const selectedCourse = (e) => {
  let courseId = 0;
  if (e.target.location === `div`) {
    courseId = e.target.getAttribute(`courseid`);
  } else if (e.target.localName === `span`) {
    courseId = e.target.parentElemen.getAttribute(`courseid`);
  }
};
document.addEventListener('DOMContentLoaded', initPage);

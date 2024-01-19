import HttpClient from './http.js';
import { createCourseList } from './dom.js';

const initPage = async () => {
  const url = 'http://localhost:3000/courses';
  const http = new HttpClient(url);

  try {
    const courses = await http.get();

    // Assuming #courses is the container where you want to append the cards
    const coursesContainer = document.querySelector('.courses-info-admin');

    courses.forEach((course) => {
      const card = createCourseList(course);
      coursesContainer.appendChild(card);
    });

    const cards = document.querySelectorAll('courses .card');

    cards.forEach((card) => {
      card.addEventListener('click', selectedCourse);
    });

    console.log(courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
  }
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

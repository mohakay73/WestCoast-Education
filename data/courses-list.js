import HttpClient from './http.js';
import { createCard, addImageClickHandler } from './dom.js';

const gallery = document.querySelector('#courses-gallery');

async function initpage() {
  const courses = await loadCourses();

  courses.forEach((course) => {
    gallery.appendChild(createCard(course));
  });

  const images = document.querySelectorAll(`.course-image img`);
  addImageClickHandler(images);
}

const loadCourses = async () => {
  const url = 'http://localhost:3000/courses';

  const http = new HttpClient(url);
  const courses = await http.get();
  return courses;
};
const handleImageClick = (event) => {
  const courseTitle = event.currentTarget.dataset.title;
  const courseId = event.currentTarget.dataset.id;
  console.log(`Clicked on course: ${courseTitle} (ID: ${courseId})`);
};

document.addEventListener(`DOMContentLoaded`, initpage);

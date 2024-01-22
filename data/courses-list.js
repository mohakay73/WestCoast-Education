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
  // Get information from the clicked image or its parent element
  const courseTitle = event.currentTarget.dataset.title;
  const courseId = event.currentTarget.dataset.id;

  // Display or handle the information as needed
  console.log(`Clicked on course: ${courseTitle} (ID: ${courseId})`);
  // You can now do something with the course information, e.g., display it in a modal or perform additional actions.
};

document.addEventListener(`DOMContentLoaded`, initpage);

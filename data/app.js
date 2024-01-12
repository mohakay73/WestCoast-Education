import { listAllCourses } from './courses.js';
import { createCard, addImageClickHandler } from './dom.js';

const gallery = document.querySelector('#courses-gallery');

function initpage() {
  const url = 'http://localhost:3000/courses';

  let courses = [];
  const response = fetch(url).then((data) => {
    data.json().then((result) => {
      courses = result;
      courses.forEach((course) => {
        gallery.appendChild(createCard(course));
      });

      const images = document.querySelectorAll(`.course-image img`);
      addImageClickHandler(images);
    });
  });
}

document.addEventListener(`DOMContentLoaded`, initpage);

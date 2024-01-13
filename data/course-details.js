console.log('Script loaded');
import HttpClient from './http.js';

const courseDetailsContainer = document.querySelector(
  '#course-details-container'
);

async function initPage() {
  const courseId = getCourseIdFromUrl();
  console.log('Course ID:', courseId);
  if (courseId) {
    const courseDetails = await loadCourseDetails(courseId);
    displayCourseDetails(courseDetails);
  } else {
    console.error('Course ID not provided in the URL parameters.');
  }
}

function getCourseIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id');
}

const loadCourseDetails = async (courseId) => {
  const url = `http://localhost:3000/courses/${courseId}`;
  const http = new HttpClient(url);
  const courseDetails = await http.get();
  return courseDetails;
};

const displayCourseDetails = (courseDetails) => {
  const titleElement = document.querySelector('#course-title');
  const descriptionElement = document.querySelector('#course-description');

  titleElement.textContent = courseDetails.courseTitle;
  descriptionElement.textContent = courseDetails.description;
};

document.addEventListener('DOMContentLoaded', initPage);

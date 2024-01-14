import HttpClient from './http.js';

const courseDetailsContainer = document.querySelector(
  '#course-details-container'
);

async function initPage() {
  const courseId = getCourseIdFromUrl();

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
  document.querySelector('#course-title').textContent =
    courseDetails.courseTitle;
  document.querySelector(
    '#course-description'
  ).textContent = `${courseDetails.description} - ${courseDetails.courseDuration}`;
  document.querySelector('#course-number').textContent =
    courseDetails.courseNumber;
};

document.addEventListener('DOMContentLoaded', initPage);

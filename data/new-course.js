import HttpClient from './http.js';
import { convertFormDataToJson } from './utilities.js';

const form = document.querySelector('#addCourseForm');

const addCourse = async (e) => {
  e.preventDefault();

  const course = new FormData(form);
  const obj = convertFormDataToJson(course);
  saveCourse(obj);
};

const saveCourse = async (course) => {
  const url = 'http://localhost:3000/courses';
  const http = new HttpClient(url);
  const newCourse = await http.add(course);
  console.log('Course saved successfully!');
  location.href = './index-admin.html';
};

form.addEventListener('submit', addCourse);

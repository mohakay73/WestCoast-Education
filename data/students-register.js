import HttpClient from './http.js';
import { convertFormDataToJson } from './utilities.js';

const form = document.querySelector('#register-student');

const registerStudent = async (e) => {
  e.preventDefault();

  const student = new FormData(form);
  const obj = convertFormDataToJson(student);
  saveStudent(obj);
};

const saveStudent = async (student) => {
  const url = 'http://localhost:3000/students ';
  const http = new HttpClient(url);
  const newStudent = await http.add(student);
  console.log(newStudent);
};

form.addEventListener('submit', registerStudent);

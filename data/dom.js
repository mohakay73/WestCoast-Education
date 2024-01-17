const createCard = (course) => {
  const div = document.createElement(`div`);
  div.classList.add(`course-image`);
  div.appendChild(createImage(course.imageUrl, course.id));
  div.appendChild(createCourseList(course));
  return div;
};

const createImage = (imageUrl, id) => {
  const image = document.createElement(`img`);
  image.setAttribute(`src`, `/content/images/${imageUrl}`);
  image.setAttribute(`id`, id);

  return image;
};

export const createCourseList = (course) => {
  const card = document.createElement('div');
  card.classList.add('card');

  const body = document.createElement('div');
  body.classList.add('card-body');
  card.setAttribute('courseid', course.coourseId);
  const bodyHeader = document.createElement('h5');
  bodyHeader.classList.add('card-title');
  bodyHeader.appendChild(document.createTextNode(course.courseTitle));

  const courseNumber = document.createElement('p');
  courseNumber.classList.add('card-number');
  courseNumber.appendChild(document.createTextNode(course.courseNumber));
  bodyHeader.appendChild(courseNumber);

  const info = document.createElement('p');
  info.classList.add('card-info');
  info.appendChild(
    document.createTextNode(
      `Course time : ${course.courseTime} /  Course Date: ${course.startDate} /  Study form: ${course.studyForm}`
    )
  );

  const description = document.createElement('p');
  description.classList.add('card-description');
  description.appendChild(document.createTextNode(course.description));

  bodyHeader.appendChild(description);
  bodyHeader.appendChild(info);
  body.appendChild(bodyHeader);
  card.appendChild(body);

  return card;
};

const createDiv = () => {
  // const div = document.createElement('div');
  // return div;
  return document.createElement('div');
};
const addImageClickHandler = (images) => {
  images.forEach((image) => {
    const src = image.getAttribute(`src`);
    const courseId = image.getAttribute(`id`);

    image.addEventListener(`click`, () => {
      location.href = `/html/course-details.html?id=${courseId}`;
    });
  });
};

export { createCard, addImageClickHandler };

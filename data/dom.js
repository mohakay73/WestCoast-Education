const createCard = (course) => {
  const div = document.createElement(`div`);
  div.classList.add(`course-image`);
  div.appendChild(createImage(course.imageUrl, course.id));
  div.appendChild(createCourseInfo(course));
  return div;
};

const createImage = (imageUrl, id) => {
  const image = document.createElement(`img`);
  image.setAttribute(`src`, `/content/images/${imageUrl}`);
  image.setAttribute(`id`, id);

  return image;
};

const createCourseInfo = (course) => {
  const paragraph = document.createElement(`p`);
  paragraph.appendChild(
    document.createTextNode(
      `${course.courseTitle}  ${course.courseNumber}  ${course.courseTime}  ${course.startDate}  ${course.studyForm}`
    )
  );

  return paragraph;
};
const createCourseList = (courses, element) => {
  // Loopa igenom alla bilar vehicles
  // För varje bil skapa en div
  // Den skapade diven skall läggas till element som vi skickade in
  vehicles.forEach((course) => {
    const container = createDiv();
    container.setAttribute('vehicleid', course.id);

    element.appendChild(container);
  });
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

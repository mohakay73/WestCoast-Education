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
      `${course.courseNumber} ${course.courseTime} ${course.startDate} ${course.studyForm}`
    )
  );

  return paragraph;
};

const addImageClickHandler = (images) => {
  images.forEach((image) => {
    const src = image.getAttribute(`src`);
    const courseId = image.getAttribute(`id`);

    image.addEventListener(`click`, () => {
      alert(`Course id is ${courseId}, course imagesource is: ${src}`);
    });
  });
};

export { createCard, addImageClickHandler };

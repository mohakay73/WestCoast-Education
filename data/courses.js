const courses = [
  {
    id: 1,
    courseTitle: 'PowerShell',
    courseNumber: 1122,
    courseTime: 'Six months',
    imageUrl: 'PowerShell.png',
    startDate: 'September 2024',
    studyForm: 'Distance',
    description:
      'This course aims to give you in-depth knowledge of PowerShell to be able to build robust and reliable solutions - which favor flows and improve efficiency in digital everyday life. After completing the training, you will have a broad knowledge base to be able to successfully adapt and administer, among other things; Windows Server, Microsoft Exchange Server, Microsoft SharePoint Server and Microsoft 365. You will also be able to create scripts to automate repetitive tasks and generate reports. In addition, you will acquire advanced skills in developing functions, writing control scripts and handling any script errors that may occur.',
  },

  {
    id: 2,
    courseTitle: 'Python Programing',
    courseNumber: 1123,
    courseTime: '1 Year',
    imageUrl: 'python.png',
    startDate: 'October 2024',
    studyForm: 'Distance',
    description:
      'Do you want to work with programming? Then the Python programming course may be right for you. Python is a growing programming language and is used today in computer science fields, such as machine learning, data science and artificial intelligence (AI). This education gives you important knowledge that strengthens your competitiveness on the labor market. The content of the training is carefully planned based on the industrys skills shortage and will therefore give you an extremely relevant knowledge base.',
  },
  {
    id: 3,
    courseTitle: 'Secure Coding and Software',
    courseNumber: 1124,
    courseTime: '1 Year',
    imageUrl: 'securecoding.jpg',
    startDate: 'September 2024',
    studyForm: 'In Place',
    description:
      'This training gives you knowledge in secure coding and secure handling of data. IT and cyber security is an important issue and the skills are in high demand. You learn to identify, manage and minimize risks and become a sought-after resource in tomorrows IT. Working with secure coding and software means that you work both preventively with IT security and handling data, but also to identify vulnerabilities and work remedially in the event of a hacker attack. You are usually employed as a consultant at an IT company but can also work directly as an IT security technician at a larger company that needs to handle large amounts of data that needs to be protected from intrusions. The training is intended to serve as a deepening for those who already work in IT or computer security and who want to increase their competence in the field',
  },
  {
    id: 4,
    courseTitle: 'Availability for web and app development',
    courseNumber: 1125,
    courseTime: 'Six Months',
    imageUrl: 'webdevelopment.png',
    startDate: 'October 2024',
    studyForm: 'In Place',
    description:
      'The importance of digital accessibility has become clearer and clearer. Educating yourself in accessibility for web and app development will give you basic knowledge about different types of disabilities and what can be obstacles if the special needs are not taken into account. In this way, you will be able to build accessibility adaptations right from the start in future digital projects for the web or apps.During the course, you will also realize how great the need for digital inclusion is and how you can be part of a positive development going forward.',
  },
];

const listAllCourses = () => courses;
export { listAllCourses };


const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// 2. Function to display courses
function showCourses(filter) {
  let filtered;

  if (filter === 'All') {
    filtered = courses;
  } else {
    filtered = courses.filter(function(course) {
      return course.subject === filter;
    });
  }

  // 3. Calculate total credits
  let total = 0;
  for (let i = 0; i < filtered.length; i++) {
    total += filtered[i].credits;
  }

  // 4. Update the credit count on the page
  document.querySelector('#totalCredits').textContent = total;

  // 5. Clear any old course list
  const oldList = document.getElementById('courseList');
  if (oldList) {
    oldList.remove();
  }

  // 6. Make a new list
  const newList = document.createElement('div');
  newList.id = 'courseList';

  for (let i = 0; i < filtered.length; i++) {
    const courseItem = document.createElement('div');
    courseItem.textContent = filtered[i].subject + ' ' + filtered[i].number + ' - ' + filtered[i].title;

    if (filtered[i].completed === true) {
      courseItem.classList.add('completed');
    } else {
      courseItem.classList.add('not-completed');
    }

    newList.appendChild(courseItem);
  }

  // 7. Add new list to the page
  document.querySelector('.certifications').appendChild(newList);
}

document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('#courses button');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      const filter = buttons[i].textContent;
      showCourses(filter);
    });
  }

  // Show all courses by default when the page loads
  showCourses('All');
});

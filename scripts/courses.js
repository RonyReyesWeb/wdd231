const courses = [
    { subject: "CSE", number: 110, title: "Intro to Programming", credits: 2, completed: true, description: "Introduction to basic programming concepts, problem solving, and logical thinking.", certificate: "Web & Computer Programming", technology: ["Python"] },
    { subject: "WDD", number: 130, title: "Web Fundamentals", credits: 2, completed: true, description: "Learn the foundations of web development including HTML, CSS, and basic JavaScript.", certificate: "Web & Computer Programming", technology: ["HTML", "CSS"] },
    { subject: "CSE", number: 111, title: "Programming with Functions", credits: 2, completed: true, description: "Covers functions, parameters, loops, and decision structures in programming.", certificate: "Web & Computer Programming", technology: ["Python"] },
    { subject: "CSE", number: 210, title: "Programming with Classes", credits: 2, completed: true, description: "Focuses on object-oriented programming concepts such as classes and objects.", certificate: "Web & Computer Programming", technology: ["Python"] },
    { subject: "WDD", number: 131, title: "Dynamic Web Fundamentals", credits: 2, completed: true, description: "Build dynamic websites using JavaScript and interact with the DOM.", certificate: "Web & Computer Programming", technology: ["HTML", "CSS", "JavaScript"] },
    { subject: "WDD", number: 231, title: "Frontend Web Development I", credits: 2, completed: false, description: "Advanced front-end techniques including responsive design and accessibility.", certificate: "Web & Computer Programming", technology: ["HTML", "CSS", "JavaScript"] }
];

const courseContainer = document.querySelector("#courses");
const totalCredits = document.querySelector("#totalCredits");

function displayCourses(list) {
    courseContainer.innerHTML = "";

    const credits = list.reduce((sum, course) => sum + course.credits, 0);
    totalCredits.textContent = credits;

    list.forEach(course => {
        const div = document.createElement("div");
        div.classList.add("course");

        if (course.completed) {
            div.classList.add("completed");
        }

        div.innerHTML = `
            <p>${course.subject} ${course.number}</p>
        `;

        courseContainer.appendChild(div);
    });
}

document.querySelector("#all").addEventListener("click", () => displayCourses(courses));
document.querySelector("#wdd").addEventListener("click", () =>
    displayCourses(courses.filter(c => c.subject === "WDD"))
);
document.querySelector("#cse").addEventListener("click", () =>
    displayCourses(courses.filter(c => c.subject === "CSE"))
);

displayCourses(courses);


function displayCourseDetails(courses) {
    courseDetails.innerHTML = '';
    courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${courses.subject} ${courses.number}</h2>
    <h3>${courses.title}</h3>
    <p><strong>Credits</strong>: ${courses.credits}</p>
    <p><strong>Certificate</strong>: ${courses.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${courses.technology.join(', ')}</p>
  `;
    courseDetails.showModal();

    closeModal.addEventListener("click", () => {
        courseDetails.close();
    });
}

courseDiv.addEventListener('click', () => {
    displayCourseDetails(courses);
});
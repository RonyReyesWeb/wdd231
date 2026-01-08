const courses = [
    { subject: "CSE", number: 110, title: "Intro to Programming", credits: 2, completed: true },
    { subject: "WDD", number: 130, title: "Web Fundamentals", credits: 2, completed: true },
    { subject: "CSE", number: 111, title: "Programming with Functions", credits: 2, completed: true },
    { subject: "CSE", number: 210, title: "Programming with Classes", credits: 2, completed: true },
    { subject: "WDD", number: 131, title: "Dynamic Web Fundamentals", credits: 2, completed: true },
    { subject: "WDD", number: 231, title: "Frontend Web Development I", credits: 2, completed: false }
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

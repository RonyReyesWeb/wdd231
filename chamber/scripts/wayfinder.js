// Adding the wayfinder logic
document.addEventListener("DOMContentLoaded", () => {
    let currentPage = window.location.pathname.split("/").pop();
    if (currentPage === "") {
        currentPage = "index.html";
    }

    document.querySelectorAll(".navigation a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });
});



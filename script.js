const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const body = document.body;

menuBtn.addEventListener("click", function () {
    sidebar.classList.toggle("active");
    menuBtn.classList.toggle("change");
    body.classList.toggle("sidebar-open");
});

const sidebarLinks = document.querySelectorAll('.sidebar a');
sidebarLinks.forEach(link => {
    link.addEventListener("click", function () {
        sidebar.classList.remove("active");
        menuBtn.classList.remove("change");
        body.classList.remove("sidebar-open");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const contactBtn = document.getElementById("contactBtn");

    contactBtn.addEventListener("click", () => {
        document.getElementById("contact").scrollIntoView({
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const imageContainers = document.querySelectorAll(".image-container");
    const serviceSections = document.querySelectorAll(".services > div");

    imageContainers.forEach(container => {
        container.addEventListener("click", function () {
            const targetId = container.querySelector("img").id.replace("Img", "Inside");

            const targetSection = document.getElementById(targetId);
            
            if (targetSection && targetSection.style.display === "block") {
                targetSection.style.display = "none";
            } else {
                serviceSections.forEach(section => {
                    section.style.display = "none";
                });

                if (targetSection) {
                    targetSection.style.display = "block";
                }
            }
        });
    });

    serviceSections.forEach(section => {
        section.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const filters = document.querySelectorAll(".filter");
    const items = document.querySelectorAll(".gallery-item");

    filters.forEach(filter => {
        filter.addEventListener("click", function() {
            let filterValue = this.getAttribute("data-filter");

            document.querySelector(".filter.active").classList.remove("active");
            this.classList.add("active");

            items.forEach(item => {
                if (filterValue === "all" || item.classList.contains(filterValue)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});

const loadMoreBtn = document.getElementById("loadMore");
const hiddenPhotosDiv = document.getElementById("hiddenPhotos");

let lastScrollPosition = 0;

loadMoreBtn.addEventListener("click", () => {
    const currentScrollPosition = window.scrollY;

    if (hiddenPhotosDiv.classList.contains("show")) {
        hiddenPhotosDiv.classList.remove("show");
        loadMoreBtn.textContent = "Daha Fazla...";

        window.scrollTo(0, lastScrollPosition);
    } else {
        hiddenPhotosDiv.classList.add("show");
        loadMoreBtn.textContent = "Daha Az Göster";

        lastScrollPosition = currentScrollPosition;
    }
});

document.querySelector("#contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    console.log("Form başarıyla gönderildi!");

    document.getElementById("successMessage").innerText = "Mesajınız başarıyla gönderildi!";
    
    this.reset();
});


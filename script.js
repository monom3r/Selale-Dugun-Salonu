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

organizationImg.addEventListener("click", () => {
    if (organizationInside.style.display === "none") {
        organizationInside.style.display = "block";
        musicInside.style.display = "none";
        cateringInside.style.display = "none";
        decorationInside.style.display = "none";
        fotoInside.style.display = "none";
    } else {
        organizationInside.style.display = "none";
    }
});

musicImg.addEventListener("click", () => {
    if (musicInside.style.display === "none") {
        musicInside.style.display = "block";
        organizationInside.style.display = "none";
        cateringInside.style.display = "none";
        decorationInside.style.display = "none";
        fotoInside.style.display = "none";
    } else {
        musicInside.style.display = "none";
    }
});

foodImg.addEventListener("click", () => {
    if (cateringInside.style.display === "none") {
        cateringInside.style.display = "block";
        organizationInside.style.display = "none";
        musicInside.style.display = "none";
        decorationInside.style.display = "none";
        fotoInside.style.display = "none";
    } else {
        cateringInside.style.display = "none";
    }
});

decorationImg.addEventListener("click", () => {
    if (decorationInside.style.display === "none") {
        decorationInside.style.display = "block";
        organizationInside.style.display = "none";
        musicInside.style.display = "none";
        cateringInside.style.display = "none";
        fotoInside.style.display = "none";
    } else {
        decorationInside.style.display = "none";
    }
});

fotoImg.addEventListener("click", () => {
    if (fotoInside.style.display === "none") {
        fotoInside.style.display = "block";
        organizationInside.style.display = "none";
        musicInside.style.display = "none";
        cateringInside.style.display = "none";
        decorationInside.style.display = "none";
    } else {
        fotoInside.style.display = "none";
    }
});

organizationInside.style.display = "none";
musicInside.style.display = "none";
cateringInside.style.display = "none";
decorationInside.style.display = "none";
fotoInside.style.display = "none";

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

loadMoreBtn.addEventListener("click", () => {
    if (hiddenPhotosDiv.classList.contains("show")) {
        hiddenPhotosDiv.classList.remove("show");
        loadMoreBtn.textContent = "Daha Fazla...";
    } else {
        hiddenPhotosDiv.classList.add("show");
        loadMoreBtn.textContent = "Daha Az Göster";
    }
});

document.querySelector("#contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    console.log("Form başarıyla gönderildi!");

    document.getElementById("successMessage").innerText = "Mesajınız başarıyla gönderildi!";
    
    this.reset();
});


// menu start

const menuBtn = document.querySelector("#menu-bar");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

// menu end

// gallery start

lightGallery(document.querySelector(".gallery"));

// gallery end

// loader start

function loader() {
  document.querySelector(".loader-container").classList.add("active");
}

function fadeOut() {
  setTimeout(loader, 1300);
}

fadeOut();

// loader end

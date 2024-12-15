//locoScroll();
//this function is responsible for locomotive Scroll-bar
function locoScroll() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

/*page 1*/
// let input = document.querySelector(".navInput input");
// let label = document.querySelector(".navInput i");
// input.addEventListener("click", (event) => {
//   label.style.display = "none";
//   event.stopPropagation();
// });
// window.addEventListener("click", () => {
//   label.style.display = "inline";
// });

const courses = {
  Python: [
    {
      title: "Python Complete Guide",
      description: "Learn Python from basics to advanced...",
      rating: "4.5",
      reviews: "41,599",
      price: "$49.99",
      bestseller: true,
      img: "/ass/5.webp",
      details: "Learn Python from scratch with this complete guide!",
    },
    {
      title: "Python for Data Science",
      description: "Master Python for data analysis...",
      rating: "4.6",
      reviews: "1,692",
      price: "$79.99",
      bestseller: false,
      img: "/ass/6.png",
      details: "Dive into Python for data science and analytics!",
    },
    {
      title: "Python & Machine Learning",
      description: "Explore ML with Python...",
      rating: "4.5",
      reviews: "435",
      price: "$27.99",
      bestseller: false,
      img: "/ass/7.webp",
      details: "Master machine learning techniques using Python!",
    },
    {
      title: "Python Masterclass",
      description: "Complete Python Programming...",
      rating: "4.3",
      reviews: "407",
      price: "$19.99",
      bestseller: false,
      img: "/ass/8.png",
      details: "Advance your Python programming skills!",
    },
  ],
  Excel: [
    {
      title: "Excel Basics",
      description: "Learn Excel from scratch...",
      rating: "4.7",
      reviews: "12,345",
      price: "$29.99",
      bestseller: true,
      img: "https://plus.unsplash.com/premium_photo-1671461774955-7aab3ab41b90?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: "Master Excel for day-to-day tasks!",
    },
    {
      title: "Excel for Data Analysis",
      description: "Excel tips and tricks...",
      rating: "4.6",
      reviews: "8,123",
      price: "$39.99",
      bestseller: false,
      img: "https://plus.unsplash.com/premium_photo-1672921845494-18557ab0fa55?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: "Advanced data analysis with Excel!",
    },
  ],
  // Add other sections like Web Development, JavaScript, Data Science, Amazon AWS
};

function loadCourses(category) {
  const courseContainer = document.getElementById("course-container");
  courseContainer.innerHTML = "";

  courses[category]?.forEach((course) => {
    const card = document.createElement("div");
    card.className = "col-md-3 col-sm-6 mb-4";
    card.innerHTML = `
          <div class="card">
              <img src="${course.img}" class="card-img-top" alt="Course Image">
              <div class="card-body">
                  <h5 class="card-title">${course.title}</h5>
                  <p class="card-text">${course.description}</p>
                  <p class="mb-1"><strong>${course.rating}</strong> ⭐ (${
      course.reviews
    })</p>
                  <p class="text-success">${course.price} ${
      course.bestseller
        ? '<span class="badge bg-warning">Bestseller</span>'
        : ""
    }</p>
                  <button class="btn btn-primary" onclick="showDetails('${
                    course.title
                  }', '${course.details}')">Learn More</button>
              </div>
          </div>
      `;
    courseContainer.appendChild(card);
  });
}

function showDetails(title, details) {
  document.getElementById("detailsModalLabel").innerText = title;
  document.getElementById("modal-body").innerHTML = `<p>${details}</p>`;
  const modal = new bootstrap.Modal(document.getElementById("detailsModal"));
  modal.show();
}

// Load Python courses by default on page load
loadCourses("Python");





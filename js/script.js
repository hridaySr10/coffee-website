//..............mobile dropdown menu slider..............
let dropdownSlider = document.querySelector(".dropdown-slider");
let menuOpen = document.querySelector(".menu-icon .menu-open");
let menuClose = document.querySelector(".menu-icon .menu-close");

menuOpen.addEventListener("click", () => {
  dropdownSlider.style.left = "0";
});
menuClose.addEventListener("click", () => {
  dropdownSlider.style.left = "-100%";
});

//......................mobile sub-li slider...........//
let liClose = document.querySelectorAll(".li-slider-close-p");
let liOpen = document.querySelectorAll(".li-slider-open-a");
let liSliderBox = document.querySelectorAll(".mob-li-slider");

liOpen.forEach((li) => {
  // console.log(li.nextElementSibling);
  li.addEventListener("click", function () {
    li.nextElementSibling.style.left = "0%";
  });
});
liClose.forEach((p) => {
  // console.log(p.closest(".mob-li-slider"));
  p.addEventListener("click", function () {
    p.closest(".mob-li-slider").style.left = "200%";
  });
});

//..............box-4 image change......................//
let changeImg = document.querySelector(".mega-menu-box .box-4 img");

window.addEventListener("resize", function () {
  if (window.innerWidth < 1277) {
    changeImg.setAttribute("src", "images/header/banner-3.webp");
  } else if (window.innerWidth < 1316) {
    changeImg.setAttribute("src", "images/header/banner-2.webp");
  } else {
    changeImg.setAttribute("src", "images/header/banner.png");
  }
});

//...............dropdown slider..........................//

new Swiper(".dropdownSwiper", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  lazyLoading: true,
  speed: 2000,
  simulateTouch: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  allowTouchMove: true,
  grabCursor: true,
  breakpoints: {
    960: {
      spaceBetween: 40,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
    },
    1100: {
      spaceBetween: 30,
      slidesOffsetBefore: 16,
      slidesOffsetAfter: 16,
    },
    1300: {
      spaceBetween: 40,
      slidesOffsetBefore: 16,
      slidesOffsetAfter: 16,
    },
    1420: {
      spaceBetween: 50,
      slidesOffsetBefore: 16,
      slidesOffsetAfter: 16,
    },
  },
});
new Swiper(".mob-slider-Swiper", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  lazyLoading: true,
  speed: 2000,
  simulateTouch: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  allowTouchMove: true,
  grabCursor: true,
  breakpoints: {
    320: {
      spaceBetween: 40,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
    },
    490: {
      spaceBetween: 40,
      slidesOffsetBefore: 18,
      slidesOffsetAfter: 18,
    },
    660: {
      spaceBetween: 50,
      slidesOffsetBefore: 20,
      slidesOffsetAfter: 20,
    },
    760: {
      spaceBetween: 60,
      slidesOffsetBefore: 24,
      slidesOffsetAfter: 24,
    },
    860: {
      spaceBetween: 60,
      slidesOffsetBefore: 24,
      slidesOffsetAfter: 24,
    },
    960: {
      spaceBetween: 60,
      slidesOffsetBefore: 24,
      slidesOffsetAfter: 24,
    },
  },
});

//.....................cursor effect in text hero.................//

const phrases = [
  "Farm-Fresh Coffee Beans..",
  "Fresh Roasts With Every Order..",
  "Brew Magic Every Morning..",
];
const dynamicElement = document.getElementById("typewriter-dynamic");

let currentPhrase = 0;
let currentCharIndex = 0;
let isDeleting = false;

function typeWriter() {
  const currentText = phrases[currentPhrase];

  if (isDeleting) {
    // Remove characters one by one
    currentCharIndex--;
  } else {
    // Add characters one by one
    currentCharIndex++;
  }

  dynamicElement.textContent = currentText.slice(0, currentCharIndex);

  if (!isDeleting && currentCharIndex === currentText.length) {
    setTimeout(() => (isDeleting = true), 2500);
  } else if (isDeleting && currentCharIndex === 0) {
    isDeleting = false;
    currentPhrase = (currentPhrase + 1) % phrases.length;
  }

  setTimeout(typeWriter, isDeleting ? 80 : 150);
}

typeWriter();

//..........header scroll............//

// $(document).ready(function () {
//   let initialScroll = 0;

//   $(window).on("resize scroll", function () {
//     const finalScroll = $(this).scrollTop();
//     const isScrollingDown = finalScroll > initialScroll;
//     const isAtTop = finalScroll === 0;
//     const windowWidth = $(window).width();

//     if (windowWidth > 961) {
//       if (isScrollingDown) {
//         $("header").css("top", "-40px");
//         $(".nav-top, .nav-main, .nav-btm").css("background-color", "#030505");
//         $(".nav-btm").css("top", "-24px");
//       } else if (isAtTop) {
//         $("header").css("top", "0px");
//         $(".nav-main").css("background-color", "#030505");
//         $(".nav-top, .nav-btm").css("background-color", "transparent");
//         $(".nav-btm").css("top", "0px");
//       } else {
//         $("header").css("top", "0px");
//       }
//     } else {
//       if (isScrollingDown) {
//         $("header").css("top", "-30px");
//         $(".nav-top, .nav-main").css("background-color", "#030505");
//       } else if (isAtTop) {
//         $("header").css("top", "0px");
//         $(".nav-top, .nav-main").css("background-color", "transparent");
//       } else {
//         $("header").css("top", "0px");
//       }
//     }

//     initialScroll = finalScroll;
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  let initialScroll = 0;

  window.addEventListener("resize", handleScrollOrResize);
  window.addEventListener("scroll", handleScrollOrResize);

  function handleScrollOrResize() {
    const finalScroll = window.scrollY || document.documentElement.scrollTop;
    const isScrollingDown = finalScroll > initialScroll;
    const isAtTop = finalScroll === 0;
    const windowWidth = window.innerWidth;

    const header = document.querySelector("header");
    const navTop = document.querySelector(".nav-top");
    const navMain = document.querySelector(".nav-main");
    const navBtm = document.querySelector(".nav-btm");

    if (windowWidth > 961) {
      if (isScrollingDown) {
        header.style.top = "-40px";
        navTop.style.backgroundColor = "#030505";
        navMain.style.backgroundColor = "#030505";
        navBtm.style.backgroundColor = "#030505";
        navBtm.style.top = "-24px";
      } else if (isAtTop) {
        header.style.top = "0px";
        navMain.style.backgroundColor = "#030505";
        navTop.style.backgroundColor = "transparent";
        navBtm.style.backgroundColor = "transparent";
        navBtm.style.top = "0px";
      } else {
        header.style.top = "0px";
      }
    } else {
      if (isScrollingDown) {
        header.style.top = "-30px";
        navTop.style.backgroundColor = "#030505";
        navMain.style.backgroundColor = "#030505";
      } else if (isAtTop) {
        header.style.top = "0px";
        navTop.style.backgroundColor = "transparent";
        navMain.style.backgroundColor = "transparent";
      } else {
        header.style.top = "0px";
      }
    }

    initialScroll = finalScroll;
  }
});

//.................marque slider animation change left right .............//

const marqueSlider = document.querySelector(".box2 .slider-track");
const sliderTrackImgs = document.querySelectorAll(
  ".slider-track .slider-track-img"
);
let lastScrollY = window.scrollY;

if (
  document.addEventListener("DOMContentLoaded", function () {
    let currentScrollY = window.scrollY;
    if (currentScrollY == 0) {
      marqueSlider.classList.add("left-right-initial");
      marqueSlider.classList.remove("right-left");
      marqueSlider.classList.remove("left-right");
    }
  })
);
else if (
  window.addEventListener("scroll", function () {
    let currentScrollY = window.scrollY;

    // when at top
    if (currentScrollY > lastScrollY) {
      marqueSlider.classList.add("left-right");
      marqueSlider.classList.remove("right-left");
      marqueSlider.classList.remove("left-right-initial");

      sliderTrackImgs.forEach((img) => {
        img.style.transform = "rotate(2deg)";
      });
      // Scrolling up
    } else if (currentScrollY < lastScrollY) {
      marqueSlider.classList.add("right-left");
      marqueSlider.classList.remove("left-right");
      marqueSlider.classList.remove("left-right-initial");

      sliderTrackImgs.forEach((img) => {
        img.style.transform = "rotate(182deg)";
      });
    }

    lastScrollY = currentScrollY;
  })
);

//...........................barists choice slider..........//

new Swiper(".choice-swiper", {
  loop: false,
  slidesPerView: "auto",
  simulateTouch: true,
  allowTouchMove: true,
  centeredSlides: false,
  speed: 800,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  autoplay: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".choice-btn-next",
    prevEl: ".choice-btn-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 20,
    },
    370: {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 40,
    },
    420: {
      slidesPerView: 1.1,
      centeredSlides: true,
      spaceBetween: 30,
    },
    558: {
      slidesPerView: 1.4,
      centeredSlides: true,
      spaceBetween: 20,
    },

    640: {
      slidesPerView: 1.8,
      centeredSlides: false,
      spaceBetween: 25,
    },
    732: {
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 25,
    },
    860: {
      slidesPerView: 2.4,
      centeredSlides: false,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      centeredSlides: false,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 3.5,
      centeredSlides: false,
      spaceBetween: 30,
    },
    1410: {
      slidesPerView: 4,
      centeredSlides: false,
      spaceBetween: 40,
    },

    1536: {
      slidesPerView: 4,
      spaceBetween: 60,
      centeredSlides: false,
    },
  },
});

//.....................heat mob.......................//
// for desktop
new Swiper(".section-beat-the-heat .main", {
  loop: false,
  slidesPerView: "auto",
  simulateTouch: true,
  allowTouchMove: true,
  centeredSlides: false,
  speed: 800,
  grabCursor: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 20,
    },
    370: {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 40,
    },
    420: {
      slidesPerView: 1.1,
      centeredSlides: true,
      spaceBetween: 30,
    },
    558: {
      slidesPerView: 1.4,
      centeredSlides: true,
      spaceBetween: 20,
    },

    640: {
      slidesPerView: 1.8,
      centeredSlides: false,
      spaceBetween: 25,
    },
    732: {
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 25,
    },
    860: {
      slidesPerView: 2.4,
      centeredSlides: false,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3.4,
      centeredSlides: false,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 2.8,
      centeredSlides: false,
      spaceBetween: 50,
    },
  },
});

// for mobile tablet
new Swiper(".heat-mob-swiper", {
  speed: 500,
  loop: false,
  slidesPerView: "auto",
  simulateTouch: true,
  speed: 800,
  grabCursor: true,
  allowTouchMove: true,
  grabCursor: true,
  breakpoints: {
    315: {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 0,
    },
    490: {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 20,
    },
    660: {
      slidesPerView: 1.8,
      centeredSlides: false,
      spaceBetween: -50,
    },
    850: {
      slidesPerView: 2.5,
      centeredSlides: false,
      spaceBetween: 20,
    },
    1060: {
      slidesPerView: 3,
      centeredSlides: false,
      spaceBetween: 25,
    },
    1090: {
      slidesPerView: 3,
      centeredSlides: false,
      spaceBetween: 40,
    },
  },
});

//.................quiz suggestions..................//

const questions = [
  {
    question: "Q. Which best describes your usual coffee?",
    options: [
      { name: "Bright & Fruity (Light roast) ", img: "images/quiz/qs-1-1.png" },
      { name: "Chocolatey & Balanced (Medium)", img: "images/quiz/qs-1-2.png" },
      { name: "Bold & Bold & Smoky (Dark) ", img: "images/quiz/qs-1-3.png" },
    ],
  },
  {
    question: "Q. How do you typically brew?",
    options: [
      { name: "Pour Over", img: "images/quiz/qs-1.webp" },
      { name: "Espresso Machine", img: "images/quiz/qs-2.webp" },
      { name: "Cold Brew", img: "images/quiz/qs-3.webp" },
    ],
  },
  {
    question: "Q. When do you drink coffee most?",
    options: [
      { name: "Morning Ritual", img: "images/quiz/qs-4.webp" },
      { name: "Afternoon Boost", img: "images/quiz/qs-5.webp" },
      { name: "Evening Treat", img: "images/quiz/qs-6.webp" },
    ],
  },
  {
    question: "Q. What’s your snack mood?",
    options: [
      { name: "Sweet Tooth", img: "images/quiz/qs-7.webp" },
      { name: "Savory Crunch", img: "images/quiz/qs-8.webp" },
      { name: "Fresh & Light", img: "images/quiz/qs-9.webp" },
    ],
  },
  {
    question: "Q. What matters most in a pairing?",
    options: [
      { name: "Flavor Enhancement", img: "images/quiz/qs-10.webp" },
      { name: "Texture Contrast", img: "images/quiz/qs-11.webp" },
      { name: "Convenience", img: "images/quiz/qs-12.webp" },
    ],
  },
];

const pairings = [
  {
    coffee: "Ethiopia Sidamo Light Roast",
    item: "Almond Biscotti",
    price: "₹240.00",
  },
  {
    coffee: "Colombian Medium Roast",
    item: "Chocolate Croissant",
    price: "₹343.00",
  },
  { coffee: "Italian Dark Roast", item: "Cheese Crackers", price: "₹412.00" },
];

let currentQuestion = 0;
let userChoices = [];
const questionContainer = document.getElementById("question-container");
const progressBar = document.getElementById("progress");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const resultBtn = document.getElementById("result-btn");
const resultContainer = document.getElementById("result-container");
const resultBox = document.getElementById("result-box");
const tryAgainBtn = document.getElementById("try-again-btn");

function updateProgress() {
  const progressPercent = ((currentQuestion + 1) / questions.length) * 100;
  progressBar.style.width = `${progressPercent}%`;
}

function renderQuestion() {
  const questionData = questions[currentQuestion];
  questionContainer.innerHTML = `<h2 class="quiz-question">${questionData.question}</h2>`;

  // Add a parent div for all options
  let optionsHTML = `<div class="quiz-option-box">`;

  // Generate HTML for each option
  questionData.options.forEach((option, index) => {
    const selected = userChoices[currentQuestion] === index ? "selected" : "";
    optionsHTML += `
      <div class="option ${selected}" data-index="${index}">
        <img src="${option.img}" alt="${option.name}">
        <p>${option.name}</p>
      </div>`;
  });
  // Close the parent div
  optionsHTML += `</div>`;

  // Append the optionsHTML to the question container
  questionContainer.innerHTML += optionsHTML;

  nextBtn.style.display =
    currentQuestion < questions.length - 1 ? "inline-block" : "none";
  resultBtn.style.display =
    currentQuestion === questions.length - 1 ? "inline-block" : "none";
}

resultBtn.addEventListener("click", () => {
  renderResult();
  document.getElementById("quiz-container").style.display = "none"; // Hide the quiz container
  resultContainer.style.display = "block"; // Show the result container
});

function renderResult() {
  const pairing = pairings[Math.floor(Math.random() * pairings.length)];

  // Dynamically determine the image filenames for coffee and snack
  const coffeeImage = pairing.coffee.toLowerCase().replace(/ /g, "-") + ".png";
  const snackImage = pairing.item.toLowerCase().replace(/ /g, "-") + ".png";

  resultContainer.innerHTML = `
    <div id="result-box">
      <h4>Your Perfect Pairing!</h4>
      <div class="quiz-result-pairing">
        <div class="pair-1">
          <img src="images/quiz/${coffeeImage}" alt="Coffee Image" style="max-width: 200px; border-radius: 10px; margin: 10px 0;">
          <h6>Coffee: ${pairing.coffee}</h6>
        </div>
        <div class="pair-2">
          <img src="images/quiz/${snackImage}" alt="Snack Image" style="max-width: 200px; border-radius: 10px; margin: 10px 0;">
          <h6>Snack: ${pairing.item}</h6>
        </div>
      </div>
      <div class="quiz-result-price-box">
        <h4> <span>Price:</span> ${pairing.price}</h4>
        <button class="button-lg">
          <img src="images/quiz/buy-now.svg" alt="svg icon" />
          <span>Buy Both & Save 15%</span>
        </button>
      </div>
      <p class="quiz-result-review">** 92% of users with your preferences love this combo</p>
      <button id="try-again-btn" style="margin-top: 20px; padding: 10px 20px; background: #4caf50; color: white; border: none; border-radius: 5px; cursor: pointer;">
      <img src="images/quiz/try-again.svg" alt="svg icon" />
      Not quite right? Try again</button>
    </div>
  `;

  // Add Try Again functionality
  document.getElementById("try-again-btn").addEventListener("click", () => {
    userChoices = [];
    currentQuestion = 0;
    updateProgress();
    resultContainer.style.display = "none";
    document.getElementById("quiz-container").style.display = "block"; // Show the quiz container again
    renderQuestion();
  });
}

resultBtn.addEventListener("click", renderResult);

questionContainer.addEventListener("click", (e) => {
  if (e.target.closest(".option")) {
    const selectedIndex = parseInt(e.target.closest(".option").dataset.index);
    userChoices[currentQuestion] = selectedIndex;
    renderQuestion();
  }
});

nextBtn.addEventListener("click", () => {
  if (userChoices[currentQuestion] !== undefined) {
    currentQuestion++;
    renderQuestion();
    updateProgress();
  }
  prevBtn.disabled = currentQuestion === 0;
});

prevBtn.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
    updateProgress();
  }
  prevBtn.disabled = currentQuestion === 0;
});

resultBtn.addEventListener("click", () => {
  renderResult();
  resultContainer.style.display = "block";
  quizContainer.style.display = "none";
});

tryAgainBtn.addEventListener("click", () => {
  userChoices = [];
  currentQuestion = 0;
  updateProgress();
  resultContainer.style.display = "none";
  quizContainer.style.display = "block";
  renderQuestion();
});

document.addEventListener("DOMContentLoaded", () => {
  renderQuestion();
  updateProgress();
});

//.................recipe menu toggle...................//

const recipeMenuOpenBox = document.querySelector(
  ".section-recipe .recipe-section > .menu .show-option-box"
);
const recipeMenuOpen = document.querySelector(".section-recipe .ri-menu-line");
const recipeMenuClose = document.querySelector(
  ".section-recipe .ri-close-large-fill"
);

recipeMenuOpen.addEventListener("click", function () {
  this.style.opacity = "0";
  this.style.visibility = "hidden";
  this.style.left = "-10px";
  recipeMenuClose.style.opacity = "1";
  recipeMenuClose.style.visibility = "visible";
  recipeMenuClose.style.left = "-39px";

  recipeMenuOpenBox.style.opacity = "1";
  recipeMenuOpenBox.style.visibility = "visible";
  recipeMenuOpenBox.style.height = "362px";
});
recipeMenuClose.addEventListener("click", function () {
  this.style.opacity = "0";
  this.style.visibility = "hidden";
  this.style.left = "-20px";
  recipeMenuOpen.style.opacity = "1";
  recipeMenuOpen.style.visibility = "visible";
  recipeMenuOpen.style.left = "0";

  recipeMenuOpenBox.style.opacity = "0";
  recipeMenuOpenBox.style.visibility = "hidden";
  recipeMenuOpenBox.style.height = "24px";
});

//................story swiper..........//
new Swiper(".swiper-story", {
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,
  spaceBetween: -60,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: ["-90%", 0, -100],
      scale: 0.9,
    },
    next: {
      translate: ["90%", 0, -100],
      scale: 0.9,
    },
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    400: {
      slidesPerView: 1.2,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 1.4,
      spaceBetween: -40,
    },
    1024: {
      slidesPerView: 1.6,
      spaceBetween: -60,
    },
    1200: {
      slidesPerView: 1.8,
      spaceBetween: -60,
    },
    1536: {
      slidesPerView: 2,
      spaceBetween: -60,
    },
  },
});

//............counter..................//

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counterSVGNumber");
  const speed = 40;

  const animateNumber = (counter) => {
    const target = +counter.getAttribute("data-count");
    const suffix = counter.getAttribute("data-suffix") || "";
    let current = 0;
    const increment = Math.ceil(target / 20);

    const updateCount = () => {
      current += increment;
      if (current >= target) {
        counter.textContent = target;
        if (suffix) {
          setTimeout(() => {
            counter.textContent = target + suffix;
          }, 200);
        }
      } else {
        counter.textContent = current;
        setTimeout(updateCount, 50);
      }
    };

    updateCount();
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target
            .querySelectorAll(".counterSVGNumber")
            .forEach((counter) => {
              animateNumber(counter);
            });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  // observe each `.counter` box instead of `.section-story`
  document.querySelectorAll(".counter").forEach((counterBox) => {
    observer.observe(counterBox);
  });
});

//...............join community email part back video........//

const section = document.querySelector(".profile-email");
const video = section.querySelector(".email-back-video");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        video.loop = false;
        video.currentTime = 0;
        video.play();
        // show email box after some sec
        const emailBox = document.querySelector(".profile-email .email-box");
        setTimeout(() => {
          emailBox.style.opacity = "1";
          emailBox.style.scale = "1";
        }, 3800);

        observer.unobserve(section);
      }
    });
  },
  {
    threshold: 0.7,
  }
);

observer.observe(section);

video.addEventListener("ended", () => {
  video.pause();
  console.log("Video finished");
});

//.................top photo winners................//

new Swiper(".top-photos", {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: false,
  simulateTouch: true,
  allowTouchMove: true,
  speed: 500,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      centeredSlides: true,
      autoplay: true,
    },
    420: {
      slidesPerView: 2,
      centeredSlides: true,
      autoplay: true,
    },
    640: {
      slidesPerView: 2.5,
      centeredSlides: false,
    },
    1024: {
      slidesPerView: 3,
      centeredSlides: false,
    },
    1280: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  },
});

//.......................loader................//
const loaderBody = document.querySelector("body");
const sectionHero = document.querySelector(".section-hero");

document.addEventListener("DOMContentLoaded", () => {
  const loaderBox = document.querySelector(".loader-box");

  loaderBody.classList.add("no-scroll");
  sectionHero.style.top = "100%";

  setTimeout(() => {
    loaderBox.classList.add("hide-loader");
    loaderBody.classList.remove("no-scroll");
    sectionHero.style.top = "0%";
  }, 3200);
  setTimeout(() => {
    loaderBox.style.display = "none";
  }, 4500);
});

//.............lenis with scroll reveal................//
const lenis = new Lenis({
  duration: 1,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
  smoothTouch: true,
  direction: "vertical",
  wheelMultiplier: 1.2,
});

const sr = ScrollReveal();

sr.reveal(".text-section>h1", {
  distance: "50%",
  viewFactor: 0.2,
  useDelay: "always",
  origin: "top",
  duration: 1000,
  delay: 100,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
});
sr.reveal(".text-section>p", {
  distance: "50%",
  viewFactor: 0.2,
  useDelay: "always",
  origin: "top",
  duration: 1000,
  delay: 200,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
});
sr.reveal(".text-section>img", {
  distance: "50%",
  viewFactor: 0.2,
  useDelay: "always",
  origin: "top",
  duration: 1000,
  delay: 300,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
});
// subscription-box
sr.reveal(".subs-1", {
  distance: "50%",
  viewFactor: 0.2,
  useDelay: "always",
  origin: "left",
  duration: 1000,
  delay: 300,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
});

sr.reveal(".subs-3", {
  distance: "50%",
  viewFactor: 0.2,
  useDelay: "always",
  origin: "right",
  duration: 1000,
  delay: 300,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
});
// beat the heat
sr.reveal(".main", {
  distance: "50%",
  viewFactor: 0.2,
  useDelay: "always",
  origin: "right",
  duration: 1000,
  delay: 100,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
});
// quiz box
sr.reveal(".quiz-box", {
  distance: "50%",
  viewFactor: 0.2,
  useDelay: "always",
  origin: "bottom",
  duration: 1000,
  delay: 100,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
});
// recipe-accordion
sr.reveal(".recipe-options", {
  distance: "50%",
  viewFactor: 0.2,
  useDelay: "always",
  origin: "left",
  duration: 1000,
  delay: 100,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
});
sr.reveal(".recipe-video", {
  distance: "50%",
  viewFactor: 0.2,
  useDelay: "always",
  origin: "bottom",
  duration: 1000,
  delay: 100,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
});
sr.reveal(".ai-1", {
  distance: "50%",
  viewFactor: 0.2,
  useDelay: "always",
  origin: "right",
  duration: 1000,
  delay: 100,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
});

sr.reveal(".ai-2", {
  distance: "50%",
  viewFactor: 0.2,
  useDelay: "always",
  origin: "right",
  duration: 1000,
  delay: 200,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
});

sr.reveal(".ai-3", {
  distance: "50%",
  viewFactor: 0.2,
  useDelay: "always",
  origin: "right",
  duration: 1000,
  delay: 300,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
});
// challenge
sr.reveal(".ch-left-animation", {
  distance: "50%",
  viewFactor: 0.2,
  useDelay: "always",
  duration: 1000,
  delay: 300,
  rotate: { x: 0, y: 0, z: 10 },
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
});
sr.reveal(".ch-right-animation", {
  distance: "50%",
  viewFactor: 0.2,
  useDelay: "always",
  duration: 1000,
  delay: 300,
  rotate: { x: 0, y: 0, z: -10 },
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
});

// counter
// sr.reveal(".counter-1", {
//   distance: "50%",
//   viewFactor: 0.2,
//   useDelay: "always",
//   origin: "left",
//   duration: 1000,
//   delay: 600,
//   easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
//   opacity: 0,
//   mobile: true,
// });

// sr.reveal(".counter-2", {
//   distance: "50%",
//   viewFactor: 0.2,
//   useDelay: "always",
//   origin: "left",
//   duration: 1000,
//   delay: 300,
//   easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
//   opacity: 0,
//   mobile: true,
// });
// sr.reveal(".counter-3", {
//   distance: "50%",
//   viewFactor: 0.2,
//   useDelay: "always",
//   origin: "right",
//   duration: 1000,
//   delay: 300,
//   easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
//   opacity: 0,
//   mobile: true,
// });
// sr.reveal(".counter-4", {
//   distance: "50%",
//   viewFactor: 0.2,
//   useDelay: "always",
//   origin: "right",
//   duration: 1000,
//   delay: 600,
//   easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
//   opacity: 0,
//   mobile: true,
// });

// join-community

sr.reveal(".your-img", {
  distance: "50%",
  viewFactor: 0.2,
  useDelay: "always",
  origin: "bottom",
  duration: 1000,
  delay: 400,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
});
sr.reveal(".qr .item-box", {
  distance: "50%",
  viewFactor: 0.2,
  useDelay: "always",
  origin: "bottom",
  duration: 1000,
  delay: 400,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
});
// certificate
sr.reveal(".certificate>img:nth-child(1)", {
  distance: "50%",
  viewFactor: 0.2,
  useDelay: "always",
  origin: "right",
  duration: 1000,
  delay: 400,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
});
sr.reveal(".certificate>img:nth-child(2)", {
  distance: "50%",
  viewFactor: 0.2,
  useDelay: "always",
  origin: "right",
  duration: 1000,
  delay: 600,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
});
sr.reveal(".certificate>img:nth-child(3)", {
  distance: "50%",
  viewFactor: 0.2,
  useDelay: "always",
  origin: "right",
  duration: 1000,
  delay: 800,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
});
// footer
sr.reveal(".footer-beans-texture", {
  distance: "50%",
  viewFactor: 0.2,
  useDelay: "always",
  origin: "top",
  duration: 1000,
  delay: 800,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
});
sr.reveal(".footer-options > .box-1", {
  distance: "50%",
  viewFactor: 0.2,
  useDelay: "always",
  origin: "left",
  duration: 1000,
  delay: 400,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
});
sr.reveal(".footer-options > .box-2", {
  distance: "50%",
  viewFactor: 0.2,
  useDelay: "always",
  origin: "left",
  duration: 1000,
  delay: 600,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
});
sr.reveal(".footer-options > .box-3", {
  distance: "50%",
  viewFactor: 0.2,
  useDelay: "always",
  origin: "left",
  duration: 1000,
  delay: 500,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
});
sr.reveal(".footer-options > .box-4", {
  distance: "50%",
  viewFactor: 0.2,
  useDelay: "always",
  origin: "right",
  duration: 1000,
  delay: 400,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
});
sr.reveal(".footer-options > .box-5", {
  distance: "50%",
  viewFactor: 0.2,
  useDelay: "always",
  origin: "right",
  duration: 1000,
  delay: 600,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
});
sr.reveal(".footer-top > .btm-box", {
  distance: "50%",
  viewFactor: 0.2,
  useDelay: "always",
  origin: "bottom",
  duration: 1000,
  delay: 600,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// .............scroll to top.............//

const topBtn = document.querySelector(".stt-box");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.opacity = "1";
    topBtn.style.visibility = "visible";
    topBtn.style.bottom = "50px";
  } else {
    topBtn.style.opacity = "0";
    topBtn.style.visibility = "hidden";
    topBtn.style.bottom = "0";
  }
});
topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//................modal................//

const modalMain = document.querySelector(".modal-main");
const modalClose = document.querySelector(".modal-main .close-btn");
const modalBox = document.querySelector(".modal-main .modal-box");

setTimeout(() => {
  modalMain.style.opacity = 1;
  modalMain.style.visibility = "visible";
  modalBox.classList.add("modal-box-open");
}, 25000);

modalMain.addEventListener("click", function () {
  modalBox.classList.remove("modal-box-open");
  this.style.opacity = 0;
  this.style.visibility = "hidden";
});
modalClose.addEventListener("click", function () {
  modalBox.classList.remove("modal-box-open");
});

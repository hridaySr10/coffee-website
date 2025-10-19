$(document).ready(function () {
  let initialScroll = 0;

  $(window).on("resize scroll", function () {
    const finalScroll = $(this).scrollTop();
    const isScrollingDown = finalScroll > initialScroll;
    const isAtTop = finalScroll === 0;
    const windowWidth = $(window).width();

    if (windowWidth > 961) {
      if (isScrollingDown) {
        $("header").css("top", "-40px");
        $(".nav-top, .nav-main, .nav-btm").css("background-color", "#030505");
        $(".nav-btm").css("top", "-24px");
      } else if (isAtTop) {
        $("header").css("top", "0px");
        $(".nav-main").css("background-color", "#030505");
        $(".nav-top, .nav-btm").css("background-color", "#030505");
        $(".nav-btm").css("top", "0px");
      } else {
        $("header").css("top", "0px");
      }
    } else {
      if (isScrollingDown) {
        $("header").css("top", "-30px");
        $(".nav-top, .nav-main").css("background-color", "#030505");
      } else if (isAtTop) {
        $("header").css("top", "0px");
        $(".nav-top, .nav-main").css("background-color", "#030505");
      } else {
        $("header").css("top", "0px");
      }
    }

    initialScroll = finalScroll;
  });
});

//..................filter active class add...........//

const filterOptions = document.querySelectorAll(".filter-btn-span");
const productItems = document.querySelectorAll(
  ".product-box-row .product-item-page"
);

function showPage(id) {
  productItems.forEach((productItem) => productItem.classList.remove("active"));

  filterOptions.forEach((option) => option.classList.remove("active"));

  // product-item-page active
  document.getElementById(id).classList.add("active");

  // span active
  document
    .querySelector(`.filter-btn-span[data-target="${id}"]`)
    .classList.add("active");
}

filterOptions.forEach((span) => {
  span.addEventListener("click", () => {
    showPage(span.dataset.target);
  });
});

// show first page on load
showPage(filterOptions[0].dataset.target);

//for mobile active class add filter

const filterOptionsMob = document.querySelectorAll(
  ".category-filter-box .filter-btn-span"
);

filterOptionsMob.forEach((option) => {
  option.addEventListener("click", function () {
    filterOptionsMob.forEach((span) => {
      span.classList.remove("mobActive");
    });

    option.classList.add("mobActive");
  });
});

//..............pagination click and go to top.......///
const paginationGoTop = document.querySelectorAll(
  ".pagination-row .nav-pills .nav-link"
);

paginationGoTop.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("active")) {
      window.scrollTo({
        top: 100,
        behavior: "smooth",
      });
    }
  });
});

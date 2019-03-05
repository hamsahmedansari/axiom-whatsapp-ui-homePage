document.addEventListener("scroll", () => {
  if (
    window.pageYOffset >
    document.getElementsByClassName("second-row")[0].offsetHeight
  ) {
    document.getElementsByClassName("header")[0].classList.add("fixed");
    document.getElementsByTagName("section")[0].classList.add("section-bottom");
  } else {
    document.getElementsByClassName("header")[0].classList.remove("fixed");
    document
      .getElementsByTagName("section")[0]
      .classList.remove("section-bottom");
  }
});

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

function statusClick() {
  document.getElementsByClassName("chats-tab")[0].classList.remove("active");
  document.getElementsByClassName("calls-tab")[0].classList.remove("active");
  document.getElementsByClassName("status-tab")[0].classList.add("active");

  //

  document.getElementsByClassName("chats-page")[0].classList.add("d-none");
  document.getElementsByClassName("calls-page")[0].classList.add("d-none");
  document.getElementsByClassName("story-page")[0].classList.remove("d-none");
  document.getElementsByClassName("story-page")[0].classList.add("opacity-0");
  setTimeout(() => {
    document
      .getElementsByClassName("story-page")[0]
      .classList.remove("opacity-0");
    document.getElementsByClassName("story-page")[0].classList.add("opacity-1");
  }, 300);
}

function chatsClick() {
  document.getElementsByClassName("status-tab")[0].classList.remove("active");
  document.getElementsByClassName("calls-tab")[0].classList.remove("active");
  document.getElementsByClassName("chats-tab")[0].classList.add("active");

  //

  document.getElementsByClassName("story-page")[0].classList.add("d-none");
  document.getElementsByClassName("calls-page")[0].classList.add("d-none");
  document.getElementsByClassName("chats-page")[0].classList.remove("d-none");
  document.getElementsByClassName("chats-page")[0].classList.add("opacity-0");
  setTimeout(() => {
    document
      .getElementsByClassName("chats-page")[0]
      .classList.remove("opacity-0");
    document.getElementsByClassName("chats-page")[0].classList.add("opacity-1");
  }, 300);
}

function callsClick() {
  document.getElementsByClassName("status-tab")[0].classList.remove("active");
  document.getElementsByClassName("chats-tab")[0].classList.remove("active");
  document.getElementsByClassName("calls-tab")[0].classList.add("active");

  //

  document.getElementsByClassName("story-page")[0].classList.add("d-none");
  document.getElementsByClassName("chats-page")[0].classList.add("d-none");
  document.getElementsByClassName("calls-page")[0].classList.remove("d-none");
  document.getElementsByClassName("calls-page")[0].classList.add("opacity-0");
  setTimeout(() => {
    document
      .getElementsByClassName("calls-page")[0]
      .classList.remove("opacity-0");
    document.getElementsByClassName("calls-page")[0].classList.add("opacity-1");
  }, 300);
}

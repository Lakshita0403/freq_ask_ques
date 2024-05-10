const accordians = document.querySelectorAll(".accordian");

accordians.forEach((accord) => {
  const icon = accord.querySelector(".icon");
  const answer = accord.querySelector(".answer");

  accord.addEventListener("click", () => {
    if (icon.classList.contains('active')) {
      icon.classList.remove('active');
      answer.style.maxHeight = null;
    } else {
      icon.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

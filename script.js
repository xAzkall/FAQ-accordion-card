const arrow = document.querySelectorAll(".arrow");

arrow.forEach((item) => {
  item.addEventListener("click", () => {
    const reset = Array.from(arrow).filter((element) => element !== item);
    reset.forEach((element) => {
      const headingElement = element.parentNode.children[0];
      const paragraphElement = element.parentNode.children[2];

      element.classList.remove("arrow-rotate");
      headingElement.classList.remove("bold-text");
      paragraphElement.classList.add("hidden");
      paragraphElement.classList.remove("open");
    });

    const headingElement = item.parentNode.children[0];
    const paragraphElement = item.parentNode.children[2];

    item.classList.toggle("arrow-rotate");
    headingElement.classList.toggle("bold-text");
    paragraphElement.classList.toggle("hidden");
    paragraphElement.classList.toggle("open");
  });
});

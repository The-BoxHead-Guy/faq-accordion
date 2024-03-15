document.addEventListener("DOMContentLoaded", () => {
  // Variables
  const accordeonItems = document.querySelectorAll(".accordeon");

  accordeonItems.forEach((item) => {
    const header = item.querySelector(".accordeon__header");

    header.addEventListener("click", () => {
      const panel = item.querySelector(".accordeon__panel");
      const accordeonIcon = item.querySelector(".accordeon__icon");
      const title = item.getElementsByTagName("h3");

      showAccordeon(panel);
      changeIcon(accordeonIcon);
      changeColor(title);
    });

    // todo: Navigate the questions and hide/show answers using keyboard navigation alone
  });

  // Functions
  function showAccordeon(arg) {
    arg.style.maxHeight = arg.style.maxHeight ? null : arg.scrollHeight + "px";

    arg.style.paddingBlockStart = arg.style.paddingBlockStart ? null : "1rem";
  }

  // Change icon after click
  const changeIcon = (icon) => {
    const iconSrc = icon.getAttribute("src");

    iconSrc === "/assets/images/icon-plus.svg"
      ? icon.setAttribute("src", "/assets/images/icon-minus.svg")
      : icon.setAttribute("src", "/assets/images/icon-plus.svg");
  };

  // Change color after click
  const changeColor = (element) => {
    let color = "hsl(280, 86%, 40%)";
    let titleStyle = element.item(0).style;

    if (titleStyle.color === "") {
      titleStyle.color = color;
    } else {
      titleStyle.color = "";
    }
  };
});

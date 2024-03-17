document.addEventListener("DOMContentLoaded", () => {
  // Variables
  const accordeonItems = document.querySelectorAll(".accordeon");
  console.log(accordeonItems);

  // Keyboard navigation
  const handleNavigationFocus = (event) => {
    // Creating an array of all possible selectable items
    const focusableItems = [...accordeonItems];
    const key = event.key;

    // Getting the index of the currently focused item
    const index = focusableItems.indexOf(document.activeElement);

    // creates the index of the next element
    let nextIndex = 0;

    // Determining index change
    if (key === "ArrowDown") {
      event.preventDefault();
      nextIndex = index + 1 < focusableItems.length ? index + 1 : 0;
      accordeonItems[nextIndex].focus();
    } else if (key === "ArrowUp") {
      event.preventDefault();
      nextIndex = index > 0 ? index - 1 : 0;
      accordeonItems[nextIndex].focus();
    }
  };

  document.addEventListener("keydown", handleNavigationFocus);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      triggerChange(event.target);
    }

    console.log(event.target);
  });

  accordeonItems.forEach((item) => {
    const header = item.querySelector(".accordeon__header");

    header.addEventListener("click", () => {
      triggerChange(item);
    });
  });

  // Functions
  const triggerChange = (item) => {
    const panel = item.querySelector(".accordeon__panel");
    const icon = item.querySelector(".accordeon__icon");
    const title = item.getElementsByTagName("h3");

    showAccordeon(panel);
    changeIcon(icon);
    changeColor(title);
  };

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

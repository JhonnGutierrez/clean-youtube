export const cleanVisuals = () => {
  const contentContainer = document.getElementById("contentContainer");

  if (contentContainer) {
    contentContainer.removeAttribute("opened");
    contentContainer.removeAttribute("swipe-open");
    contentContainer.removeAttribute("persistent");
  }

  const guide = document.getElementById("guide");

  if (guide) {
    guide.removeAttribute("opened");
    guide.removeAttribute("swipe-open");
    guide.removeAttribute("persistent");
  }

  const newTitle = document.title.split(") ")[1];

  if (newTitle) {
    document.title = newTitle;
  }

  const isHome = window.location.href === "https://www.youtube.com/";

  if (isHome) {
    const $$headers = document.querySelectorAll("#header");

    $$headers.forEach(($h) => {
      $h.style = "display: none;";
    });
  }
};

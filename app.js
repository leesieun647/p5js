function scaleIframes() {
  const previews = document.querySelectorAll(".preview");

  previews.forEach((preview) => {
    const iframe = preview.querySelector("iframe");

    const baseWidth = 600;
    const baseHeight = 400;

    const scale = Math.min(
      preview.clientWidth / baseWidth,
      preview.clientHeight / baseHeight
    );

    iframe.style.transform = `translate(-50%, -50%) scale(${scale})`;
  });
}

window.addEventListener("load", scaleIframes);
window.addEventListener("resize", scaleIframes);

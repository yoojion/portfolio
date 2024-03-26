/* skill-bar */

const circles = document.querySelectorAll(".circular-pbar");

circles.forEach((el) => {
  const counter = el.querySelector(".circular-pbar-counter");
  const tg = counter.textContent + "%";
  const tm = gsap.timeline({
    defaults: { duration: 3, ease: "expo.out" },
    scrollTrigger: {
      trigger: el,
      toggleActions: "play pause resume reset",
    },
  });
  tm.from(counter, {
    textContent: 0,
    modifiers: {
      textContent: (textContent) => {
        return textContent.toFixed();
      },
    },
  });

  tm.to(
    el,
    {
      "--p": tg,
    },
    0
  );
});

/* design */
const pics = $(".pic");
console.log(pics);
const lightbox = $("#lightbox");
const lightboxImage = $("#lightboxImage");
pics.on("click", function (e) {
  e.preventDefault();
  const bigLocation = $(this).attr("data-src");
  $("html").addClass("all_scroll_fixed");
  lightbox.css("display", "block");
  lightboxImage.load(bigLocation);
});
lightbox.on("click", function () {
  lightbox.css("display", "none");
  $("html").removeClass("all_scroll_fixed");
});


/* mouse */
const el = document.querySelector(".followAnimation");
let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;
document.addEventListener("mousemove", (e) => {
  console.log(mouseX, mouseY);
  mouseX = e.clientX;
  mouseY = e.clientY;
});
tick();
function tick() {
  requestAnimationFrame(tick);
  currentX += (mouseX - currentX) * 0.1;
  currentY += (mouseY - currentY) * 0.1;
  el.style.transform = `translate(${currentX}px,${currentY}px)`;
}

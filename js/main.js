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

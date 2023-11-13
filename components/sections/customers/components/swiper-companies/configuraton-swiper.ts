
export const configurationSwiper = {
  slidesPerView: "auto" as number | "auto" | undefined,
  breakpoints: {
    1150: { slidesPerView: 6 },
    599: { slidesPerView: 4 },
    0: { slidesPerView: 3 },
  },
  spaceBetween: 30,
  autoplay: { delay: 3500, disableOnInteraction: true }
};

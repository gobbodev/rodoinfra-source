
export const configurationSwiper = {
  slidesPerView: "auto" as number | "auto" | undefined,
  breakpoints: {
    1100: { slidesPerView: 3, spaceBetween: 20 },
    680: { slidesPerView: 2, spaceBetween: 15 },
  },
  spaceBetween: 30,
  autoplay: { delay: 3500, disableOnInteraction: true },
  navigation: {
    nextEl: `.r-btn`,
    prevEl: `.l-btn`,
  }
};

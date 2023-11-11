import { renderToString } from "react-dom/server";

import { Button } from "codiedigital/dist/cjs/components/data";
import { Swiper, SwiperSlide } from "swiper/react";

import { IReview } from "src/interfaces/generics";

import { configurationSwiper } from "./configuraton-swiper";
import { CardReview } from "./item/card-review";
import { LArrowSVG, RArrowSVG } from "public/svg/projects-&-customers/";

export function SwiperReviews({ reviews }: { reviews: IReview[] }) {
  const lBtnIconString = renderToString(<LArrowSVG />);
  const rBtnIconString = renderToString(<RArrowSVG />);

  return (
    <>
      {reviews && reviews.length > 0 && (
        <div className="box-swiper-2">
          <Button
            className="button-nav l-btn"
            svg={{ icon: lBtnIconString, size: 10 }}
            type="button"
            text=""
          />
          <Button
            className="button-nav r-btn"
            svg={{ icon: rBtnIconString, size: 10 }}
            type="button"
            text=""
          />
          <Swiper {...configurationSwiper}>
            {reviews.map((item) => (
              <SwiperSlide key={item.id}>
                <CardReview item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
}

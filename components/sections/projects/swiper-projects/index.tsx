import { renderToString } from "react-dom/server";

import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "codiedigital/dist/cjs/components/data";

import { IProjectsObject } from "src/interfaces/generics";

import { configurationSwiper } from "./configuraton-swiper";
import { CardProject } from "./item/card-project";
import { LArrowSVG, RArrowSVG } from "public/svg/projects-&-customers";

export function SwipeProjects({ data }: { data: IProjectsObject[] }) {
  const lBtnIconString = renderToString(<LArrowSVG />);
  const rBtnIconString = renderToString(<RArrowSVG />);
  return (
    <>
      {data && data.length > 0 && (
        <>
          <Swiper {...configurationSwiper}>
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <CardProject item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="btn-responsive-box">
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
          </div>
        </>
      )}
    </>
  );
}

import { renderToString } from "react-dom/server";

import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "codiedigital/dist/cjs/components/data";

import { IProjects } from "src/interfaces/generics";

import { configurationSwiper } from "./configuraton-swiper";
import { CardProject } from "./item/card-project";
import { LArrowSVG, RArrowSVG } from "public/svg/projects-&-customers";

export function SwiperProjects({ data }: { data: IProjects[] }) {
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
                {item.description && (
                  <div
                    className="phrase font-16"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                )}
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

import { Swiper, SwiperSlide } from "swiper/react";

import { ICompany } from "src/interfaces/generics";

import { configurationSwiper } from "./configuraton-swiper";
import { CardCompany } from "./item/card-company";

export function SwiperCompanies({ companies }: { companies: ICompany[] }) {
  return (
    <>
      {companies && companies.length > 0 && (
        <div className="box-swiper-1">
          <Swiper {...configurationSwiper}>
            {companies.map((item) => (
              <SwiperSlide key={item.id}>
                <CardCompany item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
}

import { Container, Error } from "codiedigital/dist/cjs/components/data";

import { IServices } from "src/interfaces/generics";

import * as S from "./styles";
import { ServiceItem } from "./service-item";
import { useEffect, useState } from "react";

export function Services({ data }: { data: IServices[] }) {
  const firstSection = data.slice(0, 4);
  const secondSection = data.slice(4, 8);

  const list = [firstSection, secondSection];

  return (
    <Error name="services">
      <S.Services id="services">
        
          {list.map((services, index) => {
            return <ServiceItem key={index} services={services} />;
          })}
        <h2 style={{ display: "none" }}className="font-52 uppercase">catálogo</h2>
      </S.Services>
    </Error>
  );
}

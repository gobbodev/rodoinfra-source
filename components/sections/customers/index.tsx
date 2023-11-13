import { Container, Error } from "codiedigital/dist/cjs/components/data";

import { ICustomers } from "src/interfaces/generics";


import { SwiperCompanies } from "./components/swiper-companies";
import { SwiperReviews } from "./components";

import * as S from "./styles";

export function Customers( {data} : {data : ICustomers}) {
  return (
    <Error name="customers">
      <S.Customers id="customers" className="section-pad">
        <Container>
          <h2 className="font-52 uppercase"> nossos clientes</h2>
          <SwiperCompanies companies={data.companies}/>
          <SwiperReviews reviews={data.reviews}/>
        </Container>
      </S.Customers>
    </Error>
  );
}

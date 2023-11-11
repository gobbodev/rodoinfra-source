import { Container, Error } from "codiedigital/dist/cjs/components/data";

import { ICustomers } from "src/interfaces/generics";

import * as S from "./styles";
import { SwiperCompanies } from "./components/swiper-companies";
import { SwiperReviews } from "./components";


export function Customers( {data} : {data : ICustomers}) {
  return (
    <Error name="customers">
      <S.Customers id="customers">
        <Container>
          <h2 className="font-52 uppercase"> nossos clientes</h2>
          <SwiperCompanies companies={data.companies}/>
          <SwiperReviews reviews={data.reviews}/>
        </Container>
      </S.Customers>
    </Error>
  );
}

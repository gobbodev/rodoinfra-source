import { Container, Error } from "codiedigital/dist/cjs/components/data";

import { IDelivery } from "src/interfaces/generics";

import * as S from "./styles";
import { Items } from "./items";

export function Delivery({ data }: { data: IDelivery[] }) {
  return (
    <Error name="delivery">
      <S.Delivery id="delivery" className="section-pad">
        <Container>
          {/* precisa pq a width no design é um pouco menor do q o padrao*/}
          <div className="sub-container">
            <Items data={data} />
          </div>
        </Container>
      </S.Delivery>
    </Error>
  );
}

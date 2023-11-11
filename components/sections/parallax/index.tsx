import { renderToString } from "react-dom/server";

import { Container, Error } from "codiedigital/dist/cjs/components/data";
import { IconWhats } from "codiedigital/dist/cjs/components/icons";
import { useSocialLinks } from "codiedigital/dist/cjs/hooks/use-social-links";

import * as S from "./styles";
import { Button } from "components/data/button";

export function Parallax() {
  const { whatsapp } = useSocialLinks();

  const whatsappIconString = renderToString(IconWhats({ fill: "#fff" }));

  return (
    <Error name="parallax">
      <S.Parallax>
      <div className="gradient" />
        <Container>
          <h2 className="font-52">
            Entrega com Excelência, <br /> Entrega GarantidA
          </h2>
          <p className="font-16">
            Nos dedicamos a garantir que cada projeto seja concluído com os mais
            altos padrões de qualidade, dentro do prazo e do orçamento acordados{" "}
          </p>

          <Button
            className="font-18-light"
            target="_blank"
            href={whatsapp.url || "/"}
            text="Solicite um orçamento"
            svg={{ icon: whatsappIconString, size: 1 }}
          />
        </Container>
      </S.Parallax>
    </Error>
  );
}

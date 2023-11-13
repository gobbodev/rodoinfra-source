import { renderToString } from "react-dom/server";

import {
  Container,
  Error
} from "codiedigital/dist/cjs/components/data";
import { useSocialLinks } from "codiedigital/dist/cjs/hooks/use-social-links";
import { IconWhats, ArrowDownIcon } from "codiedigital/dist/cjs/components/icons";

import { Button } from "components/data";
import { navigationLinks } from "components/layout/data";

import * as S from "./styles";

export function Banner() {
  const { whatsapp } = useSocialLinks();

  const whatsappIconString = renderToString(IconWhats({ fill: "#fff" }));
  const arrowIconString = renderToString(ArrowDownIcon({ fill: "#fff" }));

  return (
    <Error name="banner">
      <S.Banner id="banner">
        <div className="gradient" />

        <div className="banner-background">
          <video autoPlay loop muted>
            <source src="/videos/banner.mp4" type="video/mp4" />
            Seu navegador não suporta a reprodução de vídeos.
          </video>
        </div>

        <Container>
          <div className="content">
            <h1 className="font-64-bold">
              A SOLUÇÃO PARA SUA <br />
              CONSTRUÇÃO
            </h1>

            <p className="font-20-light">
              A RodoInfra executa obras dos mais variados portes, com muito
              profissionalismo, responsabilidade e agilidade.
            </p>

            <div className="budget">
              <Button
                className="font-18-light"
                target="_blank"
                href={whatsapp.url || "/"}
                text="Solicite um orçamento"
                svg={{ icon: whatsappIconString, size: 1 }}
              />
            </div>
          </div>
        </Container>

        <div className="know-more">
          <Button
            className="font-16-light"
            href="#oursServices"
            text="Saiba mais"
            svg={{ icon: arrowIconString, size: 1 }}
          />
        </div>
      </S.Banner>
    </Error>
  );
}

import { Container, Error } from "codiedigital/dist/cjs/components/data/";

import { FormContact, SocialContact } from "./components/";

import * as S from "./styles";

export function Contact() {
  return (
    <Error name="contact">
      <S.Contact id="contact" className="section-pad">
        <Container>
          <div className="content-contact">
            <div className="box-titulo">
              <h2 className="font-52 uppercase title">entre em contato</h2>
              <p className="font-16">
                Preencha o formulário{" "}
                <span>ao lado</span> e entraremos em
                contato com você ou entre em contato conosco pelas informações
                abaixo.
              </p>
            </div>

            <div className="box-info font-18">
              <div className="social-info">
                <SocialContact />
              </div>
            </div>
          </div>

          <div className="content-form">
            <FormContact />
          </div>
        </Container>
      </S.Contact>
    </Error>
  );
}

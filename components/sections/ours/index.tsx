import { useEffect, useState } from "react";

import {
  Container,
  NextImage,
  Error,
} from "codiedigital/dist/cjs/components/data";

import { IOurs } from "src/interfaces/generics";

import { mockItems } from "./items/mock-items";

import * as S from "./styles";
import { Items } from "./items";

export function Ours({ data }: { data: IOurs }) {
  const [sectionPad, setSectionPad] = useState(false);

  useEffect(() => {
    const handleSet = () => {
      {
        window.innerWidth < 1024 ? setSectionPad(true) : setSectionPad(false);
      }
    };
    window.addEventListener("resize", handleSet);

    return () => {
      window.removeEventListener("resize", handleSet);
    };
  }, []);

  return (
    <Error name="ours">
      <S.Ours id="oursServices" className={ sectionPad ? "section-pad" : ""}>
        <div className="out-container">
          <div className="box-image">
            <NextImage src="/images/ours/ours-truck.png" />
          </div>
        </div>

        <Container>
          <div className="content">
            <div className={`info-top ${sectionPad ? "margin-b-30" : ""}`}>
              <h2 className="title-ours font-52">nossos serviços</h2>
              {data.description && (
                <div
                  className="font-16"
                  dangerouslySetInnerHTML={{ __html: data.description }}
                ></div>
              )}
            </div>

            <div className="info-bot">
              <Items />
            </div>
          </div>
        </Container>
      </S.Ours>
    </Error>
  );
}

import {
  Container,
  Error,
  NextImage,
} from "codiedigital/dist/cjs/components/data";

import { IAbout } from "src/interfaces/generics";

import * as S from "./styles";
import { useEffect, useState } from "react";

export function About({ data }: { data: IAbout }) {
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
    <Error name="about">
      <S.About id="about" className={ sectionPad ? "section-pad" : ""}>
        <Container>
          <div className="box-image">
            {data.image && <NextImage baseImage src={data.image} />}
          </div>

          <div className="content-text">
            <h2 className="font-52 title">sobre nós</h2>
            {data.description && (
              <div
                className="font-16"
                dangerouslySetInnerHTML={{ __html: data.description }}
              ></div>
            )}
          </div>
        </Container>
      </S.About>
    </Error>
  );
}

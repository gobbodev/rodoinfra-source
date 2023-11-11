import { Container, Error } from "codiedigital/dist/cjs/components/data";

import { IProjects } from "src/interfaces/generics";

import * as S from "./styles";
import { SwipeProjects } from "./swiper-projects";

export function Projects({ data }: { data: IProjects }) {
  return (
    <Error name="projects">
      <S.Projects id="projects" className="section-pad">
        <Container>
          <h2 className="font-52 title">projetos que realizamos</h2>

          <div className="box-swiper">
            <SwipeProjects data={data.swiperObjects} />
          </div>

          {data.description && (
            <div
              className="phrase font-16"
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
          )}
        </Container>
      </S.Projects>
    </Error>
  );
}

import { Container, Error } from "codiedigital/dist/cjs/components/data";

import { IProjects } from "src/interfaces/generics";

import { SwiperProjects } from "./swiper-projects";

import * as S from "./styles";


export function Projects({ data }: { data: IProjects[] }) {
  return (
    <Error name="projects">
      <S.Projects id="projects" className="section-pad">
        <Container>
          <h2 className="font-52 title">projetos que realizamos</h2>

          <div className="box-swiper">
            <SwiperProjects data={data} />
          </div>

        </Container>
      </S.Projects>
    </Error>
  );
}

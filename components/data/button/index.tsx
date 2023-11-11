import { ButtonProps } from "codiedigital/dist/cjs/components/data/button/interfaces"

import { Button as ButtonCodie } from "codiedigital/dist/cjs/components/data";

import * as S from "./styles";

export function Button(props: ButtonProps) {
  return (
    <S.Button>
      <ButtonCodie {...props}/>
    </S.Button>
  );
}

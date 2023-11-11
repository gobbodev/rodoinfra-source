import { NextImage } from "codiedigital/dist/cjs/components/data";

import { IProjectsObject } from "src/interfaces/generics";

export function CardProject({ item }: { item: IProjectsObject }) {
  return (
    <div className="item">
      <div className="box-item">
        <div className="image-before">
          {item.imageBefore && <NextImage baseImage src={item.imageBefore} />}
        </div>
        <h5 className="font-24">ANTES</h5>
      </div>
      <div className="box-item">
        <div className="image-after">
          {item.imageAfter && <NextImage baseImage src={item.imageAfter} />}
        </div>
        <h5 className="font-24">DEPOIS</h5>
      </div>
    </div>
  );
}

import { NextImage } from "codiedigital/dist/cjs/components/data";
import { ICompany } from "src/interfaces/generics";

export function CardCompany({ item }: { item: ICompany }) {
  return (
    <div className="content-item">
      <div className="box-top margin-b-30">
        <NextImage baseImage src={`${item.placeReceived}/${item.fileData}`} />
      </div>
    </div>
  );
}

import { NextImage } from "codiedigital/dist/cjs/components/data";
import { ICompany } from "src/interfaces/generics";

export function CardCompany({ item }: { item: ICompany }) {
  const painelURL: string | undefined = process.env.painelURL;
  
  return (
    <div className="content-item">
      <div className="box-top margin-b-30">
        <NextImage src={`${painelURL}${item.placeReceived}/${item.fileData}`} />
      </div>
    </div>
  );
}

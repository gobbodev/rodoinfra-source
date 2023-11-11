import { NextImage } from "codiedigital/dist/cjs/components/data";
import { IDelivery } from "src/interfaces/generics";

export function Items({ data }: { data: IDelivery[] }) {
  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="item">
          {item.image && (
            <div className="box-image">
              <NextImage baseImage src={item.image} />
            </div>
          )}

          {item.title && <h4 className="font-32">{item.title}</h4>}

          {item.description && (
            <div
              className="font-16"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          )}
        </div>
      ))}
    </>
  );
}

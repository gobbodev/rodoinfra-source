import { NextImage } from "codiedigital/dist/cjs/components/data";
import { IReview } from "src/interfaces/generics";

export function CardReview({ item }: { item: IReview }) {
  return (
    <div className="content-item">
      <div className="box-top margin-b-30">
       
          <div className="box-image">
            <NextImage baseImage={item.image ? true : false} src={ item.image ? item.image : "/images/customers/userdef.png"} />
          </div>
       
        <div className="text">
          {item.title && <h4 className="font-24-bold">{item.title}</h4>}
          {item.subtitle && (
            <h6 className="font-16-regular">{item.subtitle}</h6>
          )}
        </div>
      </div>

      <div className="box-bottom">
        {item.description && (
          <div
            className="font-16"
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
        )}
      </div>
    </div>
  );
}

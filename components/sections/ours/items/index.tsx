import { NextImage } from "codiedigital/dist/cjs/components/data";

import { mockItems } from "./mock-items";

export function Items() {
  return (
    <>
      {mockItems.map((item, index) => (
        <div key={index} className="item">
          <div className="content-left">
            <div style={{ width: "14px" }} className="box-icon">
              <NextImage src="/images/ours/check.png" />
            </div>
          </div>
          <div className="content-right">
            <h6 className="font-16-bold">{item.title}</h6>
            <p className="font-16">{item.phrase}</p>
          </div>
        </div>
      ))}
    </>
  );
}

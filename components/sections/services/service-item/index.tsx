import { useEffect, useState } from "react";

import { NextImage } from "codiedigital/dist/cjs/components/data";

import { IServices } from "src/interfaces/generics";

export function ServiceItem({ services }: { services: IServices[] }) {
  const [active, setActive] = useState<number>(services[0].id);

  const [sectionPad, setSectionPad] = useState(false);

  useEffect(() => {
    const handleSet = () => {
      {
        window.innerWidth < 1280 ? setSectionPad(true) : setSectionPad(false);
      }
    };
    window.addEventListener("resize", handleSet);

    return () => {
      window.removeEventListener("resize", handleSet);
    };
  }, []);

  return (
    <div className="block">
      <div className="out-container">
        {services.map((service) => (
          <div
            className="box-image"
            key={service.image}
            style={{ display: active === service.id ? "block" : "none" }}
          >
            <NextImage src={service.image} baseImage />
          </div>
        ))}
      </div>
      <div className={`custom-container ${sectionPad ? "section-pad" : ""}`}>
        <ul>
          {services.map((service) => (
            <li key={service.id} onMouseEnter={() => setActive(service.id)}>
              <div className="subtitle">
                <div className="box-icon">
                  <NextImage src={service.thumb} baseImage />
                </div>
                <h5 className="font-20 uppercase">{service.title}</h5>
              </div>

              <div
                className="phrase font-16"
                dangerouslySetInnerHTML={{ __html: service.description }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

import {
  InstagramIcon,
  IconWhatsInverse,
  EmailIcon,
  PinIcon,
} from "codiedigital/dist/cjs/components/icons";
import { useSocialLinks } from "codiedigital/dist/cjs/hooks/use-social-links";
import { IIcon } from "codiedigital/dist/cjs/components/icons/interfaces";
import { useFrontSocialLinks } from "./useFrontSocialLinks";

import { LinkSocial } from "./linkSocial";
import { Clock } from "public/svg/contact/ClockSVG";

interface IFrontSocialData {
  url: string;
  text: string;
  icon: JSX.Element;
}

export function SocialContact() {
  const { whatsapp, maps, time, email, instagram } = useFrontSocialLinks();

  const socialData: IFrontSocialData[] = [
    whatsapp,
    maps,
    email,
    time,
    instagram,
  ];

  return (
    <>
      {socialData &&
        socialData.length > 0 &&
        socialData.map((info, index) => (
          <LinkSocial
            key={index}
            info={{
              url: info.url,
              text: info.text,
              icon: info.icon,
            }}
          />
        ))}
    </>
  );
}

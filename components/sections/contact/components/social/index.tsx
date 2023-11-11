import {
  PhoneIcon,
  FacebookIcon,
  InstagramIcon,
  IconWhatsInverse,
  EmailIcon,
  PinIcon,
} from "codiedigital/dist/cjs/components/icons";
import { useSocialLinks } from "codiedigital/dist/cjs/hooks/use-social-links";

import { LinkSocial } from "./linkSocial";
import { Clock } from "public/svg/contact/ClockSVG";

export function SocialContact() {
  const icons = [
    IconWhatsInverse({ fill: "#444" }),
    PinIcon({ fill: "#444" }),
    Clock(),
    InstagramIcon({ fill: "#444" }),
    EmailIcon({ fill: "#444" }),
  ];

  const texts = [
    "(41) 3527-7371",
    "Curitiba - PR",
    "8h às 18h, de segunda a sexta (exceto feriados)",
    "contato@rodoinfra.com.br",
    "@rodoinfra",
  ];

  const { whatsapp, email, instagram } = useSocialLinks();

  const socialData = [whatsapp, email, whatsapp, whatsapp, instagram];

  const socialJoined = socialData.map((item, index) => {
    return {
      url: item.url,
      icon: icons[index],
      text: texts[index],
    };
  });

  return (
    <>
      {socialJoined &&
        socialJoined.length > 0 &&
        socialJoined.map((info, index) => (
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

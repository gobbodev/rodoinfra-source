type SocialNames = "maps" | "time" | "whatsapp" | "instagram" | "email";
type ISocialItem = {
  [key in SocialNames]: {
    url: string;
    text: string;
    icon: JSX.Element;
  };
};

import { useSocialLinks } from "codiedigital/dist/cjs/hooks/use-social-links";
import {
    InstagramIcon,
    IconWhatsInverse,
    EmailIcon,
    PinIcon,
  } from "codiedigital/dist/cjs/components/icons";


  import { Clock } from "public/svg/contact/ClockSVG";


export function useFrontSocialLinks(): ISocialItem {
  const { whatsapp, email, instagram } = useSocialLinks();

  const socialLinks: ISocialItem = {
    whatsapp: {
        url: whatsapp.url,
        text: "(41) 3527-7371",
        icon: IconWhatsInverse({ fill: "#444" })
      },
    maps: {
      url: "https://maps.app.goo.gl/HdLkVpVEwBRQCLS59",
      text: "Curitiba - PR",
      icon: PinIcon({ fill: "#444" })
    },
    time: {
      url: "https://maps.app.goo.gl/HdLkVpVEwBRQCLS59",
      text: "8h às 18h, de segunda a sexta (exceto feriados)",
      icon: Clock()
    },
    instagram:{
        url: instagram.url,
        text: "@rodoinfra",
        icon: InstagramIcon({ fill: "#444" })
    },
    email:{
        url: email.url,
        text: "contato@rodoinfra.com.br",
        icon: EmailIcon({ fill: "#444" })
    },
  };

  return socialLinks;
}

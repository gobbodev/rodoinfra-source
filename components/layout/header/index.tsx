import Link from "next/link";

import {
  Error,
  Container,
  NextImage,
  MenuMobile,
  Button,
} from "codiedigital/dist/cjs/components/data";
import { useSocialLinks } from "codiedigital/dist/cjs/hooks/use-social-links";
import { IMenu as IMenuMobileSocial } from "codiedigital/dist/cjs/interfaces/header";

import { navigationLinks } from "../data";

import * as S from "./styles";
import {
  IconWhats,
  InstagramIcon,
} from "codiedigital/dist/cjs/components/icons";

export function Header() {
  const { facebook, instagram, linkedin, whatsapp } = useSocialLinks();

  const footerMenuMobile: IMenuMobileSocial[] = [
    {
      id: 1,
      icon: "FacebookIcon",
      link: "",
      href: facebook.url,
      targetBlank: true,
    },
    {
      id: 2,
      icon: "InstagramIcon",
      link: "",
      href: instagram.url,
      targetBlank: true,
    },
    {
      id: 3,
      icon: "LinkedinIcon",
      link: "",
      href: linkedin.url,
      targetBlank: true,
    },
  ];

  return (
    <S.Header>
      <Error name="header">
        

        <Container>
        <MenuMobile
          linksMenu={navigationLinks}
          bottomInfos={{ contactList: footerMenuMobile }}
        />
          <div className="content-left">
            <div className="box-logo">
              <NextImage src="/images/header/logo-header.png" />
            </div>
          </div>

          <div className="content-right">
            <nav className="menu-links">
              {navigationLinks.map((item) => (
                <Link
                  className="font-18-light"
                  key={`header-${item.id}`}
                  href={item.href}
                >
                  {item.link}
                </Link>
              ))}

              <Link className="wpp font-18" target="_blank" href={whatsapp.url || "/"}>
                <span>
                  <IconWhats fill="#fff" />
                  <span>(41) 3527-7371</span>
                </span>
              </Link>

              <Link className="insta" target="_blank" href={instagram.url || "/"}>
                <InstagramIcon fill="#fff" />
              </Link>
            </nav>
          </div>
        </Container>
      </Error>
    </S.Header>
  );
}

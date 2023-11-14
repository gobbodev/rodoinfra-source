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
import { useEffect, useRef } from "react";

export function Header() {
  const { facebook, instagram, linkedin, whatsapp } = useSocialLinks();
  const menuRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    // Aqui você pode acessar diretamente a .menu-box e manipular conforme necessário
    if (menuRef.current) {
      const menu: HTMLElement | null = menuRef.current;

      // Exemplo: adicionar um evento de clique aos elementos <a> dentro de .menu-box
      const links = menu.getElementsByTagName("a");
      for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", handleClick);
      }
    }
  }, [menuRef]);

  const handleClick = (event) => {
    // Manipule o clique nos elementos <a> conforme necessário
    const menuBoxElement = document.querySelector(".menu-box");
    const overlayElement: HTMLElement | null =
      document.querySelector(".overlay");

    if (menuBoxElement) {
      menuBoxElement.classList.remove("show");
    }

    if (overlayElement) {
      overlayElement.style.display = "none"; //a função removeChild é chamada pra remover qd clica no botao do menu, ent se remove o overlay antes da um runtime error
    }
  };

  return (
    <S.Header>
      <Error name="header">
        <Container>
          <div className="wrapper-menu-mobile" ref={menuRef}>
            <MenuMobile
              linksMenu={navigationLinks}
              bottomInfos={{ contactList: footerMenuMobile }}
            />
          </div>

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

              <Link
                className="wpp font-18"
                target="_blank"
                href={whatsapp.url || "/"}
              >
                <span>
                  <IconWhats fill="#fff" />
                  <span>(41) 3527-7371</span>
                </span>
              </Link>

              <Link
                className="insta"
                target="_blank"
                href={instagram.url || "/"}
              >
                <InstagramIcon fill="#fff" />
              </Link>
            </nav>
          </div>
        </Container>
      </Error>
    </S.Header>
  );
}

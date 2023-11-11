import Link from "next/link";

import {
  CodieIcon,
  LinkedinIcon,
  InstagramIcon,
} from "codiedigital/dist/cjs/components/icons";
import { useSocialLinks } from "codiedigital/dist/cjs/hooks/use-social-links";
import { Container, Error, NextImage } from "codiedigital/dist/cjs/components/data";

import { Button } from "components/data";
import { navigationLinks } from "../data";

import * as S from "./styles";

export function Footer() {
  const { linkedin, instagram } = useSocialLinks();

  return (
    <S.Footer>
      <Error name="header">
        <div className="footer-top">
          <Link href="#banner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="20.714 7.5 8.573 15"
            >
              <path
                d="M21.786 22.5a1.073 1.073 0 0 1-.758-1.831L26.697 15l-5.67-5.669a1.073 1.073 0 1 1 1.518-1.517l6.427 6.428a1.073 1.073 0 0 1 0 1.516l-6.427 6.428a1.07 1.07 0 0 1-.759.314Z"
                fill="#fff"
                fill-rule="evenodd"
                data-name="Path 290"
              />
            </svg>
          </Link>
        </div>

        <Container>
          <div className="content-footer font-16-light">
            <nav className="menu-nav-1">
              {navigationLinks.slice(0, 3).map((item) => (
                <Link key={item.id} href={item.href}>
                  {item.link}
                </Link>
              ))}
            </nav>

            <div className="box-logo">
              <NextImage src="/images/footer/logo-footer.png" />
            </div>

            <nav className="menu-nav-2">
              {navigationLinks.slice(3, 6).map((item) => (
                <Link key={item.id} href={item.href}>
                  {item.link}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-bottom">
            <div className="box-social">
              <Link href={linkedin.url ? linkedin.url : ""}>
                <LinkedinIcon fill="#fff"/>
              </Link>
              <Link href={instagram.url ? instagram.url : ""}>
                <InstagramIcon fill="#fff"/>
              </Link>
            </div>

            <div className="box-codie-logo">
              <Link
                href="https://codie.digital/?ref=fp-rodrigues/"
                target="_blank"
              >
                <CodieIcon fill="#fff" />
              </Link>
            </div>
          </div>
        </Container>
      </Error>
    </S.Footer>
  );
}

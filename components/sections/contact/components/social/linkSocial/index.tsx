import { ReactElement } from "react";

import Link from "next/link";

interface ILinkSocial {
  url: string;
  icon: ReactElement;
  text: string;
}

export function LinkSocial({ info }: { info: ILinkSocial }) {
  return (
    <>
      {info && (
        <Link href={info.url} target="_blank">
          <>{info.icon}</>
          {info.text}
        </Link>
      )}
    </>
  );
}

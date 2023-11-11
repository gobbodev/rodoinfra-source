import { Header } from "./header";
import { Footer } from "./footer";

export function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
}

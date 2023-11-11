import { getPageData } from "src/services/pages";
import { IPageInformations } from "src/interfaces/generics";

import { Banner } from "components/sections"; // mudar - jogar td pra um import só
import { Layout } from "components/layout";
import { Ours } from "components/sections/ours";
import { Delivery } from "components/sections/delivery";
import { Services } from "components/sections/services";
import { Parallax } from "components/sections/parallax";
import { Contact } from "components/sections/contact";
import { About } from "components/sections/about";
import { Projects } from "components/sections/projects";
import { Customers } from "components/sections/customers";

export default function HomePage({
  pageContent,
}: {
  pageContent: IPageInformations;
}) {
  return (
    <Layout>
      <Banner />
      <Ours data={pageContent.ours} />
      <Delivery data={pageContent.delivery} />
      <Services data={pageContent.services} />
      <Projects data={pageContent.projects}/>
      <Parallax />
      <Customers data={pageContent.customers}/>
      <About data={pageContent.about} />
      <Contact />
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const pageContent = await getPageData("home");

  return {
    props: {
      pageContent,
    },
  };
};

interface IHead {
  pageTitle: string;
  metaDescription: string;
  imageOpenGraph: string;
  headScripts: string;
}

interface IDepoimento {
  titulo: string;
  subtitulo?: string;
  descricao: string;
  imagem?: string;
  id: number;
  url?: string;
  categoriaId?: number;
  thumbnail?: string;
}
interface IEntregas {
  titulo: string;
  descricao: string;
  imagem?: string;
  id: number;
  url?: string;
}

interface IMarca {
  fileData: string;
  slug: string;
  placeReceived: string;
  id: number;
}

interface IProjeto {
  imagemAntes: string;
  imagemDepois: string;
  url: string;
  id: number;
}

interface IPageInformations {
  descricaoNossos: string;
  entregas: IEntregas[];
  servicos: IDepoimento[];
  imagemServico1: string;
  imagemServico2: string;
  projetos: IProjeto[];
  descricaoProjetos: string;
  marcas: IMarca[];
  depoimentos: IDepoimento[];
  descricaoSobre: string;
  imagemSobre: string;

  ours: IOurs;
  delivery: IDelivery[];
  services: IServices[];
  projects: IProjects;
  about: IAbout;
  customers: ICustomers;
}

interface IOurs {
  description: string;
}

interface IDelivery {
  title: string;
  description: string;
  image: string;
  url: string;
  id: number;
}

interface IServices {
  id: number;
  url: string;
  image: string;
  thumb: string
  title: string;
  description: string;
}

interface IProjects {
  swiperObjects: IProjectsObject[]
  description: string;
}

interface IProjectsObject {
  imageBefore: string;
  imageAfter: string;
  url: string;
  id: number;
}

interface ICustomers{
  companies: ICompany[];
  reviews: IReview[];
}

interface ICompany{
  fileData: string;
  slug: string;
  placeReceived: string;
  id: number;
}

interface IReview{
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  id: number;
}

interface IAbout {
  description: string;
  image: string;
}

export type {
  IHead,
  IPageInformations,
  IOurs,
  IDelivery,
  IServices,
  IAbout,
  IProjects,
  IProjectsObject,
  ICustomers,
  ICompany,
  IReview,
};

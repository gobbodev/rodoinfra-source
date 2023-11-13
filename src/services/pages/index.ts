import { api } from "codiedigital/dist/cjs/services/api";
import { IPageInformations } from "src/interfaces/generics";

export async function getPageData(url: string | string[] | undefined) {
  try {
    const response = await api
      .get<IPageInformations>(`pages/${url}`)
      .then((r) => r.data);

    return {
      ...response,

      ours: {
        description: response.descricaoNossos,
      },

      delivery: response.entregas.map((item) => ({
        title: item.titulo,
        description: item.descricao,
        image: item.imagem,
        url: item.url,
        id: item.id,
      })),

      services: response.servicos.map((item) => ({
        title: item.titulo,
        description: item.descricao,
        image: item.imagem,
        thumb: item.thumbnail,
        url: item.url,
        id: item.id,
      })),

      about: {
        description: response.descricaoSobre,
        image: response.imagemSobre,
      },

      projects: response.projetos.map((item) => ({
        imageBefore: item.imagemAntes,
        imageAfter: item.imagemDepois,
        ...(item.descricao && { description: item.descricao }),
        id: item.id,
      })),

      customers: {
        companies: response.marcas,
        reviews: response.depoimentos.map((item) => ({
          title: item.titulo,

          ...(item.subtitulo && { subtitle: item.subtitulo }),
          description: item.descricao,
          ...(item.imagem && { image: item.imagem }),
          ...(item.id as unknown as object), //mantem o item.id pq em ingles e port é a mema coisa
        })),
      },
    };
  } catch {
    return console.log("faltando back");
  }
}

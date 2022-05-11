const PaletaContext = {
  paletaEndpoint: () => `${Api.baseUrl}/paletas`,
  paletaLista: () => `${PaletaContext.paletaEndpoint()}/all-paletas`,
  paletaById: (id) => `${PaletaContext.paletaEndpoint()}/one-paleta/${id}`,
  createPaleta: () => `${PaletaContext.paletaEndpoint()}/create-paleta`,
  updatePaletaById: (id) =>
    `${PaletaContext.paletaEndpoint()}/update-paleta/${id}`,
  deletePaletaById: (id) =>
    `${PaletaContext.paletaEndpoint()}/delete-paleta/${id}`,
};

const SacolaContext = {
  getSacola: () => `${PaletaContext.paletaEndpoint()}/all-carrinho`,
  createSacola: () => `${PaletaContext.paletaEndpoint()}/create-carrinho`,
  purchase: () => `${PaletaContext.paletaEndpoint()}/finish-carrinho`,
};

export const Api = {
<<<<<<< HEAD
  baseUrl: process.env.REACT_APP_API_URL,
  ...PaletaContext,
  ...SacolaContext,
};
=======
    baseUrl:  process.env.REACT_APP_API_URL,
    ...PaletaContext,
    ...SacolaContext,
}
>>>>>>> 2f6e2134e02e2c912091bc3d1e26ce1d9d79cf2f

Page({
  data: {
    categorias: ['Todas', 'Café da Manhã', 'Almoço', 'Jantar', 'Lanches', 'Sobremesas'],
    categoriaAtual: 0,
    receitas: [
      {
        id: 1,
        nome: 'Omelete de Claras com Espinafre',
        categoria: 'Café da Manhã',
        tempoPreparo: '15 min',
        calorias: 180,
        imagem: '/images/omelete.png',
        ingredientes: [
          '3 claras de ovo',
          '1 xícara de espinafre',
          'Sal e pimenta a gosto'
        ],
        favorito: false
      },
      {
        id: 2,
        nome: 'Bowl de Quinoa com Legumes',
        categoria: 'Almoço',
        tempoPreparo: '25 min',
        calorias: 320,
        imagem: '/images/quinoa-bowl.png',
        ingredientes: [
          '1 xícara de quinoa cozida',
          'Mix de legumes grelhados',
          'Azeite de oliva'
        ],
        favorito: true
      },
      {
        id: 3,
        nome: 'Smoothie Verde',
        categoria: 'Lanches',
        tempoPreparo: '5 min',
        calorias: 150,
        imagem: '/images/smoothie.png',
        ingredientes: [
          'Espinafre',
          'Banana',
          'Leite de amêndoas'
        ],
        favorito: false
      }
    ],
    pesquisa: ''
  },

  onLoad() {
    this.filtrarReceitas()
  },

  mudarCategoria(e) {
    const categoria = e.currentTarget.dataset.index
    this.setData({
      categoriaAtual: categoria
    })
    this.filtrarReceitas()
  },

  pesquisarReceitas(e) {
    this.setData({
      pesquisa: e.detail.value
    })
    this.filtrarReceitas()
  },

  filtrarReceitas() {
    // Implementar lógica de filtro por categoria e pesquisa
  },

  toggleFavorito(e) {
    const index = e.currentTarget.dataset.index
    const receitas = this.data.receitas
    receitas[index].favorito = !receitas[index].favorito
    
    this.setData({
      receitas: receitas
    })

    wx.showToast({
      title: receitas[index].favorito ? 'Adicionado aos favoritos' : 'Removido dos favoritos',
      icon: 'success'
    })
  },

  verDetalhes(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `detalhes-receita/detalhes-receita?id=${id}`
    })
  }
}) 
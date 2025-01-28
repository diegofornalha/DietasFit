Page({
  data: {
    planoSemanal: [
      {
        dia: 'Segunda-feira',
        refeicoes: [
          {
            tipo: 'Café da Manhã',
            horario: '07:00',
            alimentos: ['Aveia', 'Banana', 'Iogurte'],
            calorias: 350
          },
          {
            tipo: 'Lanche da Manhã',
            horario: '10:00',
            alimentos: ['Maçã', 'Castanhas'],
            calorias: 200
          },
          {
            tipo: 'Almoço',
            horario: '13:00',
            alimentos: ['Arroz integral', 'Frango grelhado', 'Salada'],
            calorias: 600
          },
          {
            tipo: 'Lanche da Tarde',
            horario: '16:00',
            alimentos: ['Pão integral', 'Ovo cozido'],
            calorias: 250
          },
          {
            tipo: 'Jantar',
            horario: '19:00',
            alimentos: ['Sopa de legumes', 'Peito de frango'],
            calorias: 450
          }
        ]
      }
    ],
    diaAtual: 0
  },

  onLoad() {
    this.carregarPlanoAlimentar()
  },

  carregarPlanoAlimentar() {
    // Aqui você implementaria a lógica para carregar o plano alimentar do usuário
    // Por enquanto estamos usando dados mockados no data
  },

  mudarDia(e) {
    const dia = e.currentTarget.dataset.dia
    this.setData({
      diaAtual: dia
    })
  },

  adicionarRefeicao() {
    wx.showModal({
      title: 'Nova Refeição',
      content: 'Funcionalidade em desenvolvimento',
      showCancel: false
    })
  },

  editarRefeicao(e) {
    const index = e.currentTarget.dataset.index
    wx.showModal({
      title: 'Editar Refeição',
      content: 'Funcionalidade em desenvolvimento',
      showCancel: false
    })
  }
}) 
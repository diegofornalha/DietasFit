Page({
  data: {
    periodoSelecionado: 'semana', // semana, mes, ano
    metricas: {
      peso: {
        atual: 70.5,
        inicial: 75.0,
        meta: 68.0,
        historico: [
          { data: '2024-01-28', valor: 70.5 },
          { data: '2024-01-21', valor: 71.2 },
          { data: '2024-01-14', valor: 72.0 },
          { data: '2024-01-07', valor: 73.5 }
        ]
      },
      imc: {
        valor: 24.3,
        classificacao: 'Normal'
      },
      medidasCorporais: {
        braco: 32,
        cintura: 80,
        quadril: 95,
        coxa: 55
      },
      nutrientes: {
        proteinas: {
          meta: 120,
          consumido: 95
        },
        carboidratos: {
          meta: 250,
          consumido: 180
        },
        gorduras: {
          meta: 65,
          consumido: 45
        }
      },
      agua: {
        meta: 2000,
        consumido: 1500
      },
      calorias: {
        meta: 2000,
        consumido: 1850
      }
    }
  },

  onLoad() {
    this.atualizarMetricas()
  },

  mudarPeriodo(e) {
    const periodo = e.currentTarget.dataset.periodo
    this.setData({
      periodoSelecionado: periodo
    })
    this.atualizarMetricas()
  },

  atualizarMetricas() {
    // Aqui você implementaria a lógica para carregar as métricas do período selecionado
    // Por enquanto estamos usando dados mockados
  },

  registrarMedida() {
    wx.showModal({
      title: 'Nova Medida',
      content: 'Funcionalidade em desenvolvimento',
      showCancel: false
    })
  },

  verHistorico() {
    wx.navigateTo({
      url: 'historico/historico'
    })
  },

  definirMetas() {
    wx.navigateTo({
      url: 'metas/metas'
    })
  }
}) 
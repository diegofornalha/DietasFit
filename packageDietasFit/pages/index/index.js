Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    metricas: {
      calorias: 0,
      proteinas: 0,
      carboidratos: 0,
      gorduras: 0
    },
    refeicoesDiarias: [],
    metasDiarias: {
      agua: 0,
      passos: 0,
      calorias: 0
    }
  },

  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    // Carregar dados do usuário e métricas
    this.carregarDadosUsuario()
  },

  getUserProfile(e) {
    wx.getUserProfile({
      desc: 'Usado para personalizar sua experiência',
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },

  carregarDadosUsuario() {
    // Aqui você implementaria a lógica para carregar os dados do usuário
    // Por enquanto, vamos usar dados mockados
    this.setData({
      metricas: {
        calorias: 1200,
        proteinas: 60,
        carboidratos: 150,
        gorduras: 40
      },
      refeicoesDiarias: [
        {
          nome: 'Café da Manhã',
          horario: '07:00',
          alimentos: ['Aveia', 'Banana', 'Iogurte']
        },
        {
          nome: 'Almoço',
          horario: '12:00',
          alimentos: ['Arroz integral', 'Frango grelhado', 'Salada']
        }
      ],
      metasDiarias: {
        agua: 2000,
        passos: 10000,
        calorias: 2000
      }
    })
  },

  navegarParaPlanoAlimentar() {
    wx.navigateTo({
      url: '../plano-alimentar/plano-alimentar'
    })
  },

  navegarParaReceitas() {
    wx.navigateTo({
      url: '../receitas/receitas'
    })
  },

  navegarParaRestaurantes() {
    wx.chooseLocation({
      success: (res) => {
        console.log('Localização selecionada:', res)
        // Aqui você pode implementar a lógica para mostrar restaurantes próximos
        // Por exemplo, fazer uma chamada para uma API de restaurantes
        wx.showToast({
          title: 'Restaurante encontrado!',
          icon: 'success'
        })
      },
      fail: (err) => {
        console.error('Erro ao selecionar localização:', err)
        wx.showToast({
          title: 'Erro ao buscar localização',
          icon: 'error'
        })
      }
    })
  }
}) 
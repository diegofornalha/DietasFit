Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    dadosPerfil: {
      peso: 0,
      altura: 0,
      idade: 0,
      genero: '',
      objetivo: '',
      nivelAtividade: ''
    },
    historicoMedidas: [],
    preferencias: {
      restricoesAlimentares: [],
      alergias: [],
      objetivoCalorico: 0
    }
  },

  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    this.carregarDadosPerfil()
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

  carregarDadosPerfil() {
    // Simulando dados do perfil
    this.setData({
      dadosPerfil: {
        peso: 70.5,
        altura: 170,
        idade: 30,
        genero: 'Masculino',
        objetivo: 'Perda de peso',
        nivelAtividade: 'Moderado'
      },
      historicoMedidas: [
        { data: '2024-01-28', peso: 70.5, percentualGordura: 20 },
        { data: '2024-01-21', peso: 71.0, percentualGordura: 20.5 }
      ],
      preferencias: {
        restricoesAlimentares: ['Glúten', 'Lactose'],
        alergias: ['Amendoim'],
        objetivoCalorico: 2000
      }
    })
  },

  atualizarPerfil() {
    wx.showToast({
      title: 'Perfil atualizado!',
      icon: 'success'
    })
  },

  editarPreferencias() {
    wx.navigateTo({
      url: '../preferencias/preferencias'
    })
  },

  adicionarMedida() {
    wx.showModal({
      title: 'Nova Medida',
      content: 'Funcionalidade em desenvolvimento',
      showCancel: false
    })
  }
}) 
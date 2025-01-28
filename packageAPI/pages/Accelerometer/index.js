// packageAPI/pages/Accelerometer/index.js
Page({

    /**
     * Dados iniciais da página
     */
    data: {
  
    },
  
    /**
     * Função de ciclo de vida--Carregamento da página
     */
    onLoad: function (options) {
  
    },
  
    /**
     * Função de ciclo de vida--Página renderizada pela primeira vez
     */
    onReady: function () {
  
    },
  
    /**
     * Função de ciclo de vida--Página exibida
     */
    onShow: function () {
  
    },
  
    /**
     * Função de ciclo de vida--Página escondida
     */
    onHide: function () {
  
    },
  
    /**
     * Função de ciclo de vida--Página descarregada
     */
    onUnload: function () {
  
    },
  
    /**
     * Função de evento relacionada à página--Escuta a ação de puxar para baixo
     */
    onPullDownRefresh: function () {
  
    },
  
    /**
     * Função de evento de manipulação quando a página chega ao fundo
     */
    onReachBottom: function () {
  
    },
  
    /**
     * Função de evento de compartilhamento quando o usuário clica no canto superior direito
     */
    onShareAppMessage: function () {
  
    },
  
    emitstartAccelerometer() {
      wx.startAccelerometer({
        interval: 'game',
        complete(res) {
          console.log(res)
        }
      })    
    },
  
    emitstopAccelerometer() {
      wx.stopAccelerometer()
    },
  
    AccelerometerChangeHandler() {
      console.log('~~AccelerometerChangeHandler~~')
    },
  
    emitonAccelerometerChange() {
      wx.onAccelerometerChange(this.AccelerometerChangeHandler)
    },
  
    emitoffAccelerometerChange() {
      wx.offAccelerometerChange(this.AccelerometerChangeHandler)
    }
  })
  
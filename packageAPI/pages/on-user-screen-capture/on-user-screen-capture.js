// pages/API/screen-brightness/screen-brightness.js
Page({
    data: {},
  
    onUserCaptureScreen() {
      wx.showToast({
        title: 'Iniciando monitoramento',
      })
      wx.onUserCaptureScreen(() => {
        wx.showToast({
          title: 'Captura de tela do usuário detectada',
        })
      })
    },
  
    offUserScreenCapture() {
      wx.showToast({
        title: 'Monitoramento cancelado',
      })
      wx.offUserCaptureScreen();
    }
  })
  
// Carrega as variáveis do arquivo .env
require('dotenv').config();

//app.js
App({
  onLaunch: function (opt) {
    console.log('onLaunch: ', opt);
    // Exibir a capacidade de armazenamento local
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);

    // Login
    wx.login({
      success: res => {
        // Envie res.code para o backend para obter openId, sessionKey, unionId
      }
    });

    // Obter informações do usuário
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // Já autorizado, pode chamar diretamente getUserInfo para obter avatar e apelido sem exibir um popup
          wx.getUserInfo({
            success: res => {
              // Pode enviar res para o backend para decodificar o unionId
              this.globalData.userInfo = res.userInfo;

              // Como getUserInfo é uma requisição de rede, pode retornar após Page.onLoad
              // Portanto, um callback é adicionado aqui para evitar essa situação
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res);
              }
            }
          });
        }
      }
    });

    wx.onAppShow((res) => {
      console.log('onAppShow', res);
    });
    wx.onAppHide((res) => {
      console.log('onAppHide', res);
    });
  },
  globalData: {
    userInfo: null
  }
});

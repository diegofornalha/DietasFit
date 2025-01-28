// pages/API/get-network-type/get-network-type.js
Page({
    data: {
    },
  
    showToast() {
      console.log('wx.showToast');
      wx.showToast({
        title: '12345678901234567890',
        icon: 'success',
        duration: 2000,
        mask: false,
        success: (res) => {
          console.log('wx.showToast success', res);
        },
        fail: (res) => {
          console.log('wx.showToast fail', res);
        },
        complete: (res) => {
          console.log('wx.showToast complete', res);
        },
      })
    },
  
    hideToast() {
      console.log('wx.hideToast');
      wx.hideToast({
        success: (res) => {
          console.log('wx.hideToast success', res);
        },
        fail: (res) => {
          console.log('wx.hideToast fail', res);
        },
        complete: (res) => {
          console.log('wx.hideToast complete', res);
        },
      })
    },
  
    showLoading() {
      console.log('wx.showLoading');
      wx.showLoading({
        title: 'Carregando',
        mask: false,
        success: (res) => {
          console.log('wx.showLoading success', res);
        },
        fail: (res) => {
          console.log('wx.showLoading fail', res);
        },
        complete: (res) => {
          console.log('wx.showLoading complete', res);
        },
      })
    },
  
    hideLoading() {
      console.log('wx.hideLoading');
      wx.hideLoading({
        success: (res) => {
          console.log('wx.hideLoading success', res);
        },
        fail: (res) => {
          console.log('wx.hideLoading fail', res);
        },
        complete: (res) => {
          console.log('wx.hideLoading complete', res);
        },
      })
    },
  
    showModal() {
      console.log('wx.showModal');
      wx.showModal({
        title: 'Título',
        content: 'Esta é uma janela modal, esta é uma janela modal, esta é uma janela modal, esta é uma janela modal, esta é uma janela modal',
        showCancel: true,
        cancelText: 'Cancelar',
        cancelColor: '#2be81f',
        confirmText: 'Confirmar',
        confirmColor: '#fa5151',
        success (res) {
          if (res.confirm) {
            console.log('Usuário clicou em Confirmar')
          } else if (res.cancel) {
            console.log('Usuário clicou em Cancelar')
          }
        }
      })
    },
  
    showActionSheet() {
      console.log('wx.showActionSheet');
      wx.showActionSheet({
        alertText: 'Texto de Alerta',
        itemColor: '#fa5151',
        itemList: ['A', 'B', 'C', 'D', 'E', 'F'],
        success (res) {
          console.log('wx.showActionSheet success', res);
        },
        fail (res) {
          console.log('wx.showActionSheet fail', res)
        },
        complete (res) {
          console.log('wx.showActionSheet complete', res)
        },
      })
    }
  })
  
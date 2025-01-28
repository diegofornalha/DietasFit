// pages/API/add-contact/add-contact.js
Page({
    submit(e) {
      const formData = e.detail.value
      wx.addPhoneContact({
        ...formData,
        success() {
          wx.showToast({
            title: 'Contato criado com sucesso'
          })
        },
        fail() {
          wx.showToast({
            title: 'Falha ao criar contato'
          })
        }
      })
    }
  })
  
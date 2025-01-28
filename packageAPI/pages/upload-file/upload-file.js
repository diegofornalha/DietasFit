// pages/API/upload-file/upload-file.js

Page({
    chooseImage() {
      const self = this
      wx.chooseImage({
        success (res) {
          const tempFilePaths = res.tempFilePaths
          const files = res.tempFiles;
          wx.uploadFile({
            url: 'https://finchat-mop.finogeeks.club/api/v1/netdisk/upload/self?type=file&content={}', // Apenas para exemplo, não é um endereço de API real
            filePath: tempFilePaths[0],
            name: 'file',
            header: {
              'X-Consumer-Custom-ID': 'test',
            },
            success: res => {
              // Retorna o ID do arquivo
              console.log('uploadImage success, res is:', res)
              const data = typeof res.data === 'string' ? JSON.parse(res.data) : res.data
              const url = `https://finchat-mop.finogeeks.club/api/v1/mop/netdisk/download/${data.netdiskID}`
              self.setData({
                imageSrc: url
              });
              wx.showToast({
                title: 'Upload bem-sucedido',
                icon: 'success',
                duration: 1000
              })
            },
            fail({errMsg}) {
              console.log('uploadImage fail, errMsg is', errMsg)
            }
          })
        }
      })
    },
  })
  
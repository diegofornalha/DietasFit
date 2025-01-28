const example = require('./example.js')

function randomHexColor() {
  var r = Math.floor(Math.random() * 256); // Gera um valor aleatório de r dentro de 256
  var g = Math.floor(Math.random() * 256); // Gera um valor aleatório de g dentro de 256
  var b = Math.floor(Math.random() * 256); // Gera um valor aleatório de b dentro de 256
  var alpha = Math.random() * 0.4 + 0.6; // Gera um valor aleatório de a dentro de 1
  return `rgba(${r},${g},${b},${alpha})`; // Retorna a cor no formato rgba(r,g,b,a)
}

Page({
  onShareAppMessage() {
    return {
      title: 'Criar Canvas',
      path: 'packageAPI/pages/canvas/canvas'
    }
  },

  log1(e) {
    console.log('ctx1:', e.type, e)
  },

  log2(e) {
    console.log('ctx2:', e.type, e)
  },

  onLoad() {

    const methods = Object.keys(example)
    this.setData({
      methods
    })

    // Forma antiga de obter o canvas
    const ctx1 = wx.createCanvasContext('canvas1');
    console.log('ctx1', ctx1)

    // Nova forma de obter o canvas
    let ctx2
    let canvas2
    const query = wx.createSelectorQuery()
    query.select('#canvas2').fields({ node: true, size: true }).exec((res) => {
      canvas2 = res[0].node
      ctx2 = canvas2.getContext('2d')

      // Pode definir o valor de dpr para desenhar imagens de alta resolução
      const dpr = 1 || wx.getSystemInfoSync().pixelRatio
      canvas2.width = res[0].width * dpr
      canvas2.height = res[0].height * dpr
      console.log('ctx2', ctx2)
    })

    // A biblioteca básica fino é compatível com as novas e antigas maneiras de obter contextos, ambas podem obter o mesmo contexto
    // Quando o canvas possui o atributo native, indica que é usado um componente nativo
    // Nos componentes nativos, apenas as APIs putImageData e getImageData terão diferenças

    const that = this
    methods.forEach(function (method) {
      that[method] = function () {
        console.log("run:", method)
        let color = null
        if (method === 'setRandom') {
          color = randomHexColor()
        }
        example[method](ctx1, true, color)
        // Na versão antiga, é necessário chamar a interface draw
        try {
          // O novo canvas do WeChat não tem o método draw, então adiciona-se um tratamento de erro para compatibilidade
          ctx1.draw(true, (res) => { console.log('ctx1 draw finish:', res) })
        } catch (err) {
        }

        example[method](ctx2, false, color, canvas2)
        try {
          // O novo canvas do WeChat não tem o método draw, então adiciona-se um tratamento de erro para compatibilidade
          ctx2.draw(true, (res) => { console.log('ctx2 draw finish:', res) })
        } catch (err) {
        }
      }
    })
  },

  toTempFilePath() {
    wx.canvasToTempFilePath({
      canvasId: 'canvas1',
      success(res) {
        console.log('canvas1', res)
      },

      fail(res) {
        console.log('canvas1', res)
      }
    })

    const query = wx.createSelectorQuery()
    query.select('#canvas2').fields({ node: true, size: true }).exec((res) => {
      const canvas = res[0].node

      wx.canvasToTempFilePath({
        canvas,
        success(res) {
          console.log('canvas2', res)
        },

        fail(res) {
          console.log('canvas2', res)
        }
      })
    })
  },
  imageData() {

    // Versão antiga
    // Cria um quadrado verde
    const arr = new Array(100 * 100 * 4);
    for (var i = 0; i < arr.length; i += 4) {
      arr[i + 0] = 0;
      arr[i + 1] = 255;
      arr[i + 2] = 0;
      arr[i + 3] = 255;
    }
    // Desenha o quadrado verde na coordenada 0 0
    wx.canvasPutImageData({
      canvasId: 'canvas1',
      x: 0,
      y: 0,
      width: 100,
      height: 100,
      data: new Uint8ClampedArray(arr),
      success(res) {
        console.log(res)
      },
      fail: console.log
    })
    // Obtém a imagem da coordenada 0 0 com tamanho 100 * 100
    wx.canvasGetImageData({
      canvasId: 'canvas1',
      x: 50,
      y: 50,
      width: 100,
      height: 100,
      success(res) {
        console.log(res)
        // Desenha a imagem obtida na coordenada 200 0
        // Vai aparecer dois quadrados verdes
        wx.canvasPutImageData({
          canvasId: 'canvas1',
          x: 200,
          y: 0,
          width: 100,
          height: 100,
          data: res.data,
          success(res) {
            console.log(res)
          },
          fail: console.log
        })
      },
      fail: console.log
    })


    // Nova versão
    const query = wx.createSelectorQuery()
    query.select('#canvas2').fields({ node: true, size: true }).exec((res) => {
      const canvas = res[0].node
      const context = canvas.getContext('2d')
      // Dados de um quadrado verde
      const imgData = context.createImageData(100, 100);
      for (var i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i + 0] = 0;
        imgData.data[i + 1] = 255;
        imgData.data[i + 2] = 0;
        imgData.data[i + 3] = 255;
      }

      context.putImageData(imgData, 0, 0, 20, 20, 100, 100)

      const image = context.getImageData(50, 50, 100, 100)
      context.putImageData(image, 200, 0, 20, 20, 100, 100)
    })

  }
})

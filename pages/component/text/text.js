const texts = [
    'Janeiro de 2011, WeChat 1.0 lançado',
    'Em maio do mesmo ano, WeChat 2.0 com Walkie-Talkie lançado',
    'Outubro, WeChat 3.0 adiciona a funcionalidade "Shake"',
    'Março de 2012, usuários do WeChat ultrapassam 100 milhões',
    'Abril, WeChat 4.0 lança o Moments',
    'Em julho do mesmo ano, WeChat 4.2 lança a plataforma pública',
    'Agosto de 2013, WeChat 5.0 lança o WeChat Pay',
    'Setembro de 2014, WeChat lança o WeChat Work',
    'No mesmo mês, lança o WeChat Card Pack',
    'Janeiro de 2015, primeiro anúncio no Moments do WeChat',
    'Janeiro de 2016, WeChat Work lançado',
    'Janeiro de 2017, Mini Programas lançados',
    '......'
  ]
  
  Page({
    onShareAppMessage() {
      return {
        title: 'text',
        path: 'pages/component/text/text'
      }
    },
  
    data: {
      text: '',
      canAdd: true,
      canRemove: false
    },
    extraLine: [],
  
    add() {
      this.extraLine.push(texts[this.extraLine.length % 12])
      this.setData({
        text: this.extraLine.join('\n'),
        canAdd: this.extraLine.length < 12,
        canRemove: this.extraLine.length > 0
      })
      setTimeout(() => {
        this.setData({
          scrollTop: 99999
        })
      }, 0)
    },
    remove() {
      if (this.extraLine.length > 0) {
        this.extraLine.pop()
        this.setData({
          text: this.extraLine.join('\n'),
          canAdd: this.extraLine.length < 12,
          canRemove: this.extraLine.length > 0,
        })
      }
      setTimeout(() => {
        this.setData({
          scrollTop: 99999
        })
      }, 0)
    }
  })
  
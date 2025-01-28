Page({
    onShareAppMessage() {
      return {
        title: 'Exibição de Componentes Oficiais do Mini Programa',
        path: 'pages/component/index'
      }
    },
  
    data: {
      list: [
        {
          id: 'view',
          name: 'Contêiner de Visualização',
          open: false,
          pages: ['view', 'scroll-view', 'swiper', 'match-media', 'movable', 'cover-view', 'page-container', 'share-element']
        }, {
          id: 'content',
          name: 'Conteúdo Básico',
          open: false,
          pages: ['text', 'icon', 'rich-text', 'progress']
        }, {
          id: 'form',
          name: 'Componentes de Formulário',
          open: false,
          pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'picker-view', 'radio', 'slider', 'switch', 'textarea', 'editor', 'keyboard-accessory']
        }, {
          id: 'nav',
          name: 'Navegação',
          open: false,
          pages: ['navigator']
        }, {
          id: 'media',
          name: 'Componentes de Mídia',
          open: false,
          pages: ['image', 'video', 'camera', 'webrtc']
        }, {
          id: 'canvas',
          name: 'Canvas',
          open: false,
          pages: ['canvas']
        }, {
          id: 'open',
          name: 'Capacidades Abertas',
          open: false,
          pages: ['web-view']
        }, {
          id: 'page-attr',
          name: 'Configuração de Atributos da Página',
          pages: ['page-meta']
        }, {
          id: 'map',
          name: 'Mapa',
          pages: ['map', 'multiple-map']
        }
      ],
      theme: 'light'
    },
  
    onLoad() {
      this.setData({
        theme: wx.getSystemInfoSync().theme || 'light'
      })
  
      if (wx.onThemeChange) {
        wx.onThemeChange(({ theme }) => {
          this.setData({ theme })
        })
      }
    },
  
    kindToggle(e) {
      const id = e.currentTarget.id
      const list = this.data.list
      for (let i = 0, len = list.length; i < len; ++i) {
        if (list[i].id === id) {
          list[i].open = !list[i].open
        } else {
          list[i].open = false
        }
      }
      this.setData({
        list
      })
    }
  })
  
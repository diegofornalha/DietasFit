Page({
    onShareAppMessage() {
      return {
        title: 'APIs do MiniApp',
        path: 'pages/API/index'
      }
    },
    data: {
      list: [{
        id: 'base',
        name: 'Básico',
        open: false,
        pages: [
        {
          zh: 'Buffer',
          url: 'buffer/buffer'
        },
        {
          zh: 'Obter parâmetros de inicialização do mini programa',
          url: 'launch-options/launch-options'
        },
        {
          zh: 'Eventos em nível de aplicativo',
          url: 'app-level-event/app-level-event'
        },
        {
          zh: 'Temporizador',
          url: 'timer/timer'
        },
        {
          zh: 'Roteamento',
          url: 'router/router'
        },
        {
          zh: 'Navegação',
          url: 'jump/jump'
        }
        ],
      },
        {
          id: 'page',
          name: 'Interface',
          open: false,
          pages: [
            {
              zh: 'Interação',
              url: 'intereaction/intereaction'
            },
            {
              zh: 'Barra de Navegação',
              url: 'navigationBar/navigationBar'
            },
            {
              zh: 'Configurar TabBar',
              url: '@set-tab-bar'
            },
            {
              zh: 'Rolagem de Página',
              url: 'page-scroll/page-scroll'
            },
            {
              zh: 'Animação',
              url: 'animation/animation'
            },
            {
              zh: 'Canvas',
              url: 'canvas/canvas'
            },
            {
              zh: 'Informações de Posição do Menu',
              url: 'menu-info/menu-info'
            },
            {
              zh: 'Obter Informações de Nós WXML',
              url: 'get-wxml-node-info/get-wxml-node-info'
            },
            {
              zh: 'Estado de Interseção de Layout de Nós WXML',
              url: 'intersection-observer/intersection-observer'
            },
          ]
        }, {
          id: 'device',
          name: 'Dispositivo',
          open: false,
          pages: [
            {
              zh: 'Obter Estado da Rede do Telefone',
              url: 'get-network-type/get-network-type'
            }, {
              zh: 'Monitorar Mudanças de Rede do Telefone',
              url: 'on-network-status-change/on-network-status-change'
            }, {
              zh: 'Obter Informações do Sistema do Telefone',
              url: 'get-system-info/get-system-info'
            }, {
              zh: 'Fazer uma Chamada Telefônica',
              url: 'make-phone-call/make-phone-call'
            }, {
              zh: 'Escanear Código',
              url: 'scan-code/scan-code'
            },{
              zh: 'Área de Transferência',
              url: 'clipboard-data/clipboard-data'
            }, {
              zh: 'Brilho da Tela',
              url: 'screen-brightness/screen-brightness'
            }, {
              zh: 'Obter Evento de Captura de Tela do Usuário',
              url: 'on-user-screen-capture/on-user-screen-capture'
            }, {
              zh: 'Vibração',
              url: 'vibrate/vibrate'
            }, {
              zh: 'Contatos do Telefone',
              url: 'add-contact/add-contact'
            }
          ]
        }, {
          id: 'network',
          name: 'Rede',
          open: false,
          pages: [
            {
              zh: 'Fazer uma Requisição',
              url: 'request/request'
            }, {
              zh: 'WebSocket',
              url: 'web-socket/web-socket'
            }, {
              zh: 'Enviar Arquivo',
              url: 'upload-file/upload-file'
            }, {
              zh: 'Baixar Arquivo',
              url: 'download-file/download-file'
            }
          ]
        }, {
          id: 'media',
          name: 'Mídia',
          open: false,
          pages: [
            {
              zh: 'Imagem',
              url: 'image/image'
            }, 
            // {
            //   zh: 'Áudio',
            //   url: 'audio/audio'
            // },
            // {
            //   zh: 'Gravação',
            //   url: 'voice/voice'
            // }, {
            //   zh: 'Vídeo',
            //   url: 'video/video'
            // },
            {
              zh: 'Carregar Fonte Dinamicamente',
              url: 'load-font-face/load-font-face'
            },
            {
              zh: 'Preview de Mídia',
              url: 'previewMedia/index'
            },
            {
              zh: 'Obter Faixa de Texto Selecionado',
              url: 'getSelectedTextRange/index'
            },
            {
              zh: 'Converter Arquivo para Base64',
              url: 'fileToBase64/index'
            },
            {
              zh: 'Áudio',
              url: 'innerAudioContext/index'
            },
            {
              zh: 'Gerenciador de Gravação',
              url: 'recorderManager/index'
            }
          ]
        }, {
          id: 'location',
          name: 'Localização',
          open: false,
          pages: [
            {
              zh: 'Obter Localização Atual',
              url: 'get-location/get-location'
            }, {
              zh: 'Escolher Localização Usando Mapa Nativo',
              url: 'choose-location/choose-location'
            }, {
              zh: 'API de Localização',
              url: 'locationapi/index'
            }
          ]
        }, {
          id: 'storage',
          name: 'Armazenamento de Dados',
          pages: [
            {
              zh: 'Armazenamento Local',
              url: 'storage/storage'
            },
            // {
            //   zh: 'Gerenciador de Logs',
            //   url: 'LogManager/index'
            // },
            // {
            //   zh: 'Obter Gerenciador de Logs em Tempo Real',
            //   url: 'getRealtimeLogManager/index'
            // }
          ],
        }, {
          id: 'route',
          name: 'Roteamento',
          pages: [
            {
              zh: 'Canal de Eventos',
              url: 'EventChannel/firstpage/index'
            }
          ],
        }, {
          id: 'file',
          name: 'Arquivo',
          pages: [
            {
              zh: 'Gerenciador de Sistema de Arquivos',
              url: 'FileSystemManager/writefile'
            }
          ],
        }, {
          id: 'Accelerometer',
          name: 'Acelerômetro',
          pages: [
            {
              zh: 'Acelerômetro',
              url: 'Accelerometer/index'
            }
          ],
        }, {
          id: 'encryption',
          name: 'Criptografia',
          pages: [
            {
              zh: 'Obter Valores Aleatórios',
              url: 'getRandomValues/getRandomValues'
            }
          ],
        }, {
          id: 'checkIsOpenAccessibility',
          name: 'Acessibilidade',
          pages: [
            {
              zh: 'Verificar se a Acessibilidade Está Ativada',
              url: 'checkIsOpenAccessibility/index'
            }
          ],
        }
      ],
      isSetTabBarPage: false,
      theme: 'light'
    },
    onShow() {
      this.leaveSetTabBarPage()
    },
    onHide() {
      this.leaveSetTabBarPage()
    },
    kindToggle(e) {
      const id = e.currentTarget.id; const
        list = this.data.list
      for (let i = 0, len = list.length; i < len; ++i) {
        if (list[i].id === id) {
          if (list[i].url) {
            wx.navigateTo({
              url: '/packageAPI/pages/' + list[i].url
            })
            return
          }
          list[i].open = !list[i].open
        } else {
          list[i].open = false
        }
      }
      this.setData({
        list
      })
    },
    enterSetTabBarPage() {
      this.setData({
        isSetTabBarPage: true
      })
    },
    leaveSetTabBarPage() {
      this.setData({
        isSetTabBarPage: false
      })
    },
  })
  
// Carrega as variáveis do arquivo .env
require('dotenv').config();

module.exports = {
  extApi: [
    { 
      // API de interação comum
      name: 'customEvent',
      params: {
        url: process.env.PHIZCLIP_APP_URL || '' // Exemplo de uso de uma variável de ambiente
      }
    },
    {
      name: 'customEvent1',
      params: {
        foo: process.env.PHIZCLIP_APP_FOO || '' // Outro exemplo de uso de uma variável de ambiente
      }
    },
  ]
}

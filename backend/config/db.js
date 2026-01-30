const config = require('../knexfile.js');
const knex = require('knex')(config);
knex.migrate.latest([config]);
// knex.raw('select 1')
//   .then(() => {
//     console.log('Banco conectado com sucesso')
//     process.exit(0)
//   })
//   .catch(err => {
//     console.error('Erro ao conectar:', err)
//     process.exit(1)
//   })
module.exports = knex;
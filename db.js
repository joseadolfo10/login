const mysql = require('mysql’); // LEMBRAR: $ npm install mysql

const app = express();
// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
host: 'localhost',
user: 'seu_usuario',
password: 'sua_senha',
database: 'nomedoBancoDeDados'
});
// Conexão com o banco de dados
connection.connect((err) => {
if (err) {
console.error('Erro ao conectar ao banco de dados:', err);
return;
}
console.log('Conexão bem-sucedida ao banco de dados MySQL');
});
module.exports = connection;

// Modelo de usuários | por enquanto sem banco de dados

const users = [
  { email: 'ifaedu123@gmail.com', password: '004987' },
  { email: 'alunoifal.ede@gmail.com', password: 'soulindu123' },
  { email: 'informatica922@gmail.com', password: 'minhasenha003' },
  { email: 'manoel.gomes@hotmail.com', password: 'tentei321' },
  { email: 'adolfo123@gmail.com', password: 'informatico34'}
];

function adicionarUsuario(usuario) {
  users.push(usuario);
}

function acharUsuario(email, senha) {
  return users.find(user => user.email === email && user.password === senha);
}

module.exports = {
  adicionarUsuario,
  acharUsuario
};
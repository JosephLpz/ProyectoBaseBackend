// test/usuarioController.test.js

const chai = require('chai');
const app = require('../src/server.js');

// Usa dynamic import para módulos ES
(async () => {
  const chaiHttp = await import('chai-http');
  chai.use(chaiHttp.default); // Usa chaiHttp.default porque es un módulo ES

  const should = chai.should();

  describe('Usuario Controller', () => {

    // Prueba para obtener todos los usuarios
    describe('GET /api/usuarios', () => {
      it('debería obtener todos los usuarios', (done) => {
        chai.request(app)
          .get('/api/usuarios')
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            done();
          });
      });
    });

    // Prueba para crear un nuevo usuario
    describe('POST /api/usuarios', () => {
      it('debería crear un nuevo usuario', (done) => {
        const usuario = {
          nombre: 'Juan',
          email: 'juan@example.com',
          password: 'contraseña123',
          edad: 25
        };
        chai.request(app)
          .post('/api/usuarios')
          .send(usuario)
          .end((err, res) => {
            res.should.have.status(201);
            res.body.should.be.a('object');
            res.body.should.have.property('nombre').eql('Juan');
            res.body.should.have.property('email').eql('juan@example.com');
            done();
          });
      });
    });

  });
})();

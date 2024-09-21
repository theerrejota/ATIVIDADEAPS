const mongoose = require('mongoose');

const emprestimoSchema = new mongoose.Schema({
  dataEmprestimo: {
    type: Date,
    default: Date.now,
    required: true,
  },
  dataDevolucao: {
    type: Date,
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  livro: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Livro',
    required: true,
  }
});

module.exports = mongoose.model('Emprestimo', emprestimoSchema);

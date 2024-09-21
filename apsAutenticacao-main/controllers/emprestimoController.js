const Emprestimo = require('../models/emprestimoModels');
const Livro = require('../models/livroModels');

exports.postEmprestimo = async (req, res) => {
  try {
    const { livroId } = req.body;
    const livro = await Livro.findById(livroId);

    if (!livro || !livro.disponivel) {
      return res.status(400).send({ mensagem: 'Livro indisponível' });
    }

    const emprestimo = new Emprestimo({
      usuario: req.user._id,
      livro: livroId,
    });

    livro.disponivel = false;
    await emprestimo.save();
    await livro.save();

    res.status(201).send(emprestimo);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.updateLivro = async (req, res) => {
  try {
    const emprestimo = await Emprestimo.findById(req.params.id).populate('livro');
    if (!emprestimo) {
      return res.status(404).send({ mensagem: 'Empréstimo não encontrado' });
    }

    emprestimo.dataDevolucao = Date.now();
    emprestimo.livro.disponivel = true;

    await emprestimo.save();
    await emprestimo.livro.save();

    res.send(emprestimo);
  } catch (error) {
    res.status(400).send(error);
  }
};

const Livro = require('../models/livroModels');

exports.getLivros = async (req, res) => {
  try {
    const livros = await Livro.find();
    res.send(livros);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getLivroById = async (req, res) => {
    try {
      const livro = await Livro.findById(req.params.id);
      if (!livro) {
        return res.status(404).json({ message: 'Livro não encontrado' });
      }
      res.json(livro);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

exports.postLivro = async (req, res) => {
  try {
    const livro = new Livro(req.body);
    await livro.save();
    res.status(201).send(livro);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.updateLivro = async (req, res) => {
  try {
    const livro = await Livro.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!livro) {
      return res.status(404).send();
    }
    res.send(livro);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteLivro = async (req, res) => {
  try {
    const livro = await Livro.findByIdAndDelete(req.params.id);
    if (!livro) {
      return res.status(404).send();
    }
    res.send(livro);
  } catch (error) {
    res.status(500).send(error);
  }
};

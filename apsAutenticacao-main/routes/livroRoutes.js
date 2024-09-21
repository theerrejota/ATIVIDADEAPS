const express = require('express');
const { listarLivros, criarLivro, atualizarLivro, deletarLivro } = require('../controllers/livroController');
const auth = require('../middlewares/authMiddleware');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Livros
 *   description: Gerenciamento de livros
 */

/**
 * @swagger
 * /livros:
 *   get:
 *     summary: Listar todos os livros
 *     tags: [Livros]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de livros
 */
router.get('/', auth, getLivros);

/**
 * @swagger
 * /api/livros/{id}:
 *   put:
 *     summary: buscar Livros existente por id
 *     tags: [Livros]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do livro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               autor:
 *                 type: string
 *               genero:
 *                 type: string
 *     responses:
 *       200:
 *         description: Livro encontrado com sucesso
 *       404:
 *         description: Livro não encontrado
 */
router.get('/:id', auth , getLivroById);

/**
 * @swagger
 * /livros:
 *   post:
 *     summary: Criar um novo livro
 *     tags: [Livros]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               autor:
 *                 type: string
 *               genero:
 *                 type: string
 *     responses:
 *       201:
 *         description: Livro criado com sucesso
 */

router.post('/', auth, postLivro);


/**
 * @swagger
 * /livros/{id}:
 *   put:
 *     summary: Atualizar um livro existente
 *     tags: [Livros]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               autor:
 *                 type: string
 *               genero:
 *                 type: string
 *     responses:
 *       200:
 *         description: Livro atualizado com sucesso
 */
router.put('/:id', auth, updateLivro);

/**
 * @swagger
 * /livros/{id}:
 *   delete:
 *     summary: Deletar um livro
 *     tags: [Livros]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Livro deletado com sucesso
 */
router.delete('/:id', auth, deleteLivro);

module.exports = router;

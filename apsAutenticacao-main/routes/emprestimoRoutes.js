const express = require('express');
const { criarEmprestimo, devolverLivro } = require('../controllers/emprestimoController');
const auth = require('../middlewares/authMiddleware');
const { updateLivro } = require('../controllers/livroController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Empréstimos
 *   description: Gerenciamento de empréstimos de livros
 */

/**
 * @swagger
 * /emprestimos:
 *   post:
 *     summary: Criar um novo empréstimo
 *     tags: [Empréstimos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               livroId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Empréstimo criado com sucesso
 *       400:
 *         description: Erro ao criar empréstimo
 */
router.post('/', auth, postEmprestimo);

/**
 * @swagger
 * /emprestimos/{id}/devolver:
 *   put:
 *     summary: Devolver um livro
 *     tags: [Empréstimos]
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
 *         description: Livro devolvido com sucesso
 */
router.put('/:id/devolver', auth, updateLivro);

module.exports = router;

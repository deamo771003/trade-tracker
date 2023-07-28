const express = require('express')
const router = express.Router()
const { authenticated } = require('../../middleware/api-auth')
const transactionsController = require('../../controllers/transaction-controller')

router.get('/public/:id/currentUser', authenticated, transactionsController.getCurrentUserPublicTransaction)
router.post('/:id/replies', authenticated, transactionsController.postReply)
router.delete('/:id/deleteReplies', authenticated, transactionsController.deleteReply)
router.get('/:id/replies', authenticated, transactionsController.getReplies)
router.post('/:id/like', authenticated, transactionsController.addLike)
router.delete('/:id/unlike', authenticated, transactionsController.removeLike)
router.get('/:id/likes', authenticated, transactionsController.getUserLikes)
router.post('/publics/:id', authenticated, transactionsController.postPublic)
router.delete('/publics/:id', authenticated, transactionsController.deletePublic)
router.get('/:id/history', authenticated, transactionsController.getHistoryTransactions)
router.get('/:id/byDate',authenticated,transactionsController.getTransactionsForTheDay)
router.get('/top', authenticated, transactionsController.getTopUsers)
router.get('/publics', authenticated, transactionsController.getPublicTransactions)
router.post('/range', authenticated, transactionsController.getTransactions)
router.get('/:id', authenticated, transactionsController.getTransaction)
router.put('/:id', authenticated, transactionsController.putTransaction)
router.delete('/:id', authenticated, transactionsController.removeTransaction)
router.post('/', authenticated, transactionsController.postTransaction)
module.exports = router

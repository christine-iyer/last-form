const router = require('express').Router()
const bookmarkCtrl = require('../../controllers/api/bookmarks')


/* /api/bookmarks/:id
DELETE
destroy bookmark
*/
router.delete('/:id',  bookmarkCtrl.destroyBookmark, bookmarkCtrl.respondWithBookmark)
/*
/api/bookmarks/:id
PUT
update bookmark
*/
router.put('/:id', bookmarkCtrl.updateBookmark, bookmarkCtrl.respondWithBookmark)
/*
/api/bookmarks
POST
create bookmark
*/
router.post('/',  bookmarkCtrl.createBookmark, bookmarkCtrl.respondWithBookmark)

module.exports = router
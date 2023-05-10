const { Schema, model } = require('mongoose')

const bookmarkSchema = new Schema({
  title: { type: String, required: true },
  link: { type: String, required: true }
}, {
  timestamps: true
})

module.exports = model('Bookmark', bookmarkSchema)
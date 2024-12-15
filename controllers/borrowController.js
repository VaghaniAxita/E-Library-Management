const Book = require('../models/Book');

exports.borrowBook = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book.isAvailable) throw new Error('Book not available');
    book.isAvailable = false;
    book.borrowedBy = req.user.id;
    await book.save();
    res.status(200).json({ message: 'Book borrowed successfully' });
  } catch (error) {
    next(error);
  }
};

exports.returnBook = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    book.isAvailable = true;
    book.borrowedBy = null;
    await book.save();
    res.status(200).json({ message: 'Book returned successfully' });
  } catch (error) {
    next(error);
  }
};

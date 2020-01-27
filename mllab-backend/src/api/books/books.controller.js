const Book = request('models/book');

exports.create = async (ctx) => {
  const {

  } = ctx.request.body;

  const book = new book({
    title,
    authors,
    publishedDate,
    price,
    tags
  });

  try {
    await book.save();
  } catch(e) {
    return ctx.throw(500, e);
  }

  ctx.body = book;
}

exports.list = (ctx) => {
  ctx.body = 'listed';
};
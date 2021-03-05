import { model, Schema, Document } from 'mongoose';
import { Book } from '../interfaces/books.interface';

const bookSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
});

const bookModel = model<Book & Document>('Book', bookSchema);

export default bookModel;

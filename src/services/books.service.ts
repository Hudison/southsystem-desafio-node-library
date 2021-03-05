
import { CreateBookDto } from '../dtos/books.dto';
import HttpException from '../exceptions/HttpException';
import { Book } from '../interfaces/books.interface';
import bookModel from '../models/books.model';
import { isEmpty } from '../utils/util';

class BookService {
  public books = bookModel;

  public async findAllBook(): Promise<Book[]> {
    const books: Book[] = await this.books.find();
    return books;
  }

  public async findBookById(bookId: string): Promise<Book> {
    const findBook: Book = await this.books.findOne({ _id: bookId });
    if (!findBook) throw new HttpException(409, "You're not book");

    return findBook;
  }

  public async createBook(bookData: CreateBookDto): Promise<Book> {
    if (isEmpty(bookData)) throw new HttpException(400, "You're not bookData");

    const findBook: Book = await this.books.findOne({ isbn: bookData.isbn });
    if (findBook) throw new HttpException(409, `ISBN ${bookData.isbn} already exists`);
    const createBookData: Book = await this.books.create(bookData);

    return createBookData;
  }

  public async updateBook(bookId: string, bookData: Book): Promise<Book> {
    if (isEmpty(bookData)) throw new HttpException(400, "You're not bookData");

    const findBook: Book = await this.books.findOne({ isbn: bookData.isbn });
    if (findBook) throw new HttpException(409, `ISBN ${bookData.isbn} already exists`);

    const updateBookById: Book = await this.books.findByIdAndUpdate(bookId, bookData);

    if (!updateBookById) throw new HttpException(409, "You're not book");

    return updateBookById;
  }

  public async deleteBookData(bookId: string): Promise<Book> {
    const deleteBookById: Book = await this.books.findByIdAndDelete(bookId).select('-password');
    if (!deleteBookById) throw new HttpException(409, "You're not book");

    return deleteBookById;
  }
}

export default BookService;

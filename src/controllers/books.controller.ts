import { NextFunction, Request, Response } from 'express';
import { CreateBookDto } from '../dtos/books.dto';
import { Book } from '../interfaces/books.interface';
import bookService from '../services/books.service';

class BooksController {
  public bookService = new bookService();

  public getBooks = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllBooksData: Book[] = await this.bookService.findAllBook();
      res.status(200).json({ data: findAllBooksData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getBookById = async (req: Request, res: Response, next: NextFunction) => {
    const bookId: string = req.params.id;

    try {
      const findOneBookData: Book = await this.bookService.findBookById(bookId);
      res.status(200).json({ data: findOneBookData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };
  
  public createBook = async (req: Request, res: Response, next: NextFunction) => {
    const bookData: CreateBookDto = req.body;

    try {
      const createBookData: Book = await this.bookService.createBook(bookData);
      res.status(201).json({ data: createBookData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateBook = async (req: Request, res: Response, next: NextFunction) => {
    const bookId: string = req.params.id;
    const bookData: Book = req.body;

    try {
      const updateBookData: Book = await this.bookService.updateBook(bookId, bookData);
      res.status(200).json({ data: updateBookData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteBook = async (req: Request, res: Response, next: NextFunction) => {
    const bookId: string = req.params.id;

    try {
      const deleteBookData: Book = await this.bookService.deleteBookData(bookId);
      res.status(200).json({ data: deleteBookData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default BooksController;

import bcrypt from 'bcrypt';
import { CreateUserDto } from '../dtos/users.dto';
import HttpException from '../exceptions/HttpException';
import { Book } from '../interfaces/books.interface';
import { User } from '../interfaces/users.interface';
import userModel from '../models/users.model';
import { isEmpty } from '../utils/util';

class UserService {
  public users = userModel;

  public async findAllUser(): Promise<User[]> {
    const users: User[] = await this.users.find();
    return users;
  }

  public async findUserById(userId: string): Promise<User> {
    const findUser: User = await this.users.findOne({ _id: userId }).populate('favoriteBooks');
    if (!findUser) throw new HttpException(409, "You're not user");

    return findUser;
  }

  public async createUser(userData: CreateUserDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser: User = await this.users.findOne({ email: userData.email });
    if (findUser) throw new HttpException(409, `Email ${userData.email} already exists`);

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const createUserData: User = await this.users.create({ ...userData, password: hashedPassword });

    return createUserData;
  }

  public async updateUser(userId: string, userData: User): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser: User = await this.users.findOne({ email: userData.email });
    if (findUser && findUser.email !== userData.email) throw new HttpException(409, `Email ${userData.email} already exists`);

    const hashedPassword = userData.password ? await bcrypt.hash(userData.password, 10) : null;

    const updateUserById: User = await this.users.findByIdAndUpdate(userId, userData.password ? { ...userData, password: hashedPassword } : userData);

    if (!updateUserById) throw new HttpException(409, "You're not user");

    return updateUserById;
  }

  public async deleteUserData(userId: string): Promise<User> {
    const deleteUserById: User = await this.users.findByIdAndDelete(userId).select('-password');
    if (!deleteUserById) throw new HttpException(409, "You're not user");

    return deleteUserById;
  }

  public async updateFavoriteBooks(userId: string, books: Book[]): Promise<User> {
    const findUser = await this.users.findOne({ _id: userId });
    if (!findUser) throw new HttpException(409, "You're not user");
    findUser.favoriteBooks = books;
    await findUser.save();
    return findUser;
  }
}

export default UserService;

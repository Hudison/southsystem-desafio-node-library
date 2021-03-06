import { model, Schema, Document } from 'mongoose';
import { User } from '../interfaces/users.interface';

const userSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  favoriteBooks: [{
    type: Schema.Types.ObjectId, ref: 'Book'
  }]
});

const userModel = model<User & Document>('User', userSchema);

export default userModel;

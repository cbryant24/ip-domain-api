import * as Mongoose from 'mongoose';

export interface IUser extends Mongoose.Document {
  name: String;
  email: String;
  password: String;
}

export interface IUserModel extends Mongoose.Model<IUser> {}

const UserSchema: Mongoose.Schema = new Mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  }
  // { timestamps: true }
);

export const UserModel = Mongoose.model<IUser>('User', UserSchema);

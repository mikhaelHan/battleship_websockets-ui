import { IReqUser, IRequestEnum, IUser } from '../data/types';
import { Users } from '../data/data';

export const addUser = (data: IUser): IReqUser => {
  const isUser = Users.filter((el: IUser) => el.name === data.name);

  if (!isUser) {
    Users.push({ name: data.name, password: data.password });
  }

  const user: IReqUser = {
    type: IRequestEnum.reg,
    data: JSON.stringify({
      name: data.name,
      index: Date.now(),
      error: !isUser,
      errorText: !isUser ? 'User with this name is exist' : '',
    }),
    id: 0,
  };

  return user;
};

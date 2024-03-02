export enum IResponseEnum {
  reg = 'reg',
  create_room = 'create_room',
  add_user_to_room = 'add_user_to_room',
  add_ships = 'add_ships',
  attack = 'attack',
  finish = 'finish',
}

export enum IRequestEnum {
  reg = 'reg',
  update_winners = 'update_winners',
  update_room = 'update_room',
  create_game = 'create_game',
  start_game = 'start_game',
  turn = 'turn',
}

export interface IResponseData {
  type: IResponseEnum | IRequestEnum;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  id: number;
}

export interface IUser {
  name: string;
  password: string;
}

export interface IRespUser extends IResponseData {
  data: IUser;
}

export interface IReqUser extends IResponseData {
  data: string;
}

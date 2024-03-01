import { WebSocket } from 'ws';
import { IReqUser, IResponseData, IResponseEnum } from '../data/types';
import { addUser } from './user';
import { createRoom } from './rooms';

export const handlers = async (data: IResponseData, ws: WebSocket) => {
  if (data) {
    switch (data.type) {
      case IResponseEnum.reg:
        const resReg: IReqUser = addUser(JSON.parse(data.data));
        ws.send(JSON.stringify(resReg));
        break;

      case IResponseEnum.create_room:
        const resCreateRoom = createRoom(data);
        console.log(resCreateRoom);
        // ws.send(JSON.stringify(resCreateRoom));
        break;
    }
  }
};

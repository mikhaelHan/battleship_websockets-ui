import { WebSocket } from 'ws';
import { IReqUser, IResponseData, IResponseEnum } from '../data/types';
import { addUser } from './user';

export const handlers = async (data: IResponseData, ws: WebSocket) => {
  if (data) {
    switch (data.type) {
      case IResponseEnum.reg:
        const res: IReqUser = addUser(JSON.parse(data.data));
        ws.send(JSON.stringify(res));
        break;
    }
  }
};

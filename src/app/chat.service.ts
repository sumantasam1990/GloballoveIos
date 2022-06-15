import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {



  constructor(
    private socket: Socket,
  ) {


  }

  join() {
    this.socket.emit('join', {email: 'kundubikram3@gmail.com', id: '5509'});
  }

  sendMessage(msg: any) {
    this.socket.emit('send_msg_server', msg);
  }


}

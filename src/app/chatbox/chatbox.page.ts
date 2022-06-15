import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { ChatService } from '../chat.service';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import { ChatService } from '../chat.service';
import { RestapiService } from '../restapi.service';


@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.page.html',
  styleUrls: ['./chatbox.page.scss'],
})
export class ChatboxPage implements OnInit {

  messages: any = []
  url: string = 'https://globallove.online/api/gl/app/conversations/'
  fromId: any = '5509'
  msg = { txt: '' }
  toId: any
  toEmail: string
  toName: string
  typing: string

  constructor(
    private socket: Socket,
    private chat: ChatService,
    private restApi: RestapiService,
    private route: ActivatedRoute,

  ) {
     this.chat.join();
  }

  async ngOnInit() {
    this.toId = this.route.snapshot.params.id
    this.toEmail = this.route.snapshot.params.email
    this.toName = this.route.snapshot.params.name

    await this.getMessages();

    this.socket.on("new_msg", (data: any) => {
      this.typing = ''
      this.messages.push(data)
     })

     this.socket.on("typing_from_server", (data: any) => {
      this.typing = data.msg
     })





  }

  sendMessage() {
    const msg = { user: this.toEmail, msg: this.msg.txt, to: 5509, toname: 'Bikram Kundu', toemail: 'kundubikram3@gmail.com'}

    this.chat.sendMessage(msg)
    this.messages.push(msg)
    this.msg.txt = ''
  }

  async getMessages() {
    await this.restApi.getData(this.url + this.toId + '/' + '5509').then(res => {

      this.messages = res[0]
    })
  }

}

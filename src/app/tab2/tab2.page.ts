import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Socket } from 'ngx-socket-io';
import { ChatService } from '../chat.service';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  url: string = 'https://globallove.online/api/gl/app/chat/list/'
  users: any = []
  typing: string = ''

  constructor(
    private navctrl: NavController,
    private restApi: RestapiService,
    private router: Router,
    private chat: ChatService,
    private socket: Socket
  ) {}

  chatbox(id: number, email: string, name: string) {
    this.router.navigate(['chatbox', id, email, name])
  }

  ngOnInit(): void {
    this.chat.join()
      this.restApi.getData(this.url + '5509').then((res: any) => {
        this.users = res.users
      })

      this.socket.on("typing_from_server", (data: any) => {
        //this.typing = data.msg
      })
  }

}

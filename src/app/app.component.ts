import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private navctrl: NavController,
  ) {
    // Display content under transparent status bar (Android only)
    StatusBar.setOverlaysWebView({ overlay: true });
    StatusBar.setStyle({ style: Style.Light });
      this.navctrl.navigateForward('')

  }


}

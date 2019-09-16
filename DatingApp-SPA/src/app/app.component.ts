import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DatingApp-SPA';
  register = true;

  hideRegisterForm(event) {
this.register = event;

}

}


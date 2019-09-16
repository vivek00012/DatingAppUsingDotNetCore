import { HttpClient } from '@angular/common/http';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) { }
registerMode = false;
  ngOnInit() {
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

cancelRegisterMode(registerMode: boolean) {
  this.registerMode = registerMode;
}

}

import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-logintoast',
  templateUrl: './logintoast.component.html',
  styleUrls: ['./logintoast.component.css'],
})
export class LogintoastComponent implements OnInit {
  @Input() isVisible: boolean;
  @Input() message: string;
  constructor() {}

  ngOnInit(): void {}
  hide() {
    this.isVisible = false;
  }
}

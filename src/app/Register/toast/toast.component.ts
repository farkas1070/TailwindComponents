import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
  @Input() isVisible: boolean;
  @Input() message: string;


  constructor() { }

  ngOnInit(): void {
  }
  hide(){
    this.isVisible = false;
  }

}

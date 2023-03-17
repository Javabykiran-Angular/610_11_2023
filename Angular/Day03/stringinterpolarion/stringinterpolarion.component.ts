import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stringinterpolarion',
  templateUrl: './stringinterpolarion.component.html',
  styleUrls: ['./stringinterpolarion.component.css']
})
export class StringinterpolarionComponent implements OnInit {

  name:string='Sumit Raokhande';
  num:number=4;
  imgUrl:string='../../assets/bg4.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}

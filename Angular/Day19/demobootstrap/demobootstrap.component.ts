import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demobootstrap',
  templateUrl: './demobootstrap.component.html',
  styleUrls: ['./demobootstrap.component.css']
})
export class DemobootstrapComponent implements OnInit {

  arrproduct=[
    {
      name:'Motorolla',
      price:30000,
      qty:1
    },
    {
      name:'One Plus',
      price:35000,
      qty:1
    },
    {
      name:'Samsung',
      price:25000,
      qty:1
    },
    {
      name:'Realme',
      price:18000,
      qty:1
    },
    {
      name:'iPhone',
      price:65000,
      qty:1
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

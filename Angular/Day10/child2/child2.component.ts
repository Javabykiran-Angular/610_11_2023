import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Output() ChildStrEvent=new EventEmitter();

  @Output() ChildArrObjEvent=new EventEmitter();

    strdata:string='Data Send to parent....';

    
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

  onSend(){
      this.ChildStrEvent.emit(this.strdata);
      this.ChildArrObjEvent.emit(this.arrproduct);
  }

}

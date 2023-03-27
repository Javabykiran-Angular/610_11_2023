import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course:string[]=['Core java','Advnaced java','Spring Boot','Hibernate','JSP','Angular 12','Jenking','Docker'];


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
  selected:string='';

  constructor() { }

  ngOnInit(): void {
  }

  onMouseOver(item:any){
    console.log("Mouse over event Occur....")
    this.selected=item.name;
  }

  onMouseOut(){
    this.selected='';
  }

}

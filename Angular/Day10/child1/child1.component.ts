import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {


  @Input() parentStrData:string='';

  @Input() parentJsonData:any={};

  constructor() { }

  ngOnInit(): void {
  }

}

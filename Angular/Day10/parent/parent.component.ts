import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  strData:string='Parent Data send...';
  jsonObj={
    id:8,
    fname:'Sumit',
    role:'DevOps'
  }



  strDataReceived:string='';
arrdata:any[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-queryparameter',
  templateUrl: './queryparameter.component.html',
  styleUrls: ['./queryparameter.component.css']
})
export class QueryparameterComponent implements OnInit {

  jsonobj:any={};

  constructor(private routes:ActivatedRoute) { }

  ngOnInit(): void {
    this.GetDataFromUrl();
  }

  GetDataFromUrl(){
    this.routes.queryParamMap
    .subscribe((param:any)=>{
        this.jsonobj.myid=+param.get("id");
        this.jsonobj.myname=param.get("fname");
        this.jsonobj.myrole=param.get("role");
    })
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding1',
  templateUrl: './eventbinding1.component.html',
  styleUrls: ['./eventbinding1.component.css']
})
export class Eventbinding1Component implements OnInit {
  // count:number=0;
  count:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    if(this.count){
      console.log("click event occur..");
      // this.count++;
      this.count=false;
    }
    
  }

  onImage(){
    console.log("Image click...")
  }

  onDollerEvent(myevent:any){
    
    console.log(myevent)
    console.log(myevent.target.value)
  }

}

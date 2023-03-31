import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {

  strDetails:string='Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit mollitia at eius temporibus dolorum. Unde, error reprehenderit eos architecto sit ullam dolore velit labore cupiditate distinctio eligendi mollitia soluta voluptas?Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit mollitia at eius temporibus dolorum. Unde, error reprehenderit eos architecto sit ullam dolore velit labore cupiditate distinctio eligendi mollitia soluta voluptas?';
  constructor() { }

  ngOnInit(): void {
  }

}

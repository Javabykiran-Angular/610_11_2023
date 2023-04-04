import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any[]=[];
  constructor(private service:HttpService) { }

  ngOnInit(): void {
    this.GetPost();
  }

  GetPost(){
    this.service.getPost()
    .subscribe((response:any)=>{
      console.log(response);
      this.posts=response;
    })
  }

  onSend(inputTitle:any,inputBody:any){
    let obj={
      title:inputTitle,
      body:inputBody
    }

    this.service.Postdata(obj)
    .subscribe((response)=>{
      console.log(response);
    })

  }


}

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any[]=[];
  id!:number;
  title:string='';
  body:string='';
  isHidden:boolean=true;
  constructor(private service:HttpService) { }

  ngOnInit(): void {
    this.GetPost();
  }

  GetPost(){
    this.service.getPost()
    .subscribe((response:any)=>{
      console.log(response);
      this.posts=response;
    },(myerror)=>{
        alert("Error is Occured...")
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


  onEdit(item:any){
    console.log(item);
    this.id=item.id;
    this.title=item.title;
    this.body=item.body;
    this.isHidden=false;
  }

  onUpdate(){
    let obj={
      id:this.id,
      title:this.title,
      body:this.body
    }

    this.service.UpdateData(obj)
    .subscribe((response)=>{
      console.log(response);
      this.isHidden=true;
    })


  }

  onDelete(id:any){

      this.service.Deletedata(id)
      .subscribe((response)=>{
        console.log(response);
      })
  }

  

}

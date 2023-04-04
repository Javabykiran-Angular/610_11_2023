import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url:string="http://jsonplaceholder.typicode.com/posts";


  constructor(private http:HttpClient) { }

    getPost(){
      return (this.http.get(this.url));
    }

    Postdata(obj:any){
      return (this.http.post(this.url,obj));
    }



}

import { Ipost } from './../shared-classes-and-types/ipost';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private httpClient:HttpClient) { }
  getAllPosts():Observable<Ipost[]>{
    return this.httpClient.get<Ipost[]>('https://jsonplaceholder.typicode.com/posts');
  }
  getPost(id:string){
    return this.httpClient.get<Ipost[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  }
}

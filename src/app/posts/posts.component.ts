import { PostsService } from './../services/posts.service';
import { Ipost } from './../shared-classes-and-types/ipost';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts!:Ipost[]
  errMsg!:string
  constructor(private postsService:PostsService) { }
  displayPosts(){
    this.postsService.getAllPosts().subscribe(
      data=>{
       this.posts=data;
      },
      error=>{
        this.errMsg= error.message;
      }
    )
  }

  ngOnInit(): void {
    this.displayPosts();
  }

}

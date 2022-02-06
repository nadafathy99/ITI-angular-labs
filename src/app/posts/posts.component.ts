import { ActivatedRoute } from '@angular/router';
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
  id!:number
  constructor(private postsService:PostsService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.displayPosts();
    this.route.paramMap.subscribe((param)=>{
      const id = param.get('id');
      if (id){
        this.id= Number(id);
      }
    });
  }
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
  isSelected(id:number){
    console.log(this.id==id)
    return this.id== id;
  }

 

}

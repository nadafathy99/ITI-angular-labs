import { Ipost } from './../shared-classes-and-types/ipost';
import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-detalis',
  templateUrl: './post-detalis.component.html',
  styleUrls: ['./post-detalis.component.scss']
})
export class PostDetalisComponent implements OnInit {

  constructor(private route:ActivatedRoute, private postService:PostsService, private router :Router) { }
  details?:Ipost[]
  id?:string
  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      const id =params.get('id');
      if(id){
      this.postService.getPost(id).subscribe((result)=>{
        this.id=id;
        this.details= result;
      })}
    })
    
  }
  back(){
    this.router.navigate(['/posts',{id:this.id}])
  }

}

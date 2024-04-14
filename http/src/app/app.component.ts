import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Post } from './post.model';
import { CommonModule } from '@angular/common';
import { PostsService } from './post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnDestroy {
  loadedPosts:Post[] = [];
  isFetching = false;
  error : string ='';
  private errorSub :Subscription = new Subscription();  

  constructor(private postService : PostsService) { }

  ngOnInit() 
  { 

    this.errorSub = this.postService.error.subscribe((error)=>{
      this.error = error
    })
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.postService.createAndStorePost(postData.title,postData.content)
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postService.fetchPosts().subscribe((posts)=>{
      this.isFetching = false;
      this.loadedPosts = posts
    },error =>{
      this.error = error.message
      this.isFetching = false
    })
  }
  onClearPosts() {
    // Send Http request
    this.postService.clearAllPosts().subscribe(()=>{
      this.loadedPosts = []
    })
  }
  ngOnDestroy(): void {
    this.errorSub.unsubscribe()
  }
  onHandlingError(){
    this.error =''
  }
}

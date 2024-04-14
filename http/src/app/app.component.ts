import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { map } from 'rxjs';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  loadedPosts = [];

  constructor(private http: HttpClient) { }

  ngOnInit() { }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http
      .post<{name:string}>('https://angularseries-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json', postData)
      .subscribe((responseData) => {
        console.log(responseData)
      })
  }

  onFetchPosts() {
    this.fetchPosts()
  }
  private fetchPosts() {
    this.http
      .get<{ [key:string] :Post }>('https://angularseries-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
      .pipe(
        map((responeData) => {
          const  arr = []
          for (const keys in responeData) {
            if (responeData.hasOwnProperty(keys)) {
              const postData =  (responeData as any)[keys];
              arr.push({  id:keys ,...postData})
            }
          }
          console.log(arr)
        })
      )
      .subscribe(posts => {
      })

  }
  onClearPosts() {
    // Send Http request
  }
}

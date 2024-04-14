import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { catchError, map, Subject, tap, throwError } from "rxjs";
@Injectable({ providedIn: 'root' })
export class PostsService {
    constructor(private http: HttpClient) {
    }
    error = new Subject<string>()
    createAndStorePost(title: string, content: string) {
        const postData: Post = { title: title, content: content }
        this.http
            .post<{ name: string }>('https://angularseries-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json', postData, {
                observe: 'response'
            })
            .subscribe((responseData) => {
                console.log(responseData)
            }, (error) => {
                this.error.next(error)
            })
    }

    fetchPosts() {
        let searchParams = new HttpParams();
        searchParams = searchParams.append('print', 'pretty')
        searchParams = searchParams.append('beauty', 'pretty')

        return this.http
            .get<{ [key: string]: Post }>('https://angularseries-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
                {
                    headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
                    params: searchParams
                }
            )
            .pipe(
                map((responeData) => {
                    const arr = []
                    for (const keys in responeData) {
                        if (responeData.hasOwnProperty(keys)) {
                            const postData = (responeData as any)[keys];
                            arr.push({ id: keys, ...postData })
                        }
                    }
                    return arr;
                }),
                catchError(
                    errorRes => {
                        return throwError(errorRes)
                    }
                )
            )
    }
    clearAllPosts() {
        return this.http.delete('https://angularseries-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
            {
                observe: 'events'
            }
        ).pipe(
            tap(event => {
                if (event.type === HttpEventType.Response) {
                    console.log(event.body)
                }
            })
        )
    }

}
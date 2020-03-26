import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api/api.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  comments = new BehaviorSubject(null);
  constructor(private http: HttpClient, public API: ApiService) {}

  getAll(id) {
    const maxComments = 10;

    return this.http
      .get(
        `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=${maxComments}&videoId=${id}&key=${this.API.KEY}`
      )
      .subscribe((res: any) => {
        this.comments.next(res.items);
      });
  }
}

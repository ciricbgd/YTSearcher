import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api/api.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class RecommendedService {
  recommended = new BehaviorSubject(null);
  constructor(private http: HttpClient, public API: ApiService) {}

  getAll(id) {
    const maxRecommended = 5;

    return this.http
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxRecommended}&relatedToVideoId=${id}&type=video&key=${this.API.KEY}`
      )
      .subscribe((res: any) => {
        this.recommended.next(res.items);
      });
  }
}

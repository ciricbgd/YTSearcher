import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient, private API: ApiService) {}

  searchVideo(q) {
    return this.http.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${this.API.MAXRESULTS}&order=${this.API.ORDER}&q=${q}&regionCode=${this.API.REGION}&type=video&safeSearch=${this.API.SAFE}&key=${this.API.KEY}`
    );
  }
}

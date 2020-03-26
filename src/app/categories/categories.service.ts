import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(private http: HttpClient, public API: ApiService) {}

  getAll() {
    return this.http.get(
      `https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=${this.API.REGION}&key=${this.API.KEY}`
    );
  }

  getVideosByCategory(id) {
    const numVids = 10;

    return this.http.get(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${numVids}&regionCode=${this.API.REGION}&videoCategoryId=${id}&key=${this.API.KEY}`
    );
  }

  getMostPopular() {
    const numVids = 9;

    return this.http.get(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${numVids}&regionCode=${this.API.REGION}&key=${this.API.KEY}`
    );
  }
}

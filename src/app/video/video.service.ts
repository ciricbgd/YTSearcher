import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Video } from './video';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from '../api/api.service';
import { HttpClient } from '@angular/common/http';
import { CommentsService } from '../comments/comments.service';
import { RecommendedService } from '../recommended/recommended.service';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  public videoSrc = new BehaviorSubject<any>(null);
  video: Video = {
    src: this.videoSrc.asObservable()
  };

  moreVideos: any = new BehaviorSubject<any>(null);

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private API: ApiService,
    public commentsService: CommentsService,
    public recommendedService: RecommendedService
  ) {}

  changeVideo(src: string) {
    this.getVideo(src);

    const sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://youtube.com/embed/${src}`
    );
    this.videoSrc.next(sanitizedUrl);
  }

  getVideo(src: string) {
    this.http
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${src}&key=${this.API.KEY}`
      )
      .subscribe((res: any) => {
        console.log(res);

        const tempVid = res.items[0].snippet;
        this.video.publishedAt = tempVid.publishedAt;
        this.video.channelId = tempVid.channelId;
        this.video.title = tempVid.title;
        this.video.description = tempVid.description;
        this.video.thumbnails = tempVid.thumbnails;
        this.video.channelTitle = tempVid.channelTitle;
        this.video.categoryId = tempVid.categoryId;
        this.video.liveBroadcastContent = tempVid.liveBroadcastContent;
        this.video.defaultAudioLanguage = tempVid.defaultAudioLanguage;
        this.video.contentDetails = tempVid.contentDetails;

        // Get comments
        this.commentsService.getAll(src);

        // Get recommended videos
        this.recommendedService.getAll(src);
      });
  }
}

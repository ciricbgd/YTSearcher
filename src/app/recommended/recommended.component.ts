import { Component, OnInit } from '@angular/core';
import { RecommendedService } from './recommended.service';
import { VideoService } from '../video/video.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss']
})
export class RecommendedComponent implements OnInit {
  recommended: any;
  constructor(
    private recommendedService: RecommendedService,
    public videoService: VideoService
  ) {
    this.recommended = recommendedService.recommended;
  }

  recommendedClick(src) {
    this.videoService.changeVideo(src);
  }

  ngOnInit(): void {}
}

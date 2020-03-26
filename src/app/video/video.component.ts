import { Component, OnInit } from '@angular/core';
import { Video } from './video';
import { VideoService } from './video.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  video: Video;
  videoSource: string;

  constructor(private videoService: VideoService) {
    this.video = videoService.video;
  }

  ngOnInit(): void {
    this.videoService.video.src.subscribe(src => this.videoSource);
  }
}

import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video/video.service';
import { CategoriesService } from '../categories/categories.service';

@Component({
  selector: 'app-video-surface',
  templateUrl: './video-surface.component.html',
  styleUrls: ['./video-surface.component.scss']
})
export class VideoSurfaceComponent implements OnInit {
  moreVideos: any;
  videoSrc: any;

  constructor(
    private videoService: VideoService,
    private categoryService: CategoriesService
  ) {
    this.moreVideos = videoService.moreVideos;
    this.videoSrc = videoService.videoSrc;
  }

  changeVideo(id) {
    this.videoService.changeVideo(id);
  }

  ngOnInit(): void {
    this.categoryService.getMostPopular().subscribe((res: any) => {
      this.videoService.moreVideos.next(res.items);
    });
  }
}

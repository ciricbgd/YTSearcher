import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoriesService } from './categories.service';
import { VideoService } from '../video/video.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: any;
  videoSource: string;

  constructor(
    public categoriesService: CategoriesService,
    private videoService: VideoService
  ) {}

  setVideo(source) {
    this.videoSource = source;
  }

  selectCategory(id, title) {
    this.categoriesService.getVideosByCategory(id).subscribe((res: any) => {
      this.videoService.changeVideo(res.items[0].id);

      res.items.splice(0, 1);
      this.videoService.moreVideos.next(res.items);
    });
  }

  ngOnInit(): void {
    this.categoriesService.getAll().subscribe((res: any) => {
      this.categories = res.items;
    });

    this.videoService.video.src.subscribe(src => this.videoSource);
  }
}

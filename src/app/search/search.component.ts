import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api/api.service';
import { SearchService } from './search.service';
import { VideoService } from '../video/video.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public API: ApiService,
    private searchService: SearchService,
    private videoService: VideoService
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      REGION: this.API.REGION,
      MAXRESULTS: this.API.MAXRESULTS,
      ORDER: this.API.ORDER,
      DURATION: this.API.DURATION,
      SAFE: this.API.SAFE,
      STRING: ''
    });

    this.myForm.valueChanges.subscribe(() => {
      this.API.REGION = this.myForm.value.REGION;
      this.API.MAXRESULTS = this.myForm.value.MAXRESULTS;
      this.API.ORDER = this.myForm.value.ORDER;
      this.API.DURATION = this.myForm.value.DURATION;
      this.API.SAFE = this.myForm.value.SAFE;
    });
  }

  searchVideo() {
    this.videoService.videoSrc.next(null);
    this.searchService
      .searchVideo(this.myForm.value.STRING)
      .subscribe((res: any) => {
        res.items.forEach(video => {
          video.id = video.id.videoId;
        });
        this.videoService.videoSrc.next(null);
        this.videoService.moreVideos.next(res.items);
      });
  }
}

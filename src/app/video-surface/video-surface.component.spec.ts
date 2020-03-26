import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSurfaceComponent } from './video-surface.component';

describe('VideoSurfaceComponent', () => {
  let component: VideoSurfaceComponent;
  let fixture: ComponentFixture<VideoSurfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoSurfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoSurfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import { CommentsService } from './comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments: any;

  constructor(private commentsService: CommentsService) {
    this.comments = commentsService.comments;
  }

  ngOnInit(): void {}
}

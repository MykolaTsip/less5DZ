import { Component, OnInit } from '@angular/core';
import {QueryFilterDataService} from '../../services/query-filter-data.service';
import {Comment} from '../../models/Comment';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comments: Comment[];

  comment: Comment = {};

  constructor(private query: QueryFilterDataService) {
    this.query.getComments().subscribe(value => this.comments = value);
  }

  ngOnInit(): void {
  }


  findComment(FormComment: NgForm): void {
    const result = this.query.getFilterComments(this.comments, FormComment.control.value);

    console.log(result);
  }
}

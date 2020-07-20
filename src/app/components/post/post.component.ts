import { Component, OnInit } from '@angular/core';
import {QueryFilterDataService} from '../../services/query-filter-data.service';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[];

  constructor(private query: QueryFilterDataService) {
    this.query.getPosts().subscribe(value => this.posts = value);
  }

  ngOnInit(): void {
  }

}

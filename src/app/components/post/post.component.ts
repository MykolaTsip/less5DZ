import { Component, OnInit } from '@angular/core';
import {QueryFilterDataService} from '../../services/query-filter-data.service';
import {Post} from '../../models/Post';
import {NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[];

  post: Post = {};

  constructor(private query: QueryFilterDataService) {
    this.query.getPosts().subscribe(value => this.posts = value);
  }

  ngOnInit(): void {
  }


  searchPost(ngPost: NgForm): void {
    const result = this.query.getFilterPosts(this.posts, ngPost.control.value);
    console.log(result);
  }
}

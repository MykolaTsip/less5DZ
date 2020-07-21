import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/User';
import {Post} from '../models/Post';
import {Comment} from '../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class QueryFilterDataService {

  users: User[];

  posts: Post[];

  comments: Comment[];

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getFilterUsers(users: User[], user): User[] {

    const result = users.filter(value => value.username.toLowerCase().includes(user.username.toLowerCase())
      && value.email.toLowerCase().includes(user.email.toLowerCase()));

    this.users = result;

    return this.users;
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getFilterPosts(posts: Post[], post): Post[] {

    const result1 = posts.filter(value => value.id === +post.id
      || value.title.includes(post.title));

    this.posts = result1;

    return this.posts;
  }


  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>('https://jsonplaceholder.typicode.com/comments');
  }

  getFilterComments(comments: Comment[], comment): Comment[] {

    const result2 = comments.filter(value => value.postId === +comment.postId
      || value.id === +comment.id);

    this.comments = result2;

    return this.comments;
  }
}

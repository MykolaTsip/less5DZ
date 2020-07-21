import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {FormsModule} from '@angular/forms';
import {QueryFilterDataService} from './services/query-filter-data.service';
import { HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './components/comment/comment.component';
import { CurrentUserComponent } from './components/current-user/current-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    CommentComponent,
    CurrentUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'users', component: UserComponent,
        children: [{
          path: ':username', component: CurrentUserComponent
        }],
      },
      {
        path: 'posts', component: PostComponent
      },
      {
        path: 'comments', component: CommentComponent
      }
    ])
  ],
  providers: [QueryFilterDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {QueryFilterDataService} from '../../services/query-filter-data.service';
import {NgModel} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User = {};

  users: User[];


   currentUser: User[];

  constructor(private query: QueryFilterDataService) {
    this.query.getUsers().subscribe(value => this.users = value);
  }

  ngOnInit(): void {

  }



  sub(form: NgModel): void {
    this.currentUser = this.query.getFilterUsers(this.users, form.control.value);

    console.log(this.currentUser);
  }
}

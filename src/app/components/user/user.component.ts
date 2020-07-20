import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import {QueryFilterDataService} from '../../services/query-filter-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User = {};

  // users: User[];

  constructor(private query: QueryFilterDataService) {
    // this.query.getUsers().subscribe(value => this.users = value);
  }

  ngOnInit(): void {

  }


  sub(form: any) {
    
  }
}

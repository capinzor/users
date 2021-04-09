import { Component, OnInit } from '@angular/core';
//import { User } from '../../models/address';
import { ApiService } from '../../services/api/api.service';
import { Router } from '@angular/router';
import { UserlistI } from '../../models/userlist.interface';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  //users: User[] = [];
  users:UserlistI[]=[];

  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.api.getAllUsers().subscribe(data =>{
      this.users = data;
    })
  }

  editUser(id: any){
    this.router.navigate(['edit', id]); 
  }

  newUser(){
    this.router.navigate(['new']);
  }

}

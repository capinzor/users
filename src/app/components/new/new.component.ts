import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
import { UserI } from 'src/app/models/user.interface';
import { ResponseI} from '../../models/response.interface';
import { ApiService } from '../../services/api/api.service';
import { AlertsService } from '../../services/alerts/alerts.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newForm = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    website: new FormControl(''),
    street: new FormControl(''),
    suite:new FormControl(''),
    city:new FormControl(''),
    zipcode:new FormControl(''),
    lat:new FormControl(''),
    lng:new FormControl(''),
    namme:new FormControl(''),
    catchPhrase:new FormControl(''),
    bs:new FormControl(''),
  })

  constructor(private activaterouter:ActivatedRoute, private router:Router, private api:ApiService, private alert:AlertsService) { }

  ngOnInit(): void {
  }
  
  postForm(form:UserI){
    this.api.postUser(form).subscribe(data =>{
      console.log(data)
    })
  }
  leave(){
    this.router.navigate(['users']);
  }

}

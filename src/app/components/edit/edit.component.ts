import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserI } from '../../models/user.interface';
import { ResponseI} from '../../models/response.interface'
import { ApiService } from '../../services/api/api.service';
import { AlertsService } from '../../services/alerts/alerts.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private activaterouter:ActivatedRoute, private router:Router, private api:ApiService, private alert:AlertsService) { }

  dataUser: UserI | undefined;
  editForm = new FormGroup({
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
  
  ngOnInit(): void {
    let userid = this.activaterouter.snapshot.paramMap.get( 'id');
    this.api.getUserById(userid).subscribe(data =>{
      this.editForm.setValue({
        'name':data.name,
        'username':data.username,
        'email':data.email,
        'phone':data.phone,
        'website':data.website,
        'street':data.address.street,
        'suite':data.address.suite,
        'city':data.address.city,
        'zipcode':data.address.zipcode,
        'lat':data.address.geo.lat,
        'lng':data.address.geo.lng,
        'namme':data.company.name,
        'catchPhrase':data.company.catchPhrase,
        'bs':data.company.bs,
      })
       
    })
    
  }
    postForm(form:UserI) {
      let userid = this.activaterouter.snapshot.paramMap.get( 'id');
      this.api.putUser(form,userid).subscribe(data =>{
        let resp:ResponseI = data
        if(resp==resp){
          this.alert.showSuccess('Usuario Actualizado','Hecho');
        }else{
          this.alert.showError('No se pudo actualizar el usuario','Error');
          
        }
        console.log(resp.Status, 'falkfjlaf',resp.response)
        console.log('=========',resp)
      })
    }

    delete(){
      let userid = this.activaterouter.snapshot.paramMap.get( 'id');
      this.api.deleteUser(userid).subscribe(data =>{
        let resp:any = data
        if(data=='{}'){
          this.alert.showSuccess('Usuario Eliminado','Hecho');
          this.router.navigate(['users']);
        }else{
          this.alert.showError('Usuario Eliminado','Hecho');
          this.router.navigate(['users']);
        }
        console.log('++++',data)
      
      }); 
      console.log("eliminar")
    }

    leave(){
      this.router.navigate(['users']);
    }
  
}

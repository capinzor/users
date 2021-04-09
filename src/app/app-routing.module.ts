import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component'
import { EditComponent } from './components/edit/edit.component'
import { NewComponent } from './components/new/new.component'

const routes: Routes = [
  {path:'', redirectTo:'users', pathMatch:'full'},
  {path:'users', component:UsersComponent},
  {path:'new', component:NewComponent},
  {path:'edit/:id', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UsersComponent, EditComponent,NewComponent]
